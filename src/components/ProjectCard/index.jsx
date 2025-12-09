import './style.css'

function ProjectCard({ imageSrc, imageAlt, title, description, projectLink }) {

  return (
    <div className="project-card">
      <img
        src={imageSrc}
        className="project__image"
        alt={imageAlt}
      />

      <div className="project__content">
        <h4>{title}</h4>

        <p>{description}</p>

        <a
          href={projectLink}
          target="_blank"
          class="project__link"
        >
          Visualizar
        </a>
      </div>
    </div>
  )
}

export default ProjectCard;