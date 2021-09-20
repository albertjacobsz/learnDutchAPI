const express = require('express');
const conjugationController = require('./../controller/conjugationController');
const authController = require('./../controller/authController');
const router = express.Router();
router.use(authController.protect);
router
  .route('/')
  .get(conjugationController.getAllConjugation)
  .post(conjugationController.createNewConjugation);
router
  .route('/:id')
  .get(conjugationController.getOneConjugation)
  .patch(conjugationController.updateConjugation)
  .delete(conjugationController.deleteConjugation);
module.exports = router;
