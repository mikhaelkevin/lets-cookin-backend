const db = require('../../configs/database');
const bcrypt = require('bcrypt');
const { ErrorResponse } = require('../../utils/errorResponse');

const addUserModel = requestData => {
  const salt = bcrypt.genSaltSync(12);
  requestData.password = bcrypt.hashSync(requestData.password, salt);
  requestData.email = requestData.email.trim();
  requestData.phoneNumber = requestData.phoneNumber.trim();
  requestData.name = requestData.name.trim();

  return new Promise((resolve, reject) => {
    db.query(`WITH insertIntoUsers AS (INSERT INTO users(email,password) 
    VALUES($1,$2) 
    RETURNING id AS user_id)
    INSERT INTO user_profile 
    SELECT user_id, $3, $4, $5 
    FROM insertIntoUsers RETURNING name`,
    [requestData.email, requestData.password, requestData.name, requestData.phoneNumber, requestData.path],
    (error, result) => {
      if (error) return reject(error);
      resolve(result.rows.length);
    });
  });
};

const getUserByEmailModel = requestData => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT users.*, user_profile.name, user_profile.phonenumber, user_profile.profile_picture FROM users
    JOIN user_profile ON users.id = user_profile.user_id
    WHERE email=$1`,
    [requestData],
    (error, result) => {
      if (error) return reject(error);
      resolve(result.rows);
    });
  });
};

const getAllUsersModel = (requestData) => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT users.id, users.email, users.password, user_profile.name, user_profile.phonenumber, user_profile.profile_picture FROM users
    JOIN user_profile ON users.id = user_profile.user_id
    ORDER BY users.id ASC
    LIMIT $1 OFFSET $2`,
    [requestData.limit, requestData.offset],
    (error, result) => {
      if (error) return reject(error);
      if (!result.rows.length) return reject(new ErrorResponse("Couldn't get users data", 404));
      resolve(result.rows);
    });
  });
};

const getUserProfileModel = requestData => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT users.*, user_profile.* FROM users
    JOIN user_profile ON users.id = user_profile.user_id
    WHERE users.id = $1`,
    [requestData],
    (error, result) => {
      if (error) return reject(error);
      if (!result.rows.length) return reject(new ErrorResponse('User not found', 404));

      const newResult = {
        name: result.rows[0].name,
        email: result.rows[0].email,
        password: result.rows[0].password,
        phonenumber: result.rows[0].phonenumber,
        profile_picture: result.rows[0].profile_picture
      };
      resolve(newResult);
    });
  });
};

const deleteUserModel = requestData => {
  return new Promise((resolve, reject) => {
    db.query(`WITH deleteOnUsers AS (
      DELETE FROM users WHERE id=$1
      RETURNING id
    )
    DELETE FROM user_profile 
    WHERE user_id in (SELECT id FROM deleteOnUsers)
    RETURNING profile_picture`,
    [requestData],
    (error, result) => {
      if (error) return reject(error);
      resolve(result.rows[0].profile_picture);
    });
  });
};

const editUserModel = requestData => {
  // const salt = bcrypt.genSaltSync(12);
  // requestData.password = bcrypt.hashSync(requestData.password, salt);

  return new Promise((resolve, reject) => {
    db.query(`WITH updateOnUsers AS
    (UPDATE users SET email=$1 WHERE id=$2 RETURNING id)
    UPDATE user_profile SET name=$3, phonenumber=$4, profile_picture=$5
    WHERE user_id in (SELECT id FROM updateOnUsers)
    RETURNING name`,
    [requestData.email, requestData.id, requestData.name, requestData.phoneNumber, requestData.profilePicture],
    (error, result) => {
      if (error) return reject(error);
      resolve(result.rows.length);
    });
  });
};
module.exports = { addUserModel, getUserByEmailModel, getAllUsersModel, getUserProfileModel, deleteUserModel, editUserModel };
