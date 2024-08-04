// src/nodes/ConditionalNode.js

import { useState } from 'react';
import BaseNode from './BaseNode';

export const ConditionalNode = ({ id, data }) => {
  const [condition] = useState(data?.condition || 'if');

  const fields = [
    {
      name: 'condition',
      label: 'Condition',
      type: 'select',
      dataKey: 'condition',
      defaultValue: 'if',
      options: ['if', 'else']
    }
  ];

  const handles = [
    { id: 'input', type: 'target', position: 'left' },
    { id: 'output', type: 'source', position: 'right' }
  ];

  return (
    <BaseNode
      id={id}
      type="ConditionalNode"
      data={{ ...data, condition }}
      fields={fields}
      handles={handles}
    />
  );
};
