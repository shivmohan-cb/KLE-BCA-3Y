// JWT - JSON Web Token
// 1. header - stores algorithm data
// 2. payload - stores the data
// 3. sign - secret key for encryption

const JWT = require("jsonwebtoken");

const userData = {
  name: "Mukul",
  email: "mukul@gmail.com",
  password: "123#pass",
};

const payload = {
  name: userData.name,
  email: userData.email,
};

const signature = "somethingsecret";

const token = JWT.sign(payload, signature,{ algorithm: 'HS256', expiresIn: "1h"});

console.log("JWT :", token);
const decodedToken = JWT.decode(token);  


console.log("Decoded token data :",decodedToken)

// Browser Storages
// localstorage - space 5mb by default
//  data is remains in storage until deleted

// session storage - space 5mb by default
// data get lost when the window or browser is closed

// cookie - space 4kb
// cookie has expiry time/date
// cookie remain till the expiry time/date or deleted manually

// localstorage and session storage space may vary browser to browser

// but cookie storage space is same(4kb) in all browser - because cookie data is sent every time with request. so, to reduce the load of request 4kb is standarized space for cookie storage
