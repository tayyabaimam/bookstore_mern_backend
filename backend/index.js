const express= require("express");
const  { json } = require("express");
const cors= require("cors");
const cookieParser= require("cookie-parser");

const { PORT, mongoDBURL }= require("./config.js");
const booksRoute = require("./routes/BookRoute.js");
const userRoute = require("./routes/userRoute.js");
const restrictToLoggedinUserOnly = require("./middlewares/auth.js");

const {connectMongoDb} = require("./connection.js");

const app = express();

//adding middleware for parsing json data in request body
app.use(json());

app.use(cookieParser());

//middleware for handling cors policy
//option1: allow all origins with default of cors(*)
app.use(cors());
//option2: all custom origins
app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET','POST','PUT','DELETE'],
        allowedHeaders: ['Content-Type'],
    })
)

//patches uri with response
app.get("/", (request, response) => {
  console.log(request);
  //status 200 is used to confirm backend is running
  return response.status(200).send("Welcome To MERN Stack Tutorial");
});

app.use('/books', booksRoute);
app.use('/user', restrictToLoggedinUserOnly, userRoute);

connectMongoDb(mongoDBURL);

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});