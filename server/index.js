import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { register } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import { editUser } from "./controllers/user.js";
import userRoutes from "./routes/user.js";
import { verifyToken } from "./middlewares/auth.js";
//ROOT DIRECTORY NAME
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// SECRET File
dotenv.config();

//middleware for security
app.use(helmet({crossOriginResourcePolicy: false,}));

//middleware for cross origin resource sharing
app.use(cors());

//middleware for parsing json requests
app.use(bodyParser.json({limit:"30mb", extended: true}));

//middleware for parsing incoming requests with url encoded payload
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));

//middleware for serving static files to specified folder.
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

//MULTER SETUP FOR DISK STORAGE
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/assets');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    },
});
const upload = multer({storage: storage});

// ROUTES WITH STATIC FILES
app.post("/auth/register", upload.single("picture"), register);
app.put("/user/:id/edit", verifyToken, upload.single("picture"), editUser);

// ROUTES
app.use("/auth", authRoutes);
app.use("/user", verifyToken, userRoutes);

// DB CONNECTION AND SERVER SET UP
const PORT = process.env.PORT || 6000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    app.listen(PORT, ()=>console.log(`Server running at port: ${PORT}`))
);
