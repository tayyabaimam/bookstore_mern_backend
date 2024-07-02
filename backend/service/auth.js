//stores data abput sessions but refreshes when server restarts
//const sessionIdToUserMap = new Map();

//using jwt for generating tokens instead to store data in it
const jwt = require("jsonwebtoken");
const secret = "qwerty";

function setUser(user) {
  //sessionIdToUserMap.set(id,user);

  //only users with secret key can create tokens
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
  );
}

function getUser(token) {
  //return sessionIdToUserMap.get(id);
  if (!token) return null;
  //verifies token if it exists
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}

module.exports = {
  getUser,
  setUser,
};
