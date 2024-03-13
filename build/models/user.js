"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter your email"],
    },
    password: {
        type: String,
        minlenght: 6,
        required: [true, "Please enter your password"],
    },
    address: {
        district: { type: String },
        street: { type: String },
        buildingNo: { type: Number },
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User",
    },
    createdAt: { type: Date, default: new Date() },
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
