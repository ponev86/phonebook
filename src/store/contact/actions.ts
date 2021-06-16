import { Dispatch } from 'redux';
import { CONTACTS_URL } from '../../helpers/api';
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
      console.log(err);

      dispatch(contactErrorAction('Что-то пошло не так. Попробуйте позже!'));
    }
  };
