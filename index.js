const express = require("express");
const app = express();
const port = 4000;

function handleRegister(req, resp){
    user = req.body;
    res.send("Succesfull!");
    console.log(user);
}

function handleLogin(req, resp){
    var userPassword = req.body.password;
    if ( user != null && user.password == userPassword){
        res.send("Succesfull");
    } else {
        res.send("User not valid");
    }

}

app.post('/register', handleRegister);

app.put('/login', handleLogin);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

