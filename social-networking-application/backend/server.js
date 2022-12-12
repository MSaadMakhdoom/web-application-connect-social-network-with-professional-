// require mongoose and express
require("dotenv").config(); // configuring .env file
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const postRouter = require("./src/veteranModule/routes/Post.route")
const VeteranRouter = require("./src/veteranModule/routes/Veteran.route")
// Application Variables
const PORT = process.env.PORT || 4000;
// Connect mongoose to mydatabase
mongoose.connect('mongodb://localhost/webproject').then((conectInfo) =>
{
    // Get Data base name from parameter
    console.log(`Connected to "${conectInfo.connections[0].name}" database`);
}).catch(() =>
{
    console.log('Error: Could not connect to database');
});



// Creating Express Application
const app = express();
app.use(express.json());
app.use(cors());

// Use Routes
app.use("/veteran",VeteranRouter);
app.use("/posts",postRouter)




app.listen(PORT,() =>
{
    console.log(`Server is running on port ${PORT}.`);
});
app.get("/",(req,resp) =>
{
    console.log("Server is running");
    resp.send("Server is Running");
})
