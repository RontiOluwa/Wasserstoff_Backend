"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const models_1 = require("../models");
const functions_1 = require("../global/functions");
const newBlock = async (req, res) => {
    const schema = joi_1.default.object({
        topicID: joi_1.default.string().required(),
        blocks: joi_1.default.array().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        console.log(error);
        return (0, functions_1.ErrorResponse)(res, error.details[0].message, 400);
    }
    try {
        if (!req.client) {
            return (0, functions_1.ErrorResponse)(res, 'Unauthorized', 403);
        }
        const block = await models_1.BlockModel.create({
            ...req.body,
        });
        return (0, functions_1.SuccessResponse)(res, 'Block created successfully', block);
    }
    catch (err) {
        console.log(err);
        return (0, functions_1.ErrorResponse)(res, err, 500);
    }
};
exports.default = {
    newBlock,
};
