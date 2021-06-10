const express = require("express");
const cookie_parser = require("cookie-parser");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.port || 3000;

app.use(cookie_parser("1234"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require("./routes"));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
