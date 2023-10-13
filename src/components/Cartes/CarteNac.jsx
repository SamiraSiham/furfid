import React from "react";
import carteNac from '../../icons/nac-icon.svg'
function CarteNac() {
  return (
    <div className="Carte">
      <div className="NacImage">
        <img src={carteNac} width='70px' height='65px' alt="" />
      </div>
      <h3>Nac</h3>
    </div>
  );
}

export default CarteNac;
