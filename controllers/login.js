require("dotenv").config();
const fs = require("fs");
const bcrypt = require("bcrypt");

function LoginUser(email, password) {
    return new Promise((resolve, reject) => {
        fs.readFile("users.json", (err, data) => {
            if (err) throw err;
            const user = JSON.parse(data);

            const email_object = user.map((element) => {
                return element.email;
            });

            const find_email = email_object.indexOf(email);

            if (find_email != -1) {
                if (bcrypt.compareSync(password, user[find_email].pass)) {
                    resolve(user[find_email].name);
                } else {
                    reject("1");
                }
            } else {
                reject("0");
            }
        });
    });
}

module.exports = {
    LoginUser,
};
