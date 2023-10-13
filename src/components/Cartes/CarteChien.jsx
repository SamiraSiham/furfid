import React from "react";
import dogIcon from '../../icons/dog-icon.svg'
function CarteChien() {
  return (
    <div className="Carte">
      <div className="ChienImage">
        <img src={dogIcon} width='70px' height='70px' alt="" />
      </div>
      <h3>Chien</h3>
    </div>
  );
}

export default CarteChien;
