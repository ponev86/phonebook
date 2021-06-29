import { Dispatch } from 'redux';
import { CONTACTS_URL } from '../../helpers/api';
import { convertBase64 } from '../../helpers/functions';
import { ContactActions, ContactActionTypes, IContact } from './types';

const contactRequestAction = (): ContactActions => ({
  type: ContactActionTypes.CONTACT_REQUEST
});

const contactSuccessAction = (payload: IContact[]): ContactActions => ({
  type: ContactActionTypes.CONTACT_SUCCESS,
  payload
});

const contactErrorAction = (payload: string): ContactActions => ({
  type: ContactActionTypes.CONTACT_ERROR,
  payload
});

const getContactByIdAction = (payload: IContact): ContactActions => ({
  type: ContactActionTypes.GET_CONTACT_ITEM,
  payload
});

const addContactAction = (payload: IContact): ContactActions => ({
  type: ContactActionTypes.ADD_CONTACT,
  payload
});

const removeContactAction = (payload: number): ContactActions => ({
  type: ContactActionTypes.REMOVE_CONTACT,
  payload
});

const editContactAction = (payload: IContact): ContactActions => ({
  type: ContactActionTypes.EDIT_CONTACT,
  payload
});

export const getContacts = () => async (dispatch: Dispatch<ContactActions>) => {
  dispatch(contactRequestAction());
  try {
    const response = await fetch(CONTACTS_URL);
    const data = await response.json();

    dispatch(contactSuccessAction(data));
  } catch (err) {
    console.log(err);

    dispatch(contactErrorAction('Что-то пошло не так. Попробуйте позже!'));
  }
};

export const getContactById =
  (id: number) => async (dispatch: Dispatch<ContactActions>) => {
    dispatch(contactRequestAction());
    try {
      const response = await fetch(`${CONTACTS_URL}/${id}`);
      const data = await response.json();

      dispatch(getContactByIdAction(data));
    } catch (err) {
      dispatch(contactErrorAction('Что-то пошло не так. Попробуйте позже!'));
    }
  };

export const addContact =
  (newContact: IContact, file?: File) =>
  async (dispatch: Dispatch<ContactActions>) => {
    try {
      newContact.avatar = '';

      if (file) {
        const base64 = await convertBase64(file);
        newContact.avatar = base64 as string;
      }

      const response = await fetch(CONTACTS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContact)
      });

      const addedContact = await response.json();

      dispatch(addContactAction(addedContact));
    } catch (err) {
      dispatch(contactErrorAction(err));
    }
  };

export const editContact =
  (contactId: number, editDataContact: IContact, file?: File) =>
  async (dispatch: Dispatch<ContactActions>) => {
    try {
      if (file) {
        const base64 = await convertBase64(file);
        editDataContact.avatar = base64 as string;
      }
      const response = await fetch(`${CONTACTS_URL}/${contactId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editDataContact)
      });

      const editedContact = await response.json();
      dispatch(editContactAction(editedContact));
    } catch (err) {
      dispatch(contactErrorAction(err));
    }
  };

export const removeContact =
  (contactId: number) => async (dispatch: Dispatch<ContactActions>) => {
    try {
      await fetch(`${CONTACTS_URL}/${contactId}`, {
        method: 'DELETE'
      });

      dispatch(removeContactAction(contactId));
    } catch (err) {
      dispatch(contactErrorAction(err));
    }
  };

export const clearAvatar =
  (contactId: number) => async (dispatch: Dispatch<ContactActions>) => {
    try {
      const response = await fetch(`${CONTACTS_URL}/${contactId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ avatar: '' })
      });
      const editedContact = await response.json();
      dispatch(editContactAction(editedContact));
    } catch (err) {
      dispatch(contactErrorAction(err));
    }
  };
