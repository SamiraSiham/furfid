import React from "react";
import "../../style/Animals/Animaux.css";
import catIcon from '../../icons/cat-icon.svg'
function CarteChat() {
  return (
    <div className="Carte">
      <div className="ChatImage">
        <img src={catIcon} width='70px' height='70px' alt="" />
      </div>
      <h3>Chat</h3>
    </div>
  );
}

export default CarteChat;
