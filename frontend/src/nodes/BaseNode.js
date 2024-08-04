// BaseNode.js
import React from 'react';
import { Handle } from 'reactflow';

const BaseNode = ({ id, type, data, fields, handles }) => {
  const renderFields = () => {
    return fields.map((field) => {
      if (field.type === 'text') {
        return (
          <div key={field.name}>
            <label>
              {field.label}:
              <input
                type="text"
                value={data[field.dataKey] || field.defaultValue}
                onChange={(e) => data[field.dataKey] = e.target.value}
              />
            </label>
          </div>
        );
      } else if (field.type === 'select') {
        return (
          <div key={field.name}>
            <label>
              {field.label}:
              <select
                value={data[field.dataKey] || field.defaultValue}
                onChange={(e) => data[field.dataKey] = e.target.value}
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
        );
      } else if (field.type === 'file') {
        return (
          <div key={field.name}>
            <label>
              {field.label}:
              <input
                type="file"
                onChange={(e) => field.onChange(e)} // Pass the event to the handler
              />
              <span>{data[field.dataKey]}</span>
            </label>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      <div>
        <span>{type}</span>
      </div>
      <div>{renderFields()}</div>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
        />
      ))}
    </div>
  );
};

export default BaseNode;
