import { Document, model, Schema } from 'mongoose';

export interface TopicDocument extends Topic, Document {}

const TopicSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  percent: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: new Date().toISOString(),
  },
});

export default model<TopicDocument>('Topic', TopicSchema);
