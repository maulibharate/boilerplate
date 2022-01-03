const mongoose = require('mongoose');
const DB = 'mongodb+srv://jack:jack@cluster0.txbbl.mongodb.net/boilerplate?retryWrites=true&w=majority'


mongoose.connect(DB, {
    // userNameUrlParser: true
}).then(() => {
    console.log('DB connection successfull!!');
}).catch((error) => {
    console.log(`no connection ${error}`);
})