import { SearchActions, SearchActionTypes, ISearchState } from './types';

const initialState: ISearchState = {
  searchString: ''
};

export default function searchReducer(
  state = initialState,
  action: SearchActions
): ISearchState {
  switch (action.type) {
    case SearchActionTypes.CHANGE_SEARCH_STRING:
      return {
        searchString: action.payload
      };
    default:
      return state;
  }
}
