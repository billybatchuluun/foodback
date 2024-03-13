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
exports.signUp = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const emailMatchUser = yield user_1.default.findOne({ email: email });
        if (emailMatchUser) {
            return res.status(403).json({ msg: "User already exist" });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield user_1.default.create({
            name: name,
            email: email,
            password: hashedPassword,
            phoneNumber: 99999990,
            role: "User",
            avatarImg: "",
        });
        console.log(user);
        return res.status(201).json({ message: "Successfully created" });
    }
    catch (error) {
        console.error("error in createUser", error);
        return res.status(400).json({ message: "Failed to create user" });
    }
});
exports.signUp = signUp;
