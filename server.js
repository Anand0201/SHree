var express = require('express');
var app = express();
const session = require('express-session');
const mongoose = require("mongoose");
app.use(express.json())

const connectdb = async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://anandjethava538:Anand123@cluster0.ujbaulb.mongodb.net/SLTIETTEST");
      console.log("MongoDB Connected");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
    }
  };
  
connectdb();

app.use(session({
    secret: '16e8e032de4434f787ff398b2da8bfb34071f261e8332fa2cbfb5da513a106ac',
    resave: false,
    saveUninitialized: true
}))


// set the view engine to ejs
app.set('view engine', 'ejs');

// ------------------ For Homepages ----------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/css", express.static(__dirname + 'public/css'));
app.use("/images", express.static(__dirname + 'public/images'));
app.use("/js", express.static(__dirname + 'public/js'));


const user = require("./routes/user");
app.use(user);


app.listen(8080);
console.log('Server is listening on port 8080');