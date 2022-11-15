"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TopicSchema = new mongoose_1.Schema({
    user: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    percent: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: new Date().toISOString(),
    },
});
exports.default = (0, mongoose_1.model)('Topic', TopicSchema);
