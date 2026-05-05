import ProjectItem from './ProjectItem'

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

export default ProjectList