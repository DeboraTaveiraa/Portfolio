import "./style.css";

function SkillCard({ icon, title }) {
  return (
    <div className="skill-card">
      <div className="skill__icon">{icon}</div>

      <h4 className="skill__title">{title}</h4>
    </div>
  );
}

export default SkillCard;