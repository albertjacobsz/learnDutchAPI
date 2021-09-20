const express = require('express');
const unitController = require('./../controller/unitController');
const authController = require('./../controller/authController');
const router = express.Router();
//router.use(authController.protect);
router
  .route('/')
  .get(unitController.getAllUnits)
  .post(authController.protect, unitController.createNewUnit);
router
  .route('/:id')
  .get(unitController.getOneUnit)
  .patch(authController.protect, unitController.updateUnit)
  .delete(authController.protect, unitController.deleteUnit);
module.exports = router;
