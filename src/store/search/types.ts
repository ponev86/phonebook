export interface ISearchState {
  searchString?: string;
}

export enum SearchActionTypes {
  CHANGE_SEARCH_STRING = 'CHANGE_SEARCH_STRING'
}

interface ISearchStringChangeAction {
  type: SearchActionTypes.CHANGE_SEARCH_STRING;
  payload?: string;
}

export type SearchActions = ISearchStringChangeAction;
