//inputNode.js

import React from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const InputNode = (props) => {
  const fields = [
    { name: 'currName', label: 'Name', type: 'text', dataKey: 'inputName', defaultValue: props.id.replace('customInput-', 'input_') },
    { name: 'inputType', label: 'Type', type: 'select', dataKey: 'inputType', defaultValue: 'Text', options: ['Text', 'File'] },
  ];

  const handles = [
    { id: 'value', type: 'source', position: Position.Right },
  ];

  return <BaseNode {...props} type="Input" fields={fields} handles={handles} />;
};
