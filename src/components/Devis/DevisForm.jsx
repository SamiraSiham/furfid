import React from 'react'
import '../../style/Devis/devis-form.css';
import Header from '../landing page/Header';
import Navbar from '../landing page/Navbar';
import SelectDate from '../tools/SelectDate';
import SelectVille from '../tools/SelectVille';
const DevisForm = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div id="devis_page_container">
                <div id="devis_form_container">
                    <h1 id='devis_form_title'>Le devis sera au nom de...</h1>
                    <form id="devis_form">
                        <div className="row">
                            <label className="col-sm-4 col-form-label mt-2 devis_form_labels">Civilite</label>
                            <div className="col-sm-8">
                                <div id="devis-gender-container">
                                    <div id="radio-tile-group">
                                        <div className="devis-gender-input-container">
                                            <input type="radio" name="devis_gender" id="mme" />
                                            <div className="radio-tile">
                                                <label style={{ textAlign: 'center' }} htmlFor="">Mme</label>
                                            </div>
                                        </div>

                                        <div className="devis-gender-input-container">
                                            <input type="radio" name="devis_gender" id="mr" />
                                            <div className="radio-tile">
                                                <label style={{ textAlign: 'center' }} htmlFor="">Mr</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <label className="col-sm-4 col-form-label mt-2 devis_form_labels">Nom et prenom</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="colFormLabel" placeholder="Nom" />
                            </div>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="colFormLabel" placeholder="Prenom" />
                            </div>
                        </div>

                        <div className="row">
                            <label className="col-sm-4 col-form-label mt-3 devis_form_labels">
                                Date de naissance
                            </label>
                            <div className="col-sm-8">
                                <SelectDate />
                            </div>
                        </div>

                        <div className="row">
                            <label className="col-sm-4 col-form-label mt-2 devis_form_labels">
                                Adresse
                            </label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" placeholder='Adresse' />
                            </div>
                        </div>

                        <div className="row">
                            <label className="col-sm-4 col-form-label mt-2 devis_form_labels">
                                Email
                            </label>
                            <div className="col-sm-8">
                                <input type="email" name="email" id="devis_email_input" className="form-control" placeholder='ex : furfid@email.com' />
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="" className="col-sm-4 col-form-label mt-2 devis_form_labels">
                                Ville
                            </label>
                            <SelectVille />
                        </div>

                        <div className="row">
                            <label htmlFor="" className="col-sm-4 col-form-label mt-2 devis_form_labels">
                                Numero de telephone
                            </label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" placeholder='+212 : ' />
                            </div>
                        </div>

                        <div className="row devis_form_btn_container">
                            <div className="col-sm-4">
                                <button className='btn devis_form_submit_btn' type="submit">
                                    Suivant <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DevisForm