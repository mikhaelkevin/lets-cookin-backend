const db = require('../../configs/database');
// const { ErrorResponse } = require('../../utils/errorResponse');

const addCommentModel = (requestData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO comment(recipe_id, user_id, comment, created_at) VALUES($1,$2,$3,$4)',
      [requestData.recipeId, requestData.userId, requestData.comment, requestData.createdAt],
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
  });
};

module.exports = { addCommentModel };
