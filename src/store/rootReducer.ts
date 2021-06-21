import { combineReducers } from 'redux';

import contactReducer from './contact/reducer';
import searchReducer from './search/reducers';

export default combineReducers({
  contactReducer,
  searchReducer
});
