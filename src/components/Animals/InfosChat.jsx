import React from 'react'
import Header from '../landing page/Header'
import Navbar from '../landing page/Navbar'
import '../../style/Animals/infos-chat.css'
import CarteChat from '../Cartes/CarteChat';
import SelectDate from '../tools/SelectDate';
const InfosChat = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div id="infos_chat_container">
                <div id="infos_chat_form_container">
                    <div id="carte_chat_container">
                        <div className="row mb-3">
                            <CarteChat />
                        </div>
                        <div className="row">
                            <div id="cat_gender_cntr">
                                <div id="radio-tile-group">
                                    <div className="cat-gender-input-container">
                                        <input type="radio" name="cat_gender" id="Male" />
                                        <div className="radio-tile">
                                            <label style={{ textAlign: 'center' }} htmlFor="">Male</label>
                                        </div>
                                    </div>

                                    <div className="cat-gender-input-container">
                                        <input type="radio" name="cat_gender" id="Femelle" />
                                        <div className="radio-tile">
                                            <label style={{ textAlign: 'center' }} htmlFor="">Femelle</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <input type="text" name='cat-name' className="form-control" id="colFormLabel" placeholder="Son Nom" />
                        </div>

                        <div className="row">
                            <SelectDate />
                        </div>

                        <div className="row">
                            <input type="text" name='cat-race' className="form-control" id="colFormLabel" placeholder="Quelle est sa race ?" />
                        </div>

                        <div className="row">
                            <a href="/" id='idk_cat_race'>Je ne connais pas la race de mon animal</a>
                        </div>

                        <div className="row mt-4 cat_form_btn_container">
                                <button className='btn cat_form_submit_btn' type="submit">
                                    Suivant <i className="fa-solid fa-chevron-right"></i>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfosChat