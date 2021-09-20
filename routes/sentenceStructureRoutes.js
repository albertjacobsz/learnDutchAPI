const express = require('express');
const sentenceStructureController = require('./../controller/sentenceStructureController');
const authController = require('./../controller/authController');
const router = express.Router();

router
  .route('/')
  .get(sentenceStructureController.getAllSentenceStructure)
  .post(
    authController.protect,
    sentenceStructureController.createNewSentenceStructure
  );
router
  .route('/:id')
  .get(sentenceStructureController.getOneSentenceStructure)
  .patch(
    authController.protect,
    sentenceStructureController.updateSentenceStructure
  )
  .delete(
    authController.protect,
    sentenceStructureController.deleteSentenceStructure
  );
module.exports = router;
