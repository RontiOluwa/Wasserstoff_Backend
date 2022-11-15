"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const models_1 = require("../models");
const functions_1 = require("../global/functions");
const newTopic = async (req, res) => {
    const schema = joi_1.default.object({
        user: joi_1.default.string().required(),
        title: joi_1.default.string().required(),
        desc: joi_1.default.string().required(),
        percent: joi_1.default.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return (0, functions_1.ErrorResponse)(res, error.details[0].message, 400);
    }
    try {
        if (!req.client) {
            return (0, functions_1.ErrorResponse)(res, 'Unauthorized', 403);
        }
        const post = await models_1.TopicModel.create({
            ...req.body,
        });
        return (0, functions_1.SuccessResponse)(res, 'Topic created successfully', post);
    }
    catch (err) {
        console.log(err);
        return (0, functions_1.ErrorResponse)(res, err, 500);
    }
};
const viewAllTopic = async (req, res) => {
    try {
        const topic = await models_1.TopicModel.find();
        return (0, functions_1.SuccessResponse)(res, 'Topic retrieved successfully', topic);
    }
    catch (err) {
        console.log(err);
        return (0, functions_1.ErrorResponse)(res, err, 500);
    }
};
exports.default = {
    newTopic,
    viewAllTopic,
};
