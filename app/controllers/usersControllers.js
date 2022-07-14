// const fs = require('fs');
// const { promisify } = require('util');
// const unlinkAsync = promisify(fs.unlink);

const { ErrorResponse } = require('../../utils/errorResponse');
const { getRecipeByIdModel } = require('../models/Recipe');
const { addCommentModel } = require('../models/Comment');
const { addUserModel, getUserByEmailModel, getAllUsersModel, getUserProfileModel, deleteUserModel, editUserModel } = require('../models/User');

const addUser = async (req, res) => {
  console.log('req.body', req.body); const { email, phoneNumber, password, name } = req.body;

  const mandatoryFieldIsBlank = !email || !password || !name;
  if (mandatoryFieldIsBlank) throw new ErrorResponse('Email, password and name is required. Do not leave it blank!', 400);

  const phoneNumberNotValid = (phoneNumber && isNaN(Number(phoneNumber))) || (phoneNumber && phoneNumber.length < 11);
  if (phoneNumberNotValid) throw new ErrorResponse('Phonenumber format must be a number and at least have more than 11 digits', 422);

  const getByEmailResult = await getUserByEmailModel(email);
  const duplicateEmailStatus = (email === getByEmailResult?.[0]?.email);
  if (duplicateEmailStatus) throw new ErrorResponse('Email has been used!', 400);

  const addUserResult = await addUserModel({ ...req.body, ...req.file });
  if (!addUserResult) throw new ErrorResponse('There is something wrong!');
  res.status(200).send({ message: 'Registration succesful!' });
};

const getUsers = async (req, res) => {
  const page = req?.query?.page || 1;
  const limit = req?.query?.limit || null;
  const offset = (limit * page) - limit;

  if (page && page <= 0) throw new ErrorResponse('Page must be greater than 0');

  const usersData = await getAllUsersModel({ limit, offset });

  res.status(200).send(usersData);
};

const getUserProfile = async (req, res) => {
  const dataDetailUser = await getUserProfileModel(req.body.id);
  res.send(dataDetailUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.body;

  await getUserProfileModel(id);
  await deleteUserModel(id);
  // await unlinkAsync(`${deleteResult}`);

  res.status(200).send({ message: 'Delete succesful!' });
};

const editUser = async (req, res) => {
  const { id } = req.body;
  const { name, email, phoneNumber } = req.body;

  const getByEmailResult = await getUserByEmailModel(email);
  const duplicateEmailStatus = (email === getByEmailResult?.[0]?.email);
  if (duplicateEmailStatus) throw new ErrorResponse('Email has been used!', 400);

  const phoneNumberNotValid = (phoneNumber && isNaN(Number(phoneNumber))) || (phoneNumber && phoneNumber.length < 11);
  if (phoneNumberNotValid) throw new ErrorResponse('Phonenumber format must be a number and at least have more than 11 digits');

  const userData = await getUserProfileModel(id);
  const tempUserProfileData = {
    id,
    name: name || userData.name,
    email: email || userData.email,
    phoneNumber: phoneNumber || userData.phonenumber,
    profilePicture: req?.file?.path || userData.profile_picture
  };

  const editUserResult = await editUserModel(tempUserProfileData);
  if (!editUserResult) throw new ErrorResponse('There is something wrong');
  res.status(200).send({ message: 'Update profile succesful!' });
};

const addCommentToRecipe = async (req, res) => {
  const { recipeId, userId, comment } = req.body;

  await getRecipeByIdModel(recipeId);
  await getUserProfileModel(userId);

  if (!comment.length) throw new ErrorResponse('Please type something to post a comment!', 400);

  await addCommentModel({ recipeId, userId, comment });
  res.status(200).send({ message: 'Comment has been posted!' });
};
module.exports = { addUser, getUsers, getUserProfile, deleteUser, editUser, addCommentToRecipe };