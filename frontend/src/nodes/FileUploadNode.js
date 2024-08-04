
// FileUploadNode.js

import { useState } from 'react';
import BaseNode from './BaseNode';

export const FileUploadNode = ({ id, data }) => {
  const [fileName] = useState(data?.fileName || '');

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
