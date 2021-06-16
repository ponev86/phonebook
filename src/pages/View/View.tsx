import React from 'react';
import HeaderView from '../../components/HeaderView';
import ContactView from '../../components/ContactView';

import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store/interfaces';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getContactById } from '../../store/contact/actions';

interface ParamTypes {
  contactId: string;
}

const View: React.FC = () => {
  const { contactId } = useParams<ParamTypes>();
  const dispatch = useDispatch();
  const { contactItem } = useSelector((state: IState) => state.contactReducer);

  useEffect(() => {
    dispatch(getContactById(+contactId));
  }, [dispatch, contactId]);

  return (
    <>
      <HeaderView contactItem={contactItem} />
      <ContactView contactItem={contactItem} />
    </>
  );
};

export default View;
