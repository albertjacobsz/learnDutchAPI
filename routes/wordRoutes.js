const express = require('express');
const router = express.Router();
const wordController = require('./../controller/wordController');
const authController = require('./../controller/authController');

router
  .route('/')
  .get(wordController.getAllWord)
  .post(authController.protect, wordController.createNewWord);
router
  .route('/:id')
  .get(wordController.getOneWord)
  .patch(authController.protect, wordController.updateWord)
  .delete(authController.protect, wordController.deleteWord);
module.exports = router;
