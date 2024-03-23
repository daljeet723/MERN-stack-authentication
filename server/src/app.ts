import express from "express";
import { config } from "dotenv";
import { connectDB } from "./utils/db.js";

config({
    path:"./.env"
})
const port = process.env.PORT || 3000;
const app = express();

connectDB(process.env.MONGO_URI || "")

app.use(express.json());

//logging library for Node. js.
app.listen(port, ()=>{
    console.log(`Listening on port ${port}..`);
});
