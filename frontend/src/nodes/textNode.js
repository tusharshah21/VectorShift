// textNode.js
import React from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const TextNode = (props) => {
  const fields = [
    {
      name: 'text',
      label: 'Text',
      type: 'text',
      dataKey: 'text',
      defaultValue: '{{input}}',
    },
  ];

  const handles = [
    { id: 'output', type: 'source', position: Position.Right },
  ];

  return <BaseNode {...props} type="Text" fields={fields} handles={handles} />;
};
