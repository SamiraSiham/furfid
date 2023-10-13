import React from 'react'
import '../../style/Partenariat/partenariat.css';
import Header from '../landing page/Header';
import Navbar from '../landing page/Navbar';
const Partenariat = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <div className="partenariat_container">
            <div className="part_cntr">
                <h2>Partenariat</h2>
                <br />
                <h3 className="partenariat_qst">
                  Voulez-vous rejoindre l'aventure FURFID ?
                </h3>
                <br />
                <h4 className='partenariat_sub_qst'>
                  Contactez-nous!
                </h4>
                <div className="partenariat_email_container">
                  <a href="/">Partenariats@Furfid.com</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Partenariat