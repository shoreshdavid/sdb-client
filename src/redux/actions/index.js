import axios from 'axios';
import * as types from './types';

// error handler
export const errorHandler = (dispatch, error, type) => {
  console.log('Error type: ', type);
  console.log(error);

  let errorMessage = error.response ? error.response.data : error;

  dispatch({
    type,
    payload: errorMessage,
  });
}

// GET request
export const getData = (action, errorType, url, dispatch) => {
  let requestUrl = url;
  let headers = {};

  axios.get(requestUrl, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}

// POST request
export const postData = (action, errorType, url, dispatch, data) => {
  const requestUrl = url;
  let headers = {};

  axios.post(requestUrl, data, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}

// PUT request
export const putData = (action, errorType, url, dispatch, data) => {
  const requestUrl = url;
  let headers = {};

  axios.put(requestUrl, data, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}


// DELETE request
export const deleteData = (action, errorType, url, dispatch) => {
  const requestUrl = url;
  let headers = {};

  axios.delete(requestUrl, headers)
  .then((response) => {
    dispatch({
      type: action,
      payload: response.data,
    });
  })
  .catch((error) => {
    errorHandler(dispatch, error.response, errorType);
  });
}