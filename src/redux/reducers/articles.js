import * as types from '../actions/types';

const INITIAL_STATE = {
  articles: [],
  article: {},
  loading: false,
  error: null,
};

export const articles = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // articles
    case types.FETCH_ARTICLES_REQUEST:
      return {
        ...state,
        loading: true,
        articles: [],
      };

    case types.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload.data,
      };

    case types.FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // article
    case types.FETCH_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        article: action.payload.data,
      };

    case types.FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
