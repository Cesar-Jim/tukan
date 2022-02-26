import { useReducer, useEffect } from 'react';

import { retrieveChartData } from '../utils/data-utilities-';
import AppContext from './context';
import AppReducer from './reducer';

const AppState = (props) => {
  const initialState = {
    data: null,
    error: null,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Functions
  async function fetchDataApi(series, token) {
    const data = await retrieveChartData(series, token);

    if (!data.error) {
      dispatch({ type: 'SET_ERROR_STATE', payload: null });
      dispatch({ type: 'SET_DATA_STATE', payload: data });
    } else {
      dispatch({ type: 'SET_ERROR_STATE', payload: data.error });
    }
  }

  function getDataFromState() {
    dispatch({ type: 'GET_DATA_STATE', payload: state.data });
  }

  function setErrorInState(error) {
    dispatch({ type: 'SET_ERROR_STATE', payload: error });
  }

  function getErrorFromState() {
    dispatch({ type: 'GET_ERROR_STATE', payload: state.error });
  }

  useEffect(() => {
    console.log('DATA', state.data);
  }, [state.data]);

  useEffect(() => {
    console.log('ERROR', state.error);
  }, [state.error]);

  const value = {
    data: state.data,
    error: state.error,
    fetchDataApi,
    getDataFromState,
    setErrorInState,
    getErrorFromState,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppState;
