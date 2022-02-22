const errorMap = {
    invalidFields: 400,
    unauthorized: 401,
    notFound: 404,
    conflict: 409,
  };
  
  module.exports = (err, req, res, next) => {
    if (!err.code || !errorMap[err.code]) return next(err);
  
    return res.status(errorMap[err.code]).json({
      code: err.code,
      message: err.message,
    });
  };