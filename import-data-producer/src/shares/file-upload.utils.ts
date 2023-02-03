export const fileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(csv|xlsx|xls)$/)) {
    return callback(new Error('Only csv and excel files are allowed!'), false);
  }
  callback(null, true);
};
