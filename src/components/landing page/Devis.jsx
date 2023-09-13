import React from 'react'
import '../../style/landing-page/devis.css';
import paw1 from '../../icons/devis/paw_1.svg';
import paw2 from '../../icons/devis/paw_2.svg';
import paw3 from '../../icons/devis/paw_3.svg';
const Devis = () => {
  return (
    <section id="devis_section">
      <h1 id='devis_title'>Voici votre <span id="orange">devis personnalisé</span></h1>
      <div id="cards_container">
        <div className="devis_card">
          <div id="icon_container">
            <img src={paw1} width='80px' height='80px' alt="" className='devis_icon' />
            <p className="devis_name">Confort</p>
            <p className="a_partir">A partir du 00/00/0000</p>
            <p className="devis_price">200 DH/Mois</p>
            <div className="devis_content">
              <ul>
                <li><span>Frais d'hospitalisation</span></li>
                <li><span>Frais de sterilisation</span></li>
                <li><span>Frais chirurgicaux</span></li>
                <li><span>Frais vaccination</span></li>
                <li><span>Frais chirurgicaux</span></li>
                <li><span>Frais vaccination</span></li>
              </ul>
            </div>
            <div className="devis_btn_container">
              <button className="btn devis_btn">Souscrire en ligne</button>
            </div>
          </div>
        </div>

        <div className="devis_card">
          <div id="icon_container">
            <img src={paw2} width='80px' height='80px' alt="" className='devis_icon' />
            <p className="devis_name">Complète</p>
            <p className="a_partir">A partir du 00/00/0000</p>
            <p className="devis_price">500 DH/Mois</p>
            <div className="devis_content">
              <ul>
                <li><span>Frais d'hospitalisation</span></li>
                <li><span>Frais de sterilisation</span></li>
                <li><span>Frais chirurgicaux</span></li>
                <li><span>Frais vaccination</span></li>
                <li><span>Frais chirurgicaux</span></li>
                <li><span>Frais vaccination</span></li>
              </ul>
            </div>
            <div className="devis_btn_container">
              <button className="btn devis_btn">Souscrire en ligne</button>
            </div>
          </div>
        </div>

        <div className="devis_card">
          <div id="icon_container">
            <img src={paw3} width='80px' height='80px' alt="" className='devis_icon' />
            <p className="devis_name">Premium</p>
            <p className="a_partir">A partir du 00/00/0000</p>
            <p className="devis_price">999 DH/Mois</p>
            <div className="devis_content">
              <ul>
                <li><span>Frais d'hospitalisation</span></li>
                <li><span>Frais de sterilisation</span></li>
                <li><span>Frais chirurgicaux</span></li>
                <li><span>Frais vaccination</span></li>
                <li><span>Frais chirurgicaux</span></li>
                <li><span>Frais vaccination</span></li>
              </ul>
            </div>
            <div className="devis_btn_container">
              <button className="btn devis_btn">Souscrire en ligne</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Devis