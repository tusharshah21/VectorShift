// UrlNode.js

import React, { useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';
import { isValidUrl } from './Utils';  // Ensure this function is correctly imported

export const UrlNode = ({ id, data, fields, handles }) => {
  const [url, setUrl] = useState(data.url || 'https://www.google.com');
  const [error, setError] = useState('');

  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    setError(isValidUrl(newUrl) ? '' : 'Enter a valid URL');
  };

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
