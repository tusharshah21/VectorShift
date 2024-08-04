// toolbar.js

import { DraggableNode } from './draggableNode';
import { MdInput } from "react-icons/md";
import { MdOutput } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { MdOutlineComment } from "react-icons/md";
import { IoMdLink } from "react-icons/io";
import { GoArrowSwitch } from "react-icons/go";

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' icon={<MdInput />}/>
                <DraggableNode type='llm' label='LLM' icon={<CiSettings />}/>
                <DraggableNode type='customOutput' label='Output' icon={<MdOutput />}/>
                <DraggableNode type='text' label='Text' icon={<IoDocumentTextOutline />}/>
                <DraggableNode type='newNode1' label='Multi-node' icon={<MdOutlineComment />}/>  {/* Added new node 1 */}
                <DraggableNode type='conditional' label='Condition' icon={<GoArrowSwitch />} /> {/* Added new node 2 */}
                <DraggableNode type='url' label='URL' icon={<IoMdLink />} /> {/* Added new node 3 */}
                <DraggableNode type='fileUpload' label='Upload' icon={<CiFileOn />} /> {/* Added new node 4 */}
            </div>
        </div>
    );
};
