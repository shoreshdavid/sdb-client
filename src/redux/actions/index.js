import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1';

// export function fetchPosts() {
//   const request = axios({
//     method: 'get',
//     url: `${ROOT_URL}/posts`,
//     headers: [],
//   });

//   return {
//     type: types.FETCH_POSTS,
//     payload: request,
//   };
// }

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
  const requestUrl = API_URL + url;
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
  const requestUrl = API_URL + url;
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
  const requestUrl = API_URL + url;
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
  const requestUrl = API_URL + url;
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