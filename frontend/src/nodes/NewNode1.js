

import React from 'react';
import BaseNode from './BaseNode';
import { Handle, Position } from 'reactflow';

export const NewNode1 = (props) => {
  const fields = [
    { name: 'customField1', label: 'Custom Field 1', type: 'text', dataKey: 'customData1', defaultValue: 'Default 1' },
    { name: 'customField2', label: 'Custom Field 2', type: 'select', dataKey: 'customData2', defaultValue: 'Option1', options: ['Option1', 'Option2'] },
  ];

  const handles = [
    { id: 'input', type: 'target', position: Position.Left },
    { id: 'output', type: 'source', position: Position.Right },
  ];

  return <BaseNode {...props} type="CustomNode1" fields={fields} handles={handles} />;
};
