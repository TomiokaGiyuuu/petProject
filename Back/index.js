const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const route = require('./routes/index');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
////////////////////////////////////////

dotenv.config();
const PORT = process.env.PORT || 4000

mongoose.connect(process.env.MONGO_URL,
    (err) => {
    if(err)
        console.log(err);
    else
        console.log("Succesfully connected to MongoDB");
});


//////////////////////////

app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(morgan("common"));
app.use(cors());
app.use('/api', route);
app.use('/images', express.static(path.join(__dirname, "public/images")));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
});

app.post("/api/upload")

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve('Front/build'));
    });
}

//////////////////////////

app.get("/", (req, res) => {
    res.send("Welcome to homepage!");
})

app.listen(PORT, () =>
    console.log("Server is running on port: http://localhost:" + PORT)
)