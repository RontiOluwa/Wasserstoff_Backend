"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockController = exports.TopicController = void 0;
var topic_controller_1 = require("./topic.controller");
Object.defineProperty(exports, "TopicController", { enumerable: true, get: function () { return __importDefault(topic_controller_1).default; } });
var block_controller_1 = require("./block.controller");
Object.defineProperty(exports, "BlockController", { enumerable: true, get: function () { return __importDefault(block_controller_1).default; } });
