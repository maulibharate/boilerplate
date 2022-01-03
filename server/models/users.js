const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        min: [3, 'Min 3 char'],
        max: [15,'Max 15 char allow'],
        required: true
    },

    lastName: {
        type: String,
        min: [3, 'Min 3 char'],
        max: [15,'Max 15 char allow'],
        required: true        
    },

    email: {
        type: String,
        required: true 
    },

    phone: {
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    confirmPassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

// We are hashing the password
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
    }
    next();
})

// genrate web token
userSchema.methods.genreateWebToken = async function() {
    const token = jwt.sign({ _id:this._id }, 'boilerPlateMadeByMauliBharate');
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
}

const User = mongoose.model("USER", userSchema);

module.exports = User;