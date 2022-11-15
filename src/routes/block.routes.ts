import { Router } from 'express';
import { BlockController } from '../controllers';

const router = Router();

router.route('/add-block').post(BlockController.newBlock);
// router.route('/get-blocks').get(BlockController.userCreatedStakes);

export default router;
