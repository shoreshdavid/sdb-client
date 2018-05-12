import { getData } from './index';
import * as types from './types';

/**
 * @returns the post payload and sets loading to true
 */
export const fetchArticles = () => {
  const url = `${types.API_URL}/articles`;

  return dispatch => getData(types.FETCH_ARTICLES_SUCCESS, types.FETCH_ARTICLES_FAILURE, url, dispatch);
}

export const fetchArticle = (slug) => {
  const url = `${types.API_URL}/articles/${slug}`
  return dispatch => getData(types.FETCH_ARTICLE_SUCCESS, types.FETCH_ARTICLE_FAILURE, url, dispatch);
}

// // fetch posts success
// export const fetchPostsSuccess = (posts) => ({
//   type: types.FETCH_POSTS_SUCCESS,
//   payload: posts,
// });

// // fetch posts failure
// export const fetchPostsFailure = (error) => ({
//   type: types.FETCH_POSTS_FAILURE,
//   payload: error,
// });

// /** fetch post request
//  * 
//  * @param {*slug} slug 
//  */
// export const fetchPostRequest = (slug) => ({

// });

// // fetch post success
// export const fetchPostSuccess = (post) => ({
//   type: types.FETCH_POST_SUCCESS,
//   payload: post,
// });

// // fetch post failure
// export const fetchPostFailure = (error) => ({
//   type: types.FETCH_POST_SUCCESS,
//   payload: error,
// });