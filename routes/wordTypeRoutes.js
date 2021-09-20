const express = require('express');
const wordTypeController = require('./../controller/wordTypeController');
const router = express.Router();
const authController = require('./../controller/authController');

router
  .route('/')
  .get(wordTypeController.getAllWordType)
  .post(authController.protect, wordTypeController.createNewWordType);
router
  .route('/:id')
  .get(wordTypeController.getOneWordType)
  .patch(authController.protect, wordTypeController.updateWordType)
  .delete(authController.protect, wordTypeController.deleteWordType);
module.exports = router;
