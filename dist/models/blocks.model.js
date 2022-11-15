"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlockSchema = new mongoose_1.Schema({
    topicID: {
        type: String,
        ref: 'Topic',
    },
    blocks: {
        type: Array,
        required: true,
    },
});
exports.default = (0, mongoose_1.model)('Blocks', BlockSchema);
