const express = require('express');
const sentenceController = require('./../controller/sentenceController');
const authController = require('./../controller/authController');
const router = express.Router();

router
  .route('/')
  .get(sentenceController.getAllSentences)
  .post(authController.protect, sentenceController.createNewSentence);
router
  .route('/:id')
  .get(sentenceController.getOneSentence)
  .patch(authController.protect, sentenceController.updateSentence)
  .delete(authController.protect, sentenceController.deleteSentence);
module.exports = router;
