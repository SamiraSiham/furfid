import React from 'react'
import '../../style/landing-page/about.css';
import cat_pic from '../../images/cat pic.png'
const About = () => {
  return (
    <section className='about_section'>
        <div className="container-fluid">
            <div className="row">
                {/* content */}
                <div className="col-6 pt-5">
                    <h1 className='text-left'>
                        <span id="about_title_purple">Protégez leur bien-être,</span> <br />
                        <span id="about_title_orange">assurez leur santé.</span>
                    </h1>
                    <br />
                    <p className='about_section_content'>
                    <span className='about_brand_name'>FURFID</span>, une plateforme d'assurance pour animaux domestiques, 
                    se consacre à fournir une protection complète et adaptée aux besoins de nos compagnons à quatre pattes. 
                    En reconnaissant leur statut de membres de la famille, nous offrons une sécurité financière et un accès 
                    facile aux soins vétérinaires. Notre interface conviviale permet aux propriétaires de souscrire, 
                    gérer leur contrat et soumettre des réclamations aisément. Avec un engagement envers le bien-être animal, 
                    <span className='about_brand_name'> FURFID </span> simplifie le processus pour une tranquillité d'esprit totale.
                    </p>
                </div>
                {/* image */}
                <div className="col-6">
                    <img src={cat_pic} className="about_section_img" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About