import React from 'react';
import { useParams } from 'react-router-dom';

interface ParamTypes {
  contactId: string;
}

const View: React.FC = () => {
  const { contactId } = useParams<ParamTypes>();
  return <div>Contact of Id - {contactId}</div>;
};

export default View;
