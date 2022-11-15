import pe from 'parse-error';
import { Response } from 'express';

export const ErrorResponse = (res: Response, err: any, code: number, status: string | boolean = false) => {

  res.statusCode = code;

  let message: string;
  if (err.message) {
    message = err.message;
  } else if (typeof err === 'string') {
    message = err;
  } else {
    message = 'Something went wrong';
  }

  const error = { status, message, data: typeof err === 'string' ? {} : { ...err } };
  return res.status(code).json(error);

};

export const SuccessResponse = ( res: Response, message: string, data: object | null, code: number = 200, meta: object = {}, status: string | boolean = true ) => {
  const sendData = { meta, data, status, message };
  res.statusCode = code;
  return res.json(sendData);
};

process.on('unhandledRejection', error => {
  console.error('Uncaught Error', pe(error));
});
