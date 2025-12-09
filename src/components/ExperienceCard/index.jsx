import './style.css';

function ExperienceCard({ companyLogo, companyName, role, period, description }) {
  return (
    <div className="experience-card">
      <img src={companyLogo} alt={`${companyName} logo`} className="experience__logo" />

      <div className="experience__content">
        <h4 className="experience__company">{companyName}</h4>
        <h5 className="experience__role">{role}</h5>
        <span className="experience__period">{period}</span>
        <ul className="experience__description">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;