import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import './style.css'

function ArrowBack() {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/');
  }
  
  return (
    <div className="arrow-back" onClick={redirectToHome}>
      <FaArrowLeft />
    </div>
  )
}

export default ArrowBack