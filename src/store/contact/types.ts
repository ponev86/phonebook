export interface IContactState {
  contacts: IContact[];
  isLoading: boolean;
  error: null | string;
  contactItem?: IContact;
}

export interface IContact {
  id: number;
  name: string;
  surname?: string;
  phone: string;
  email?: string;
  avatar?: string;
}

export enum ContactActionTypes {
  CONTACT_REQUEST = 'CONTACT_REQUEST',
  CONTACT_SUCCESS = 'CONTACT_SUCCESS',
  CONTACT_ERROR = 'CONTACT_ERROR',
  GET_CONTACT_ITEM = 'GET_CONTACT_ITEM',
  ADD_CONTACT = 'ADD_CONTACT',
  EDIT_CONTACT = 'EDIT_CONTACT',
  REMOVE_CONTACT = 'REMOVE_CONTACT'
}

interface IContactRequestAction {
  type: ContactActionTypes.CONTACT_REQUEST;
}

interface IContactSuccessAction {
  type: ContactActionTypes.CONTACT_SUCCESS;
  payload: IContact[];
}

interface IContactErrorsAction {
  type: ContactActionTypes.CONTACT_ERROR;
  payload: string;
}

interface IContactGetItemAction {
  type: ContactActionTypes.GET_CONTACT_ITEM;
  payload: IContact;
}

interface IContactAddAction {
  type: ContactActionTypes.ADD_CONTACT;
  payload: IContact;
}

interface IContactRemoveAction {
  type: ContactActionTypes.REMOVE_CONTACT;
  payload: number;
}

interface IContactEditAction {
  type: ContactActionTypes.EDIT_CONTACT;
  payload: IContact;
}

export type ContactActions =
  | IContactRequestAction
  | IContactSuccessAction
  | IContactErrorsAction
  | IContactGetItemAction
  | IContactAddAction
  | IContactRemoveAction 
  | IContactEditAction;
