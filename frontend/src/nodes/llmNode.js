// llmNode.js
import React from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';


export const LLMNode = (props) => {
  const fields = [
    { name: 'llmText', label: 'LLM Text', type: 'text', dataKey: 'text', defaultValue: 'This is a LLM.' },
  ];

  const handles = [
    { id: 'system', type: 'target', position: Position.Left, style: { top: `${100 / 3}%` } },
    { id: 'prompt', type: 'target', position: Position.Left, style: { top: `${200 / 3}%` } },
    { id: 'response', type: 'source', position: Position.Right },
  ];

  return <BaseNode {...props} type="LLM" fields={fields} handles={handles} />;
};
