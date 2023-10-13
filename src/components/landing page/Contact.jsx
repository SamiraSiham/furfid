import React from 'react'
import '../../style/landing-page/contact.css';
import contactImg from '../../images/contact-img.png'
import emailIcon from '../../icons/contact/email.svg';
import phoneIcon from '../../icons/contact/smartphone.svg';
const Contact = () => {
    return (
        <section id="contact">
            <div id="contact_content">
                <h1 id='contact_title'>Nous sommes toujours prêts à vous aider.</h1>
                <h5 id='contact_subtitle'>Notre équipe de service client est disponible 24/7/365</h5>
                <div id="contact_info">
                    <div id="email_info">
                        <img src={emailIcon} id='emailIcon' width='30px' height='30px' alt="" />
                        <span>+2120123456789</span>
                    </div>
                    <div id="phone_info">
                        <img src={phoneIcon} id='phoneIcon' width='30px' height='30px' alt="" />
                        <span>support.furfid@gmail.com</span>
                    </div>
                </div>
            </div>
            <div id="contact_img">
                <img src={contactImg} width='350px' height='350px' alt="" />
            </div>
        </section>
    )
}

export default Contact