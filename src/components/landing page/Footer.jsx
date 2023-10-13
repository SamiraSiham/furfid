import React from 'react'
import '../../style/landing-page/footer.css';
import facebookIcon from '../../icons/footer/fb.svg';
import instaIcon from '../../icons/footer/Instagram.svg';
import twitterIcon from '../../icons/footer/twitter.svg';
import youtubeIcon from '../../icons/footer/youtube.svg';
import phone from '../../icons/contact/smartphone.svg';
import email from '../../icons/contact/email.svg';
const Footer = () => {
  return (
    <section id="footer">
        <div id="footer_section_1">
          <h4 id='footer_brand_name'>FURFID</h4>
          <ul>
            <li><a href="/">à propos de FURFID</a></li>
            <li><a href="/">Conditions générales</a></li>
            <li><a href="/">Politique de confidentialité</a></li>
          </ul>
        </div>
        <div id="footer_section_2">
          <span id="section_2_title">Nos offres</span>
          <ul>
            <li>
              <a href="/">Assurance animaux</a>
              </li>
            <li><a href="/">Assurance chien</a></li>
            <li><a href="/">Assurance chat</a></li>
            <li><a href="/">Comment ça marche</a></li>
          </ul>
        </div>
        <div id="footer_section_3">
          <h5 id='section_3_title'>Suivez-nous</h5>
          <div id="footer_icon_container">
            <img src={facebookIcon} width='30px' height='30px' alt="" />
            <img src={twitterIcon} width='30px' height='30px' alt="" />
            <img src={youtubeIcon} width='30px' height='30px' alt="" />
            <img src={instaIcon} width='30px' height='30px' alt="" />
          </div>
          <div id="footer_hr_container">
            <hr id="footer_hr" />
          </div>
          <h5 id='footer_contact_title'>Nous contacter</h5>
          <div id="footer_contact_container">
            <div id="footer_phone_info">
              <img src={phone} width='20px' height='20px' alt="" />
              <span>00 00 00 00 00</span>
            </div>
            <div id="footer_email_info">
              <img src={email} width='20px' height='20px' alt="" />
              <span>FurfidAssurance@gmail.com</span>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Footer