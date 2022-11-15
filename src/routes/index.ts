import { Express } from 'express';
import topicRoutes from './topic.routes';
import blockRoutes from './block.routes';

export default (app: Express) => {
  app.use('/api/topic/', topicRoutes);
  app.use('/api/block/', blockRoutes);
};
