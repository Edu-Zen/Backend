require('dotenv').config();
const express = require("express");
const app = express();
const db = require("./config/db");
const auth = require("./routes/auth");
const students = require("./routes/students");
const alls=require("./routes/alls");
const cors = require('cors');
const bodyParser = require('body-parser');

// Connect to the database
db();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// Routes
app.get('/', (req, res) => {
    res.send("Welcome to the API. Try accessing /api/students for data.");
});

app.use("/api/auth", auth);
app.use("/api/students", students);
app.use("/api/alls", alls);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
