let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');

const jwt =require("jsonwebtoken")
let cookieParser = require ('cookie-parser');

// Express Route
const userRoute = require('./routes/user.route')
const followRoute = require('./routes/follow.route')
const inviteRoute = require('./routes/invite.route')
const postRoute = require('./routes/post.route')


// Connecting mongoDB Database
mongoose
  .connect('mongodb://127.0.0.1:27017/webproject')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// app.use(cors());

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// app.use(express.json());

app.use(cookieParser());










app.use('/users', userRoute)


app.use('/follow', followRoute)

app.use('/invite', inviteRoute)

app.use('/post', postRoute)


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});



