"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const topic_routes_1 = __importDefault(require("./topic.routes"));
const block_routes_1 = __importDefault(require("./block.routes"));
exports.default = (app) => {
    app.use('/api/topic/', topic_routes_1.default);
    app.use('/api/block/', block_routes_1.default);
};
