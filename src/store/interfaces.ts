import { IContactState } from './contact/types';
import { ISearchState } from './search/types';

export interface IState {
  contactReducer: IContactState;
  searchReducer: ISearchState;
}
