const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Routes
app.use(require('../../routes/index'));

console.log(process.env.APP_PORT);

app.listen(process.env.APP_PORT, () => {
    console.log("Listening 3000")
});