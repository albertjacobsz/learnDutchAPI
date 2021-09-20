const express = require('express');
const userRoutes = require('./../controller/userController');
const authController = require('./../controller/authController');
const router = express.Router();
router
  .route('/')
  .get(userRoutes.getAllUsers)
  .post(authController.protect, userRoutes.createNewUser);
router.post('/signup', authController.signUp);
router.post('/login', authController.login);

router
  .route('/:id')
  .get(userRoutes.getOneUser)
  .patch(authController.protect, userRoutes.updateUser)
  .delete(authController.protect, userRoutes.deleteUser);

router
  .route('/me')
  .get(authController.protect, userRoutes.getMe)
  .patch(authController.protect, userRoutes.updateMe)
  .delete(authController.protect, userRoutes.deleteMe);
module.exports = router;
