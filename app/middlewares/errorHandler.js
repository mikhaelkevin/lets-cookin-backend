const errorHandler = (error, req, res, next) => {
  console.log('error :>> ', error);
  const theError = {
    isDuplicate: error.code === '23505',
    isLengthOverLimit: error.code === '22001',
    isInvalidInteger: error.code === '22P02',
    isNull: error.code === '23502'
    // isProblemOnDeleteFile: error.code === 'ENOENT' && error.errno === -4058
  };

  if (theError.isDuplicate) {
    if (error.constraint === 'unique_email') error.message = "Email isn't available";
  }

  if (theError.isLengthOverLimit) {
    error.message = 'Input length is over limit';
  }

  if (theError.isInvalidInteger) {
    error.message = "System expect a number, but the input isn't a number";
  }

  if (theError.isNull) {
    error.message = `${error.column} is required`;
  }

  // if (theError.isProblemOnDeleteFile) {
  //   error.message = "Running a process. But, can't found file directory to delete";
  // }

  res.status(error.status || 500).send({
    message: error.message || 'Internal server error'
  });
};

module.exports = { errorHandler };
