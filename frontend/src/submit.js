// submit.js

import axios from 'axios';
import { useStore } from './store'; // Import the store to access nodes and edges


export const SubmitButton = () => {
    const { nodes, edges } = useStore(state => ({ nodes: state.nodes, edges: state.edges }));
    const onClickSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/pipelines/parse', {
                nodes,
                edges
            });
            const { num_nodes, num_edges, is_dag } = response.data;
            alert(`Number of Nodes: ${num_nodes}\nNumber of Edges: ${num_edges}\nIs DAG: ${is_dag}`);
        } catch (error) {
            console.error('Error submitting pipeline:', error);
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button className="btn btn-primary" type="submit" onClick={onClickSubmit}>Submit</button>
        </div>
    );
}
