"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.route('/add-block').post(controllers_1.BlockController.newBlock);
// router.route('/get-blocks').get(BlockController.userCreatedStakes);
exports.default = router;
