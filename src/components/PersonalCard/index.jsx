import './style.css'
import profile from '../../assets/profile.png'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function PersonalCard() {
  
  return (
    <div className="personal-card">
      <div className="personal-card__wrapper-image">
        <img
          className="personal-card__image"
          src={profile}
          alt="Imagem de perfil de Débora Taveira"
        />
      </div>

      <div className="personal-card__hello">
        <h1>Olá, sou</h1>
        <h1>Débora Taveira</h1>
        <h4>Desenvolvedora FrontEnd</h4>
      </div>

      <div className="personal-card__contact">
        <a href="mailto:deborataveira.dev@gmail.com" target="_blank">
          <FaEnvelope /> 
          deborataveira.dev@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/deborataveiraa/"
          target="_blank"
        >
          <FaLinkedin />
          www.linkedin.com/in/deborataveiraa/
        </a>

        <a href="https://github.com/DeboraTaveiraa" target="_blank">
          <FaGithub /> 
          github.com/DeboraTaveiraa
        </a>
      </div>
    </div>
  )
}

export default PersonalCard