import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ProjectForm from './Components/ProjectForm'
import ProjectList from './Components/ProjectList'





function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project glaxosmith", description: "project management system for glaxosmith" },
    { id: 2, title: "Project 2: jungle nuts epz", description: "Media Advertisement" },
    { id: 3, title: "Project 3: KVM thika", description: "payroll system for KVM in thika" },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProject = (newProject) => {
    setProjects((prev) => [...prev, newProject]);
  };

  const handleDeleteProject = (id) => {
    setProjects((prev) => prev.filter((proj) => proj.id !== id));
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
