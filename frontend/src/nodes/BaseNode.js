// BaseNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

const BaseNode = ({ id, data, type, fields, handles }) => {
  const [state, setState] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = data[field.dataKey] || field.defaultValue;
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      <div>
        <span>{type}</span>
      </div>
      <div>
        {fields.map((field) => (
          <label key={field.name}>
            {field.label}:
            {field.type === 'select' ? (
              <select
                name={field.name}
                value={state[field.name]}
                onChange={handleChange}
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={state[field.name]}
                onChange={handleChange}
              />
            )}
          </label>
        ))}
      </div>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
    </div>
  );
};

export default BaseNode;
