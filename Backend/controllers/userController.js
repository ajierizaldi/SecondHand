const models = require('../models');

module.exports = {
    // register user
    register: async (req, res) => {
        try {
            // STEP 1 : check if email already exists
            const userExist = await models.User.findOne({
                where: {
                    email: req.body.email
                }
            });

            // if user exists
            if (userExist) throw new Error('User already exists');

            // STEP 2 : encrypt password

            // STEP 3 : create user
            const user = await models.User.create(req.body);

            return res.status(201).json({
                message: 'User created successfully',
                error: 0,
                data: user,
                success: true
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Something went wrong',
                error: error.message,
                data: null,
                success: false
            })
        }
    },


    // login user
    login: async (req, res) => {
        try {
            const alertAccount = "Invalid Username or Password";

            // STEP 1 : check if email exists
            const emailExist = await models.User.findOne({
                where: {
                    email: req.body.email
                }
            })

            // if email does not exist
            if (!emailExist) throw new Error(alertAccount);



        } catch (error) {
            return res.status(500).json({
                message: 'Something went wrong',
                error: error.message,
                data: null,
                success: false
            })
        }
    }
    // update user
    // delete user
}