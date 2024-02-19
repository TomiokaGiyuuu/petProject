const bcrypt = require("bcrypt");
const User = require("../models/user");

class authController {
    //REGISTER
    async registration(req, res) {
        try {
            const{username, email, password} = req.body;

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            })

            const user = await newUser.save();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async login(req, res){
        try {
            const user = await User.findOne({email: req.body.email});
            if (!user)
                res.status(404).json("user not found");

            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if(!validPassword)
                res.status(400).json("wrong password");

            res.status(200).json(user);
        } catch (err) {
        }
    }
}

module.exports = new authController();
