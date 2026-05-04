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

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <button className="delete-btn" onClick={() => onDelete(project.id)}>✕</button>
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

const ProjectList = ({ projects, searchTerm, onSearchChange, onDelete }) => {
  return (
    <div className="card list-section">
      <input
        className="search-input"
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className="projects-container">
        {projects.length > 0 ? (
          projects.map((proj) => (
            <ProjectItem key={proj.id} project={proj} onDelete={onDelete} />
          ))
        ) : (
          <p className="no-projects">No projects found.</p>
        )}
      </div>
    </div>
  );
};


function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project glaxosmith", description: "project management system for glaxosmith" },
    { id: 2, title: "Project 2: jungle nuts epz", description: "Media Advertisement" },
    { id: 3, title: "Project 3: KVM thika", description: "payroll system for KVM in thika" },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <ProjectForm onAddProject={handleAddProject} />
        <ProjectList
         projects={filteredProjects} 
         searchTerm={searchTerm}
         onSearchChange={setSearchTerm}
         onDelete={handleDeleteProject}
        />
      </main>
    </div>
  );
}

export default App
