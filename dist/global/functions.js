"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessResponse = exports.ErrorResponse = void 0;
const parse_error_1 = __importDefault(require("parse-error"));
const ErrorResponse = (res, err, code, status = false) => {
    res.statusCode = code;
    let message;
    if (err.message) {
        message = err.message;
    }
    else if (typeof err === 'string') {
        message = err;
    }
    else {
        message = 'Something went wrong';
    }
    const error = { status, message, data: typeof err === 'string' ? {} : { ...err } };
    return res.status(code).json(error);
};
exports.ErrorResponse = ErrorResponse;
const SuccessResponse = (res, message, data, code = 200, meta = {}, status = true) => {
    const sendData = { meta, data, status, message };
    res.statusCode = code;
    return res.json(sendData);
};
exports.SuccessResponse = SuccessResponse;
process.on('unhandledRejection', error => {
    console.error('Uncaught Error', (0, parse_error_1.default)(error));
});
