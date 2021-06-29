import React from 'react';

import { useParams } from 'react-router-dom';
import EditForm from '../../components/EditForm';


interface ParamTypes {
  contactId: string;
}

const EditContact: React.FC = () => {
  
  const { contactId } = useParams<ParamTypes>();
  
  return <EditForm contactId={+contactId} />;
};

export default EditContact;
