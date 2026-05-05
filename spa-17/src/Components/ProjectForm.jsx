import { useState } from 'react';

// =============================================
// COMPONENT: ProjectForm
// Rubric: Component Hierarchy + Event Handling
// Controlled form for adding a new project.
// Owns its own local state for title/description
// Sends completed project up via onAddProject prop


const ProjectForm = ({ onAddProject }) => {

  // Local state — Rubric: State Management
  // These don't need to live in App since nothing
  // else depends on them
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  // Rubric: Event Handling
  // Prevents default form reload, validates inputs,
  // calls parent handler, then resets the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;// guard: no empty submissions
    
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

export default ProjectForm;