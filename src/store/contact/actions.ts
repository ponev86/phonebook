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

export const addNewContact = (newContact: IContact, file?: File) => async (dispatch: Dispatch<ContactActions>, getState: any) => {
  try {
    newContact.avatar = '';

    if (file) {
      const base64 = await convertBase64(file)
      newContact.avatar = base64 as string;
    }
    
    await fetch(CONTACTS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    });
    
    dispatch(contactSuccessAction([...getState().contactReducer.contacts, newContact]))
    
    
    
  } catch (err) {
    dispatch(contactErrorAction(err));
  }
}