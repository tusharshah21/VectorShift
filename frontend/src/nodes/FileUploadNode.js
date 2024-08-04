



// src/nodes/FileUploadNode.js

import { useState } from 'react';
import BaseNode from './BaseNode';

export const FileUploadNode = ({ id, data }) => {
  const [fileName, setFileName] = useState(data?.fileName || '');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      data.fileName = file.name; 
    }
  };

  const fields = [
    {
      name: 'fileUpload',
      label: 'Upload File',
      type: 'file',
      dataKey: 'fileName',
      defaultValue: '',
    }
  ];

  const handles = [
    { id: 'input', type: 'target', position: 'left' },
    { id: 'output', type: 'source', position: 'right' }
  ];

  return (
    <BaseNode
      id={id}
      type="FileUploadNode"
      data={{ ...data, fileName }}
      fields={fields}
      handles={handles}
    />
  );
};
