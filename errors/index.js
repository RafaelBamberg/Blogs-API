const authorizationError = (msg) => {
    const error = new Error();
    error.code = 'unauthorized';
    error.message = msg;
    return error;
  };
  
  const notFoundError = (msg) => {
    const error = new Error();
    error.code = 'notFound';
    error.message = msg;
    return error;
  };
  
  const invalidFieldsError = (msg) => {
    const error = new Error();
    error.code = 'invalidFields';
    error.message = msg;
    return error;
  };
  
  const conflictError = (msg) => {
    const error = new Error();
    error.code = 'conflict';
    error.message = msg;
    return error;
  };
  
  module.exports = {
    authorizationError,
    notFoundError,
    invalidFieldsError,
    conflictError,
  };