# Login System
This is a basic system using bcrypt for password hash, and json for management\
**The file users.json need to have a [] in order to work**



## License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


## Features

- Recover password by e-mail
- Recover password by SMS
- Integrated Login
- Integrated Register

  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file\
**Recommended for Email recover using GMAIL**

`EMAIL` **Required**

`EMAIL_PASS` **Required**

`SMS_KEY` **NOT Required, BUT recommendable**

  
## API Reference

#### Register an user

```http
  POST /register
```

| req.body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. The name of user |
| `email` | `string` | **Required**. The email of user |
| `telnumber` | `int` | **Required**. The mobile number of user |
| `pass` | `string` | **Required**. The password of user |

#### Login

```http
  POST /login
```

| req.body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. The email of user |
| `password` | `string` | **Required**. The password of user |

#### Logout

```http
  POST /logout
```

  Log-off the user.


#### Test

```http
  GET /test
```

  If you wanna test if the login is working.


#### ForgotPass by email

```http
  POST /forgotpass
```

| req.body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. The email of user |
| `user_browser` | `string` | **NOT Required**. The browser of user |
| `user_os` | `string` | **NOT Required**. The OS System of user |
| `user_osversion` | `string` | **NOT Required**. The OS Version of user |
| `user_ip` | `string` | **NOT Required**. The IP of user |


#### ForgotPass by SMS

```http
  POST /forgotpass2
```

**Warning**\
In order to use reset password by sms, you need an SMS Key from\
Total Voice, here is a tutorial link: https://www.youtube.com/watch?v=keaoofSGPAE \
includes R$ 10,00(US$ 2) credit bonus(each SMS sent by the API costs R$ 0.09(US$ 0.018))

| req.body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `telnumber` | `int` | **Required**. The mobile number of user |


#### Reset Password

```http
  POST /resetpass
```

**How it works?**\
It will just check if the token and email matches from the\
previous token generated and sent by sms or email

| req.body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `int` | **Required**. The email of user |
| `token` | `string` | **Required**. The UNIQUE user's token |
| `newpass` | `string` | **Required**. The new user's password |

  
## Tech Stack/Dependencies

**Server:** Node, Express, NodeMailer, Crypto, Bcrypt, Cookie-parser, Fs, Dotenv, TotalVoice

  
## Demo

Here is a video with a demo tested in postman: \
https://drive.google.com/file/d/1jRpY9HSw8VG_etB1ryInY8ZVHMu_Z5-f/view?usp=sharing

  