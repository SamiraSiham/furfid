import React from 'react'
import Header from './landing page/Header'
import Navbar from './landing page/Navbar'
import '../style/Antecedants/antecedants-medicales.css'
import CarteChien from './Cartes/CarteChien'
// import SelectDate from './tools/SelectDate'
function AntecedantesMedicales() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="antecedants-container">
        <div id="antecedants_container">
          <div id="carte_chien_container">
            <div className="row mb-3">
              <CarteChien />
            </div>
            <div className="row">
              <h2 id="antecedant_question">
                A-t-il des antecedants medicaux ?
              </h2>
            </div>
            <form>
              <div className="row">
                <div id="radio-tile-antecedant-group">
                  <div className="dog-antecedants-input-container">
                    <input type="radio" name="dog_antecedant" id="no_medical_history" />
                    <div className="radio-tile">
                      <label style={{ textAlign: 'center' }} htmlFor="">Non, aucun</label>
                    </div>
                  </div>

                  <div className="dog-antecedants-input-container">
                    <input type="radio" name="dog_antecedant" id="chronic_illness" />
                    <div className="radio-tile">
                      <label style={{ textAlign: 'center' }} htmlFor="">Oui, une maladie chronique</label>
                    </div>
                  </div>

                  <div className="dog-antecedants-input-container">
                    <input type="radio" name="dog_antecedant" id="hereditary_illness" />
                    <div className="radio-tile">
                      <label style={{ textAlign: 'center' }} htmlFor="">Oui, une maladie héréditaire ou congénitale</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row ant_sub_btn">
                <button className='btn antecedent_btn_submit' type="submit">
                  Suivant <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AntecedantesMedicales