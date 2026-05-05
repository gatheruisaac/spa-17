const ProjectItem = ({ project, onDelete }) => {
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


export default ProjectItem;