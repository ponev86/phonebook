import React from 'react';
import FormEditor from '../../components/FormEditor';

interface IEditorProps {
  isEdit?: boolean;
}

const Editor: React.FC<IEditorProps> = ({ isEdit }) => {
  return <FormEditor />;
};

export default Editor;
