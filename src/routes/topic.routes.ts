import { Router } from 'express';
import { TopicController } from '../controllers';

const router = Router();

router.route('/create-topic').post(TopicController.newTopic);
router.route('/get-topics').get(TopicController.viewAllTopic);

export default router;
