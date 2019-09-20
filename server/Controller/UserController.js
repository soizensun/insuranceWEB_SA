const UserSchema = require('../Models/UserSchema');

module.exports = {
    create: (req, res) => {
        console.log(req.body);
        let user = new UserSchema({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });

        user.save()
            .then(() => {
                res.send("SUCCESSED")
                // res.json({ status: SUCCESSED, result: result});
            })
            .catch(() => {
                res.send("FAILED")
                // res.json({ status: FAILED, result: error});
            });

    },
}