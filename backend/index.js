import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/BookRoute.js'
import cors from 'cors';

const app = express();

//adding middleware for parsing request body
app.use(express.json());

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
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});

app.use('/books', booksRoute);

//connects to database
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
