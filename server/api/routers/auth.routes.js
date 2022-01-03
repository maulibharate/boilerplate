const router = require('express').Router()
const user = require('../../models/users');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    console.log(req.body);
    // res.json({message: req.body});
    
    const { firstName, lastName, email, phone, password, confirmPassword } = req.body;
    
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
        return res.status(422).json({ error: "Plz filld the field properly" })
    }

    try {
        const userExist = await user.findOne({ email });
        if (userExist) {
            return res.status(422).json({ error: 'Email already Exist' });
        } else if (password !== confirmPassword) {
            return res.status(422).json({ error: 'Password are not matching' }); 
        } else {
            const user = new user({ firstName, lastName, email, phone, password, confirmPassword });

            await user.save();

            res.status(201).json({ message: 'User registered successfuly '});
        }
    } catch (err) {
        console.log(err);
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Plz filld the field properly' });
        }

        const userLogin = await user.findOne({ email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.genreateWebToken();
            console.log(token);

            res.cookie('jwtoken', token, {
                expires: new Date(Date.now() + 30000000),
                httpOnly: true
            });

            if(!isMatch) {
                res.status(400).json({ error: "invalid Credientials"});
            } else {
                res.json({ message: "user Signin Successfully"});
            }
        } else {
            res.status(400).json({ error: "Invalid Credientials"});
        }

        } catch(err) {
            console.log(err);
    }

})

// router.get('/dashboard', JWTTokenProvider, (req, res) => {
//     res.send(req.rootUser);
// })

router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', {path: '/'});
    res.status(200).send("User logout");
})

module.exports = router;