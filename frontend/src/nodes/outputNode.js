// outputNode.js

import React from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';


export const OutputNode = (props) => {
  const fields = [
    { name: 'currName', label: 'Name', type: 'text', dataKey: 'outputName', defaultValue: props.id.replace('customOutput-', 'output_') },
    { name: 'outputType', label: 'Type', type: 'select', dataKey: 'outputType', defaultValue: 'Text', options: ['Text', 'Image'] },
  ];

  const handles = [
    { id: 'value', type: 'target', position: Position.Left },
  ];

  return <BaseNode {...props} type="Output" fields={fields} handles={handles} />;
};
