import React from 'react';
import logo from '../../images/logoNO1_no-bg_cropped-removebg.png';
import '../../style/landing-page/navbar.css';
const Navbar = () => {
  return (
    <div className=''>
      <nav id='navigation-bar' className="navbar navbar-expand-lg">
        <div className="container row">
          <div className='navbar-brand col-lg-2'>
            <img src={logo} alt="" id='logo-navbar' />
            <span id='brand_name'>FURFID</span>
          </div>
          <div className="col-lg-5 p-0 d-flex flex-row">
            <ul class="navbar-nav mb-lg-0 align-items-center">
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
              <div id="nav_phone" className='float-start nav-contact-info'><i class="fa-solid fa-phone" style={{color: '#f59f06'}}></i> 06 00 00 00 00</div>
              <div id='nav_email' className='float-start nav-contact-info'><i class="fa-regular fa-envelope" style={{color: '#f59f06'}}></i> FurfidAssurance@gmail.com</div>
            </div>
          </div>
          <div className="col-lg-2">
            <button className="btn float-right" id='adherent_btn'>Espace Adhérent</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar