const multer = require('multer');
const { ErrorResponse } = require('../../utils/errorResponse');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const imageAllowed = file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg';
    const videoAllowed = file.mimetype === 'video/mp4';
    if (imageAllowed) return callback(null, './public/images');
    if (videoAllowed) return callback(null, './public/videos');
  },
  filename: (req, file, callback) => {
    let fileName;
    if (file.fieldname === 'profilePicture') {
      fileName = `USPIC-${Date.now()}-${file.originalname}`;
    } else if (file.fieldname === 'recipePicture') {
      fileName = `REPIC-${Date.now()}-${file.originalname}`;
    } else {
      fileName = `REVID-${Date.now()}-${file.originalname}`;
    }
    callback(null, fileName);
  }
});

const uploadFile = multer({
  storage,
  fileFilter: async (req, file, callback) => {
    const uploadRules = {
      imageFormat: file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg',
      pictureField: file.fieldname === 'recipePicture' || file.fieldname === 'profilePicture',
      videoFormat: file.mimetype === 'video/mp4',
      videoField: file.fieldname === 'recipeVideo'
    };

    const pictureFormatNotValid = uploadRules.pictureField && !uploadRules.imageFormat;
    const videoFormatNotValid = uploadRules.videoField && !uploadRules.videoFormat;

    // User & Recipe validate for file format
    if (pictureFormatNotValid) return callback(new ErrorResponse('Sorry, only png/jpg/jpeg is allowed', 400), false);
    if (videoFormatNotValid) return callback(new ErrorResponse('Sorry, only mp4 is allowed', 400), false);
    callback(null, true);
  }
});
module.exports = { uploadFile };
