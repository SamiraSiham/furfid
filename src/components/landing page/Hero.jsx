import React from 'react'
import '../../style/landing-page/hero.css';
// import bg1 from '../../images/hero_section_1.jpg'
const Hero = () => {
  return (
    <section id='hero'>
      <div className="overlay"></div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="text-start fs-3 mt-5 pt-3 mx-5">
                <p id='hero_title'>
                  Services de soins pour
                  <br />
                  <span id='hero_title_orange'>vos animaux de compagnie</span>
                </p>
                <hr id='purple_line' />
                <p id="hero_text">
                  Réalisez un devis en ligne gratuitement
                  et obtenez une estimation personnalisée
                  des coûts pour assurer votre animal de compagnie.
                  Obtenez la tranquillité d'esprit que vous méritez en quelques clics
                </p>
                <button className="btn" id="hero_button">Devis Gratuit <i id='arrow-icon' className="fa-solid fa-chevron-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero