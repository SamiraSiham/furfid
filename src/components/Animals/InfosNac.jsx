import React from 'react'
import Header from '../landing page/Header'
import Navbar from '../landing page/Navbar'
import SelectDate from '../tools/SelectDate'
import CarteNac from '../Cartes/CarteNac'
import '../../style/Animals/infos-nac.css'
const InfosNac = () => {
  return (
    <>
            <Header />
            <Navbar />
            <div id="infos_nac_container">
                <div id="infos_nac_form_container">
                    <div id="carte_nac_container">
                        <div className="row mb-3">
                            <CarteNac />
                        </div>
                        <div className="row">
                            <div id="nac_gender_cntr">
                                <div id="radio-tile-group">
                                    <div className="nac-gender-input-container">
                                        <input type="radio" name="nac_gender" id="Male" />
                                        <div className="radio-tile">
                                            <label style={{ textAlign: 'center' }} htmlFor="">Male</label>
                                        </div>
                                    </div>

                                    <div className="nac-gender-input-container">
                                        <input type="radio" name="nac_gender" id="Femelle" />
                                        <div className="radio-tile">
                                            <label style={{ textAlign: 'center' }} htmlFor="">Femelle</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <input type="text" name='nac-name' className="form-control" id="colFormLabel" placeholder="Son Nom" />
                        </div>

                        <div className="row">
                            <SelectDate />
                        </div>

                        <div className="row">
                            <input type="text" name='nac-race' className="form-control" id="colFormLabel" placeholder="Quelle est sa race ?" />
                        </div>

                        <div className="row">
                            <a href="/" id='idk_nac_race'>Je ne connais pas la race de mon animal</a>
                        </div>

                        <div className="row mt-4 nac_form_btn_container">
                                <button className='btn nac_form_submit_btn' type="submit">
                                    Suivant <i className="fa-solid fa-chevron-right"></i>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default InfosNac