import {
  ContactActions,
  ContactActionTypes,
  IContact,
  IContactState
} from './types';

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
        ...state,
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
    case ContactActionTypes.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case ContactActionTypes.REMOVE_CONTACT: {
      const contacts = state.contacts.filter(
        (itemContact: IContact) => itemContact.id !== action.payload
      );
      return {
        ...state,
        contacts: [...contacts]
      };
    }
    case ContactActionTypes.EDIT_CONTACT: {
      const idx = state.contacts.findIndex(
        (itemContact: IContact) => itemContact.id === action.payload.id
      );

      const editedContacts = [
        ...state.contacts.slice(0, idx),
        action.payload,
        ...state.contacts.slice(idx + 1)
      ];
      return {
        ...state,
        contacts: editedContacts
      };
    }
    default:
      return state;
  }
}
