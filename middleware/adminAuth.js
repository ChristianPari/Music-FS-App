const { model } = require("../models/Song");

const adminKey = process.env.ADMIN_KEY;

function adminAuth(req, res, next) {

    const reqKey = req.params.user_key;

    res.setHeader('Content-type', 'text/html');

    if (reqKey != adminKey) { return res.status(401).send("<h1>STATUS: 401</h1><h3>You aren't authorized to acess this page</h3>"); }

    next();

};

module.exports = adminAuth;