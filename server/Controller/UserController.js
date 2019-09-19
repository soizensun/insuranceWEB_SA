const UserModel = require('../Models/User');

module.exports = {
    create: (req, res) => {
        let user = new UserModel({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });

        user.save()
            .then(result => {
                res.sent("SUCCESSED")
                res.json({ status: SUCCESSED, result: result});
            })
            .catch(error => {
                res.sent("FAILED")
                res.json({ status: FAILED, result: error});
            });

    },
}