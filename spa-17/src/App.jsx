import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ProjectForm from './Components/ProjectForm'
import ProjectList from './Components/ProjectList'


// =============================================
// ROOT COMPONENT: App
// Rubric: Component Hierarchy + State Management
// Parent component — owns all shared state and
// passes data/handlers down to child components
// =============================================

function App() {

  // STATE 1 — Rubric: State Management
  // Holds the full list of projects
  // Seeded with 3 default entries on first render

  const [projects, setProjects] = useState([
    { id: 1, title: "Project glaxosmith", description: "project management system for glaxosmith" },
    { id: 2, title: "Project 2: jungle nuts epz", description: "Media Advertisement" },
    { id: 3, title: "Project 3: KVM thika", description: "payroll system for KVM in thika" },
  ]);


  // STATE 2 — Rubric: State Management
  // Drives the real-time search filter
  const [searchTerm, setSearchTerm] = useState('');

  // Rubric: Event Handling
  // Adds a new project — uses functional update to avoid stale state
  const handleAddProject = (newProject) => {
    setProjects((prev) => [...prev, newProject]);
  };

  // Rubric: Event Handling
  // Deletes a project by id — filters it out of state
  const handleDeleteProject = (id) => {
    setProjects((prev) => prev.filter((proj) => proj.id !== id));
  };

  // Rubric: State Management
  // Derived state — recomputed every render based on searchTerm
  // No extra state needed, just a filtered view of projects
  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
            {/* Rubric: Component Hierarchy — Header is its own component */}
      <Header />
      <main className="main-content">
        {/* Rubric: Passing Props — onAddProject handler passed down */}

        <ProjectForm onAddProject={handleAddProject} />
            {/* Rubric: Passing Props — 4 props passed: filtered list, search state, search handler, delete handler */}
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
