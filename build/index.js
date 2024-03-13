"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connectToDb_1 = require("./connectToDb");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
// import {verifyToken} from "./middleware/verify";
const app = (0, express_1.default)();
(0, connectToDb_1.connectToDb)();
const PORT = 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(authRoutes_1.default);
// app.listen(PORT, () => {
//     console.log("http://localhost:" + PORT);
// })
app.listen(PORT, () => {
    console.log("Application running at http://localhost:" + PORT);
});
