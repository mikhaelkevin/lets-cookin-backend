// Middlewares
const usersRoutes = require('express').Router();
const urlencoded = require('body-parser').urlencoded({ extended: false });
const asyncHandler = require('../app/middlewares/asyncHandler');
const { uploadFile } = require('../app/middlewares/multerHandler');
const {
  authorizationTokenHandler
} = require('../app/middlewares/tokenHandler');

// Controllers
const {
  addUser,
  getUsers,
  getUserProfile,
  deleteUser,
  editUser,
  addCommentToRecipe
} = require('../app/controllers/usersControllers');
const { getRecipeByUserId } = require('../app/controllers/recipesControllers');
const multerSingle = uploadFile.single('profilePicture');

// Routes Endpoint and Controllers
usersRoutes
  .get('/users', asyncHandler(getUsers))
  .post('/users', multerSingle, asyncHandler(addUser))
  .patch(
    '/users',
    authorizationTokenHandler,
    multerSingle,
    asyncHandler(editUser)
  )
  .delete(
    '/users',
    authorizationTokenHandler,
    urlencoded,
    asyncHandler(deleteUser)
  );

usersRoutes.get('/users/:id', urlencoded, asyncHandler(getUserProfile));
usersRoutes.post(
  '/users/my-recipe',
  urlencoded,
  authorizationTokenHandler,
  asyncHandler(getRecipeByUserId)
);
usersRoutes.post(
  '/recipes/comment',
  authorizationTokenHandler,
  urlencoded,
  asyncHandler(addCommentToRecipe)
);

module.exports = usersRoutes;
