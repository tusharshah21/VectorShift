import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import './style.css'; // Import the existing stylesheet

export const TextNode = ({ id, data, isConnectable }) => {
  const [text, setText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);
  const textRef = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Function to detect variables and update handles
  useEffect(() => {
    const varPattern = /{{\s*(\w+)\s*}}/g;
    const vars = [];
    let match;
    while ((match = varPattern.exec(text)) !== null) {
      vars.push(match[1]);
    }
    setVariables(vars);
  }, [text]);

  // Dynamic resizing of the node
  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.height = 'auto';
      textRef.current.style.height = textRef.current.scrollHeight + 'px';
    }
  }, [text]);

  return (
    <div className="node-container text-node">
      <div className="node-header">Text</div>
      <textarea
        ref={textRef}
        value={text}
        onChange={handleTextChange}
        className="node-textarea"
      />
      {variables.map((variable, index) => (
        <Handle
          key={`${id}-${variable}`}
          type="source"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: 20 + index * 20 }}
          isConnectable={isConnectable}
          className="node-handle"
        />
      ))}
      <Handle
        type="target"
        position={Position.Top}
        id={`${id}-input`}
        isConnectable={isConnectable}
        className="node-handle"
      />
    </div>
  );
};
