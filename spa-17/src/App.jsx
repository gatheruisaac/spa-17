import { useState } from 'react'
import './App.css'
import Header from './Components/Header'

const ProjectForm = ({ onAddProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    onAddProject({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="card">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app-container">
    <Header />
    </div>

  )
}

export default App
