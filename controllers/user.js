let User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let insert = (user, handle) => {
    user.password = bcrypt.hashSync(user.password, 10);
    let u = new User(user);
    u.save(handle);
};

let login = async(user, handle) => {
    let res = null;
    await User.findOne({ email: user.email }, (err, userDb) => {
        if (err)
            return { ok: false, err };

        if (!userDb)
            return { ok: false, err: 'Usuario o contraseña incorrectos' };

        if (!bcrypt.compareSync(user.password, userDb.password))
            return { ok: false, err: 'Usuario o contraseña incorrectos' };
        return userDb;
    }).then(result => {
        let token = jwt.sign({
            user: result,
        }, process.env.TOKEN_SEED, { expiresIn: process.env.TOKEN_EXPIRE });

        res = {
            ok: true,
            user: result,
            token
        };
    }).catch(err => {
        res = err;
    });
    return res;
}

module.exports = {
    insert,
    login
}