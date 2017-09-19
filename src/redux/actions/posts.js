import axios from 'axios';
import * as types from './types';
import { getData } from './index';

// fetch post
export function fetchPost(slug) {
  const url = `/posts/${slug}`;

  return dispatch => getData(types.FETCH_POST_SUCCESS, types.FETCH_POST_FAILURE, url, dispatch);
}

// fetch posts
export function fetchPosts() {
  const url = `/posts`;

  return dispatch => getData(types.FETCH_POSTS_SUCCESS, types.FETCH_POSTS_FAILURE, url, dispatch);
}