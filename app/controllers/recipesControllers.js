const { ErrorResponse } = require('../../utils/errorResponse');

// Model Import
const { getUserProfileModel } = require('../models/User');
const {
  addRecipeModel,
  getAllRecipesModel,
  getRecipeByIdModel,
  getRecipeDetailModel,
  newAddedRecipeModel,
  deleteRecipeModel,
  editRecipeModel,
  searchByNameModel,
  getRecipeByUserIdModel
} = require('../models/Recipe');
const cloudinary = require('../../utils/cloudinary');

const addRecipe = async (req, res) => {
  const requestDataText = { ...req.body };
  const requestDataMedia = { ...req.files };

  const mandatoryFieldIsBlank =
    !requestDataText.title ||
    !requestDataText.ingredients ||
    !requestDataText.userId;
  if (mandatoryFieldIsBlank) { throw new ErrorResponse('Title and ingredients is required', 400); }

  const createdAt = new Date(Date.now());
  let picturePath =
    requestDataMedia?.recipePicture?.map((value) => value.path) ?? null;
  let pictureId;
  const videoPath =
    requestDataMedia?.recipeVideo?.map((value) => value.path) ?? null;

  await getUserProfileModel(requestDataText.userId);

  if (picturePath?.length) {
    const cloudUpload = await cloudinary.uploader.upload(picturePath[0]);
    picturePath = cloudUpload.secure_url;
    pictureId = cloudUpload.public_id;
  }

  const addRecipeResult = await addRecipeModel({
    requestDataText,
    picturePath,
    pictureId,
    videoPath,
    createdAt
  });
  if (!addRecipeResult) throw new ErrorResponse('There is something wrong');
  res.status(200).send({ message: 'Adding recipe is success!' });
};

const getRecipes = async (req, res) => {
  const page = req?.query?.page || 1;
  const limit = req?.query?.limit || null;
  const offset = limit * page - limit;

  if (page && page <= 0) throw new ErrorResponse('Page must be more than 0');

  const recipesData = await getAllRecipesModel({ limit, offset });
  res.status(200).send(recipesData);
};

const getDetailRecipe = async (req, res) => {
  const { id } = req.body;

  await getRecipeByIdModel(id);

  const detailRecipeResult = await getRecipeDetailModel(id);
  if (!detailRecipeResult.userCommentary.length) {
    detailRecipeResult.userCommentary = [
      { message: 'There is no comment yet on this recipe' }
    ];
  }
  res.status(200).send(detailRecipeResult);
};

const getNewestRecipe = async (req, res) => {
  const newestRecipeResult = await newAddedRecipeModel();
  res.status(200).send(newestRecipeResult);
};

const deleteRecipe = async (req, res) => {
  const { id } = req.body;

  const recipeInfo = await getRecipeByIdModel(id);
  const recipePicId = recipeInfo?.pictureId;

  if (recipePicId) {
    await cloudinary.uploader.destroy(recipePicId);
  }

  await deleteRecipeModel(id);
  res.status(200).send({ message: 'Recipe has been deleted!' });
};

const editRecipe = async (req, res) => {
  const { id } = req.body;
  let { title, ingredients } = req.body;
  const { recipePicture, recipeVideo } = req.files;

  const recipeData = await getRecipeByIdModel(id);

  let picturePath = recipePicture?.[0]?.path;
  let pictureId = recipeData?.pictureId;
  const videoPath =
    recipeVideo?.map((value) => value.path) || recipeData?.recipe_video;

  if (picturePath) {
    if (pictureId) {
      await cloudinary.uploader.destroy(pictureId);
    }
    const cloudUpload = await cloudinary.uploader.upload(picturePath);
    picturePath = cloudUpload?.secure_url;
    pictureId = cloudUpload?.public_id;
  }

  title = title || recipeData?.title;
  ingredients = ingredients || recipeData?.ingredients;
  picturePath = picturePath || recipeData?.recipe_picture;

  await editRecipeModel({
    id,
    title,
    ingredients,
    picturePath,
    videoPath,
    pictureId
  });
  res.status(200).send({ message: 'Recipe has been updated!' });
};

const searchRecipeByName = async (req, res) => {
  const { title } = req.params;
  const searchByNameResult = await searchByNameModel(title.toLowerCase());
  res.status(200).send(searchByNameResult);
};

const getRecipeByUserId = async (req, res) => {
  const { userId } = req.body;

  const myRecipe = await getRecipeByUserIdModel(userId);
  if (!myRecipe.length) {
    throw new ErrorResponse(
      "You don't have your own recipe. Try to make one!",
      404
    );
  }

  res.status(200).send(myRecipe);
};
module.exports = {
  addRecipe,
  getRecipes,
  getDetailRecipe,
  getNewestRecipe,
  deleteRecipe,
  editRecipe,
  searchRecipeByName,
  getRecipeByUserId
};
