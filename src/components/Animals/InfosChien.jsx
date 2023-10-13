import React from 'react'
import Header from '../landing page/Header'
import Navbar from '../landing page/Navbar'
import '../../style/Animals/infos-chien.css'
import CarteChien from '../Cartes/CarteChien'
import SelectDate from '../tools/SelectDate'
const InfosChien = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div id="infos_chien_container">
        <div id="infos_chien_form_container">
          <div id="carte_chien_container">
            <div className="row mb-3">
              <CarteChien />
            </div>
            <div className="row">
              <div id="dog_gender_cntr">
                <div id="radio-tile-group">
                  <div className="dog-gender-input-container">
                    <input type="radio" name="dog_gender" id="Male" />
                    <div className="radio-tile">
                      <label style={{ textAlign: 'center' }} htmlFor="">Male</label>
                    </div>
                  </div>

                  <div className="dog-gender-input-container">
                    <input type="radio" name="dog_gender" id="Femelle" />
                    <div className="radio-tile">
                      <label style={{ textAlign: 'center' }} htmlFor="">Femelle</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <input type="text" name='dog-name' className="form-control" id="colFormLabel" placeholder="Son Nom" />
            </div>

            <div className="row">
              <SelectDate />
            </div>

            <div className="row">
              <input type="text" name='dog-race' className="form-control" id="colFormLabel" placeholder="Quelle est sa race ?" />
            </div>

            <div className="row">
              <a href="/" id='idk_dog_race'>Je ne connais pas la race de mon animal</a>
            </div>

            <div className="row mt-4 dog_form_btn_container">
              <button className='btn dog_form_submit_btn' type="submit">
                Suivant <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfosChien