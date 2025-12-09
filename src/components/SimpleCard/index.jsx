import { useNavigate } from "react-router-dom";
import './style.css'

function SimpleCard({ title, target, className }) {
  const navigate = useNavigate();

  const redirectToTarget = () => {
    navigate(`/${target}`);
  }
  
  return (
    <div 
      className={`card ${className}`} 
      data-target={target} 
      onClick={redirectToTarget}
    >
      <div className="card__point"></div>
      
      <div className="card__title">
        {title.split('/').map((line, index) => (
          <h3 key={index}> 
            {line}
          </h3>
        ))}
      </div>
    </div>
  )
}

export default SimpleCard