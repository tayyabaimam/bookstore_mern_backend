const {getUser} = require("../service/auth.js");

async function restrictToLoggedinUserOnly(req, res, next) {
  const userUid = req.cookies?.uid;

  if (!userUid)
    return response.status(400).send({
      message: "User not logged in",
    });
    
    const user= getUser(userUid);

    if (!user)
      return response.status(400).send({
        message: "User not logged in",
      });  
    req.user = user;
    next();
}

modeule.exports = {
    restrictToLoggedinUserOnly,
}