require("dotenv").config();
const express = require('express');
const app = express();

const userRouter = require("./api/routes/user.router")
port = 3000;
//  require('./config/db.connection')

app.use(express.json());
app.use("/api/users", userRouter);

app.listen(process.env.APP_PORT, () => {
    console.log(`the server is running on ${process.env.APP_PORT}`);
})
