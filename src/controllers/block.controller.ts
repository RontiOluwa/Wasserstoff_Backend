import Joi from 'joi';
import { BlockModel } from '../models';
import { RequestHandler } from 'express';
import { ErrorResponse, SuccessResponse } from '../global/functions';

const newBlock: RequestHandler<{}, {}, Block> = async (req, res) => {
  const schema: Joi.ObjectSchema<{}> = Joi.object({
    topicID: Joi.string().required(),
    blocks: Joi.array().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    console.log(error);
    return ErrorResponse(res, error.details[0].message, 400);
  }

  try {
    if (!req.client) {
      return ErrorResponse(res, 'Unauthorized', 403);
    }

    const block = await BlockModel.create({
      ...req.body,
    });

    return SuccessResponse(res, 'Block created successfully', block);
  } catch (err) {
    console.log(err);
    return ErrorResponse(res, err, 500);
  }
};

export default {
  newBlock,
};
