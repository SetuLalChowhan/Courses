const express = require("express");
const ejs = require("ejs");
const multer = require("multer");

const uploadFile = "./uploads";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");

const upload = multer({
    dest: uploadFile,
    limits: {
        fileSize: 7000000, // 1MB
    },
    fileFilter: (req, file, cb) => {
        // console.log(file);
        if (file.fieldname === "avatar") {
            if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
                cb(null, true);
            } else {
                cb(new Error("Only jpg png jpeg file allowed"));
            }
        } else if (file.fieldname === "docs") {
            if (file.mimetype === "application/pdf") {
                cb(null, true);
            } else {
                cb(new Error("Only pdf file allowed"));
            }
        }
    },
});

app.get("/", (req, res) => {
    res.render("file");
});

// single file adding

// app.post("/", upload.single("avatar"), (req, res) => {
//     res.render("file");
// });

// upload two more file

// app.post("/", upload.array("avatar", 3), (req, res) => {
//     res.render("file");
// });

// multiple file
// app.post(
//     "/",
//     upload.fields([
//         {name: "avatar", maxCount: 3},
//         {name: "gallery", maxCount: 3},
//     ]),
//     (req, res) => {
//         res.render("file");
//     }
// );

//file upload validate
//forSingleFile
// app.post("/", upload.single("avatar"), (req, res) => {
//     res.render("file");
// });

//for multiple file

app.post(
    "/",
    upload.fields([
        {name: "avatar", maxCount: 1},
        {name: "docs", maxCount: 1},
    ]),
    (req, res) => {
        res.render("file");
    }
);

// error handler

function errHandler(err, req, res, next) {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).send("There was an upload error");
        } else {
            res.status(500).send(err.message);
        }
    }
    console.log(err);
}

app.use(errHandler);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
