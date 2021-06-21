import { Dispatch } from 'redux';
import { SearchActions, SearchActionTypes } from './types';

const searchChangeAction = (payload?: string): SearchActions => ({
  type: SearchActionTypes.CHANGE_SEARCH_STRING,
  payload
});

export const changeSearchString =
  (str?: string) => async (dispatch: Dispatch<SearchActions>) => {
    dispatch(searchChangeAction(str));
  };
