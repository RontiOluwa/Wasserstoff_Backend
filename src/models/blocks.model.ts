import { Document, model, Schema, Types } from 'mongoose';

export interface BlockDocument extends Block, Document {}

const BlockSchema = new Schema({
  topicID: {
    type: String,
    ref: 'Topic',
  },
  blocks: {
    type: Array,
    required: true,
  },
});

export default model<BlockDocument>('Blocks', BlockSchema);
