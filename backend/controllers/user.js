const User = require("../models/user.js");
const {v4: uuidv4} = require('uuid');
const {setUser} = require("../service/auth.js");

async function handleUserSignup(request, response) {
  try {
    if (
        !request.body.name ||
        !request.body.email ||
        !request.body.password
      ) {
        return response.status(400).send({
          message: "Send all required fields: name, email, password",
        });
      }
    const newUser = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
      };
      //creating new book
      const user = await User.create(newUser);
      return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
}

async function handleUserLogin(request, response) {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return response.status(400).send({
        message: "Invalid username or pass",
      });
    }

    //const sessionId = uuidv4();
    
    const token = setUser(user);
    response.cookie('uid',token);
    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
