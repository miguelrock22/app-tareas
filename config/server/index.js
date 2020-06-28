const express = require('express');

const app = express();

//JSON and UrlEncoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add headers
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.APP_FRONT_URL);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//Routes
app.use(require('../../routes/index'));

console.log(process.env.APP_PORT);

app.listen(process.env.APP_PORT, () => {
    console.log("Listening 3000")
});