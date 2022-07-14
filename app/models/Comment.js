const db = require('../../configs/database');
// const { ErrorResponse } = require('../../utils/errorResponse');

const addCommentModel = (requestData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO comment(recipe_id, user_id, comment) VALUES($1,$2,$3)',
      [requestData.recipeId, requestData.userId, requestData.comment],
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
  });
};

module.exports = { addCommentModel };
