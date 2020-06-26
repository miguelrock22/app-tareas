const express = require('express');

const app = express();

//JSON and UrlEncoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(require('../../routes/index'));

console.log(process.env.APP_PORT);

app.listen(process.env.APP_PORT, () => {
    console.log("Listening 3000")
});