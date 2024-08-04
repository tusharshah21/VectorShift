// UrlNode.js

import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const UrlNode = ({ id, data, fields, handles }) => {
  const [url] = useState(data.url || 'https://www.google.com');

  const urlField = {
    name: 'url',
    label: 'Enter URL',
    type: 'text',  // Use 'text' for URL input
    dataKey: 'url',
    defaultValue: url,
  };

  const urlHandles = [
    { id: 'input', type: 'target', position: Position.Left },
    { id: 'output', type: 'source', position: Position.Right },
  ];

  return (
    <BaseNode
      id={id}
      type="URL"
      data={{ ...data, url }}
      fields={[urlField]}
      handles={urlHandles}
    />
  );
};
