import React from "react";
// import Navbar from "./Navbar";
import Navbar from './landing page/Navbar'
import Header from "./landing page/Header";
import "../style/Auth/Auth.css";
function Auth() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="auth_section">
        <div className="AuthContainer">
          <div className="AuthForm">
            <form>
              <h1>FURFID</h1>
              <h2>Authentification</h2>
              <h4>Accéder a Furfid en toute securité</h4>
              <input type="email" name="mail" id="mail" placeholder="Adresse email" />
              <input type="password" name="password" id="password" placeholder="Mot de passe" />
              <p id="PwForgoat">Mot de passe oublié ? <a href="/">Réinitialiser</a></p>
              <a href="/" id="connect-btn"><input type="submit" value="Se Connecter" id="Connect" /></a>
              <div id="line"></div>
              <p id="Register">Pas encore inscrit ? <a href="/register">Cliquez ici pour créer votre compte</a></p>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Auth;
