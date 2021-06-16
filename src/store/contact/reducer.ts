import { ContactActions, ContactActionTypes, IContactState } from './types';

const initialState: IContactState = {
  contacts: [],
  isLoading: false,
  error: null
};

export default function contactsReducer(
  state = initialState,
  action: ContactActions
): IContactState {
  switch (action.type) {
    case ContactActionTypes.CONTACT_REQUEST:
      return {
        contacts: [],
        isLoading: true,
        error: null
      };

    case ContactActionTypes.CONTACT_SUCCESS:
      return {
        contacts: action.payload,
        isLoading: false,
        error: null
      };
    case ContactActionTypes.CONTACT_ERROR:
      return {
        contacts: [],
        isLoading: false,
        error: action.payload
      };
    case ContactActionTypes.GET_CONTACT_ITEM:
      return {
        ...state,
        isLoading: false,
        contactItem: action.payload
      };

    default:
      return state;
  }
}
