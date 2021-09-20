const express = require('express');
const levelController = require('./../controller/levelController');
const authController = require('./../controller/authController');
const router = express.Router();

router
  .route('/')
  .get(levelController.getAllLevel)
  .post(authController.protect, levelController.createNewLevel);
router
  .route('/:id')
  .get(levelController.getOneLevel)
  .patch(authController.protect, levelController.updateLevel)
  .delete(authController.protect, levelController.deleteLevel);
module.exports = router;
