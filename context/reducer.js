import {
  SET_DATA_STATE,
  GET_DATA_STATE,
  SET_ERROR_STATE,
  GET_ERROR_STATE,
  SET_LOADING_STATE,
  GET_LOADING_STATE,
} from './types';

const AppReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_DATA_STATE:
      return { ...state, data: payload };

    case GET_DATA_STATE:
      return state.data;

    case SET_ERROR_STATE:
      return { ...state, error: payload };

    case GET_ERROR_STATE:
      return state.error;

    case SET_LOADING_STATE:
      return { ...state, isLoading: payload };

    case GET_LOADING_STATE:
      return state.isLoading;

    default:
      return state;
  }
};

export default AppReducer;
