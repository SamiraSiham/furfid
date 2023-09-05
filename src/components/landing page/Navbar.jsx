import React from 'react';
import logo from '../../images/logoNO1_no-bg_cropped-removebg.png';
import '../../style/landing-page/navbar.css';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" id='logo-navbar' />
            <span id='brand_name'>FURFID</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 me-5">
              <li className="nav-item">
                <a className="nav-link my-nav-link" aria-current="page" href="#">Accueil</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link my-nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nos Services <i className="fa-solid fa-caret-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">consultation vétérinaire</a></li>
                  <li><a className="dropdown-item" href="#">vaccination</a></li>
                  <li><a className="dropdown-item" href="#">opération</a></li>
                  <li><a className="dropdown-item" href="#">stérilisation</a></li>
                  <li><a className="dropdown-item" href="#">urgences médicales</a></li>
                  <li><a className="dropdown-item" href="#">conseil médical</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link my-nav-link" href="#">Partenaires</a>
              </li>
              <li className="nav-item">
                <a className="nav-link my-nav-link" href="#">Contact</a>
              </li>
            </ul>
            <div className="nav-item">
              <div className='nav-contact-info'>
                <div className='me-5'>
                  <i className="fa-solid fa-phone" style={{ color: '#f59f06' }}></i> 06 00 00 00 00
                </div>
                <div className='me-5'>
                  <i className="fa-regular fa-envelope" style={{ color: '#f59f06' }}></i> FurfidAssurance@gmail.com
                </div>
              </div>
            </div>
            <div className="nav-item d-flex flex-row align-items-center">
              <button className="btn" id='adherent_btn'>Espace Adhérent</button>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav id='navigation-bar' className="navbar navbar-expand-lg">
        <div className="container row">
          <div className='navbar-brand col-lg-2'>
            <img src={logo} alt="" id='logo-navbar' />
            <span id='brand_name'>FURFID</span>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse col-lg-5 p-0 d-flex flex-row" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-lg-0 align-items-center">
              <li class="nav-item mx-1">
                <a class="nav-link my-nav-link" aria-current="page" href="#">Accueil</a>
              </li>
              <li class="nav-item dropdown mx-1">
                <a class="nav-link my-nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nos Services <i class="fa-solid fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">consultation vétérinaire</a></li>
                  <li><a class="dropdown-item" href="#">vaccination</a></li>
                  <li><a class="dropdown-item" href="#">opération</a></li>
                  <li><a class="dropdown-item" href="#">stérilisation</a></li>
                  <li><a class="dropdown-item" href="#">urgences médicales</a></li>
                  <li><a class="dropdown-item" href="#">conseil médical</a></li>
                </ul>
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link my-nav-link" href="#">Partenaires</a>
              </li>
              <li class="nav-item mx-1">
                <a class="nav-link my-nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 p-0">
            <div className='d-flex flex-column mb-3'>
              <div id="nav_phone" className='float-start nav-contact-info'><i class="fa-solid fa-phone" style={{ color: '#f59f06' }}></i> 06 00 00 00 00</div>
              <div id='nav_email' className='float-start nav-contact-info'><i class="fa-regular fa-envelope" style={{ color: '#f59f06' }}></i> FurfidAssurance@gmail.com</div>
            </div>
          </div>
          <div className="col-lg-2">
            <button className="btn float-right" id='adherent_btn'>Espace Adhérent</button>
          </div>
        </div>
      </nav> */}
    </div>
  )
}

export default Navbar