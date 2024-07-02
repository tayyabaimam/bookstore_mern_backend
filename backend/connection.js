const { connect }= require("mongoose");

async function connectMongoDb(url){
//connects to database
return connect(url)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
}

module.exports= {
    connectMongoDb,
}