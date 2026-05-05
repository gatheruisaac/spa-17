import ProjectItem from './ProjectItem'

// =============================================
// COMPONENT: ProjectList
// Rubric: Component Hierarchy + Passing Props
// Renders the search bar and the list of projects.
// Receives all data and handlers from App via props
// and passes onDelete further down to ProjectItem
// =============================================

const ProjectList = ({ projects, searchTerm, onSearchChange, onDelete }) => {
  return (
    <div className="card list-section">
           {/* Rubric: Event Handling — controlled search input
          onChange updates searchTerm state in App */}
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
            // Rubric: Passing Props — project object and onDelete
            // passed to each ProjectItem
            // key prop is required by React for list rendering
            <ProjectItem key={proj.id} project={proj} onDelete={onDelete} />
          ))
        ) : (
          <p className="no-projects">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectList