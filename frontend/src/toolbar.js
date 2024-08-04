// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='newNode1' label='Multi-node' />  {/* Add this line */}
                <DraggableNode type='conditional' label='Condition' /> {/* Add this line */}
                <DraggableNode type='url' label='URL' /> {/* Add this line */}
                <DraggableNode type='fileUpload' label='Upload' /> {/* Add this line */}
            </div>
        </div>
    );
};
