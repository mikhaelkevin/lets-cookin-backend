const db = require('../../configs/database');
const { ErrorResponse } = require('../../utils/errorResponse');

const addRecipeModel = (requestData) => {
  const { requestDataText: { title, ingredients, userId }, picturePath, videoPath, createdAt } = requestData;

  return new Promise((resolve, reject) => {
    db.query('INSERT INTO recipes(title,ingredients, recipe_picture , recipe_video, user_id, created_at) VALUES($1, $2, $3, $4, $5, $6) RETURNING title',
      [title, ingredients, picturePath, videoPath, userId, createdAt],
      (error, result) => {
        if (error) return reject(error);
        resolve(result.rows.length);
      });
  });
};

const getAllRecipesModel = requestData => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT user_profile.name AS author, recipes.id, recipes.title, recipes.ingredients, recipes.recipe_picture, recipes.recipe_video, recipes.created_at FROM recipes
        JOIN user_profile ON recipes.user_id = user_profile.user_id
        ORDER BY recipes.id
        LIMIT $1 OFFSET $2`,
    [requestData.limit, requestData.offset],
    (error, result) => {
      if (error) return reject(error);
      if (result.rows.length <= 0) return reject(new ErrorResponse("Couldn't get recipes data", 404));
      resolve(result.rows);
    });
  });
};

const getRecipeByIdModel = requestData => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM recipes where id=$1',
      [requestData],
      (error, result) => {
        if (error) return reject(error);
        if (result.rows.length <= 0) return reject(new ErrorResponse('Recipe not found', 404));

        const newRecipeData = {
          title: result.rows[0].title,
          ingredients: result.rows[0].ingredients,
          recipe_picture: result.rows[0].recipe_picture,
          recipe_video: result.rows[0].recipe_video,
          user_id: result.rows[0].user_id,
          created_at: result.rows[0].created_at
        };
        resolve(newRecipeData);
      });
  });
};

const getRecipeDetailModel = requestData => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT user_profile.name AS author,user_profile.user_id , recipes.title, recipes.ingredients, recipes.recipe_picture, recipes.recipe_video, recipes.created_at
        FROM recipes 
        JOIN user_profile ON recipes.user_id = user_profile.user_id
        WHERE id = $1`, [requestData], (error, result) => {
      if (!error) {
        db.query(
              `SELECT user_profile.user_id, user_profile.name, user_profile.profile_picture, comment.comment FROM comment
              JOIN user_profile ON comment.user_id = user_profile.user_id
              WHERE comment.recipe_id = $1`,
              [requestData],
              (_error, _result) => {
                if (!_error) {
                  resolve({ recipe: result.rows, userCommentary: _result.rows });
                } else {
                  return reject(_error);
                }
              }
        );
      } else {
        return reject(error);
      }
    });
  });
};

const newAddedRecipeModel = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM recipes ORDER BY created_at DESC LIMIT 5',
      (error, result) => {
        if (error) return reject(error);
        resolve(result.rows);
      });
  });
};

const deleteRecipeModel = requestData => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM recipes WHERE id=$1',
      [requestData],
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
  });
};

const editRecipeModel = requestData => {
  console.log('requestData', requestData);
  return new Promise((resolve, reject) => {
    db.query(`UPDATE recipes 
    SET title=$1, ingredients=$2, recipe_picture=$3, recipe_video=$4 
    WHERE id =$5`,
    [requestData.title, requestData.ingredients, requestData.picturePath, requestData.videoPath, requestData.id],
    (error, result) => {
      if (error) return reject(error);
      resolve(result.rows);
    });
  });
};

const searchByNameModel = requestData => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT user_profile.name,recipes.id, recipes.title, recipes.ingredients, recipes.recipe_picture, recipes.recipe_video, recipes.created_at
    FROM recipes 
    JOIN user_profile ON recipes.user_id = user_profile.user_id
    WHERE LOWER(title) LIKE $1`,
    ['%' + requestData + '%'],
    (error, result) => {
      if (error) return reject(error);
      if (result.rows.length <= 0) return reject(new ErrorResponse('Recipe not found', 404));
      resolve(result.rows);
    });
  });
};

const getRecipeByUserIdModel = requestData => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM recipes where user_id = $1',
      [requestData],
      (error, result) => {
        if (error) return reject(error);
        resolve(result.rows);
      });
  });
};

module.exports = {
  addRecipeModel,
  getAllRecipesModel,
  getRecipeByIdModel,
  getRecipeDetailModel,
  newAddedRecipeModel,
  deleteRecipeModel,
  editRecipeModel,
  searchByNameModel,
  getRecipeByUserIdModel
};
