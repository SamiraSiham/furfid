import React from 'react'
import '../style/Auth/register.css';
import Navbar from './landing page/Navbar';
import Header from './landing page/Header';
const Register = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="register_section">
                <div className="RegisterContainer">
                    <div className="RegisterForm">
                        <form>
                            <h1>FURFID</h1>
                            <h2>Créez votre compte</h2>
                            {/* <input type="email" name="mail" id="mail" placeholder="Adresse email" />
                            <input type="password" name="password" id="password" placeholder="Mot de passe" />
                            <p id="PwForgoat">Mot de passe oublié ? <a href="/">Réinitialiser</a></p>
                            <a href="/" id="connect-btn"><input type="submit" value="Se Connecter" id="Connect" /></a>
                            <div id="line"></div>
                            <p id="Register">Pas encore inscrit ? <a href="/register">Cliquez ici pour créer votre compte</a></p> */}
                            <div className="row px-4">
                                <div className="col-sm-4 mt-2 register-labels" >
                                    <label className="form-label">Nom</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className='form-control' name='register_lname' placeholder='Nom' />
                                </div>
                            </div>
                            <div className="row px-4">
                                <div className="col-sm-4 mt-2 register-labels" >
                                    <label className="form-label">Prenom</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" className='form-control' name='register_fname' placeholder='Prenom' />
                                </div>
                            </div>
                            <div className="row px-4">
                                <div className="col-sm-4 mt-2 register-labels" >
                                    <label className="form-label">Email</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="email" className='form-control' name='register_email' placeholder='Email ex: furfid123@gmail.com' />
                                </div>
                            </div>
                            <div className="row px-4">
                                <div className="col-sm-4 mt-2 register-labels" >
                                    <label className="form-label">Mot de passe</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="password" className='form-control' name='register_pwd' placeholder='Password' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register