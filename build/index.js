"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const connectToDb_1 = require("./connectToDb");
const app = (0, express_1.default)();
(0, connectToDb_1.connectToDb)();
const PORT = 8001;
app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
});
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        const encryptedPassword = yield bcrypt_1.default.hash(password, 10);
    }
    catch (error) {
        console.error(error);
    }
    res.status(201).send({ message: "Successfully created" });
}));
app.listen(PORT, () => {
    console.log("Application running at http://localhost:" + PORT);
});
