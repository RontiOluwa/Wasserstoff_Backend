import Joi from 'joi';
import { TopicModel } from '../models';
import { RequestHandler } from 'express';
import { ErrorResponse, SuccessResponse } from '../global/functions';

export interface MainRequest extends RequestHandler<{}, {}, Topic> {
  files: Request; // or any other type
}

const newTopic = async (req: any, res: any) => {
  const schema: Joi.ObjectSchema<{}> = Joi.object({
    user: Joi.string().required(),
    title: Joi.string().required(),
    desc: Joi.string().required(),
    percent: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return ErrorResponse(res, error.details[0].message, 400);
  }

  try {
    if (!req.client) {
      return ErrorResponse(res, 'Unauthorized', 403);
    }
    const post = await TopicModel.create({
      ...req.body,
    });

    return SuccessResponse(res, 'Topic created successfully', post);
  } catch (err) {
    console.log(err);
    return ErrorResponse(res, err, 500);
  }
};

const viewAllTopic: RequestHandler<{}, {}, Topic> = async (req, res) => {
  try {
    const topic = await TopicModel.find();

    return SuccessResponse(res, 'Topic retrieved successfully', topic);
  } catch (err) {
    console.log(err);
    return ErrorResponse(res, err, 500);
  }
};

export default {
  newTopic,
  viewAllTopic,
};
