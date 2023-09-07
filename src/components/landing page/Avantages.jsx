import React from 'react'
import '../../style/landing-page/avantages.css';
import dogIcon from '../../icons/dog-icon.svg';
import handIcon from '../../icons/hand-icon.svg';
import clientIcon from '../../icons/client-icon.svg';
const Avantages = () => {
  return (
    <section id="avantages_section">
        <h1 className='avntgs_title text-center'>
            Pourquoi <span style={{color : '#FF7718'}}>FURFID</span> ?
        </h1>
        <h4 className='avntgs_subtitle text-center'>
            Protégez votre meilleur ami, sans soucis ni tracas!
        </h4>
        <div className='avntgs_content container-fluid mx-auto'>
            <div className="avantages_card_container">
                <div className="">
                    <div className="avantages_card">
                        <object data={dogIcon}  type="" className='myicons_avantages'></object>
                        <div className="card-body">
                            <h5 className="card-title avantageText">Une couverture optimale</h5>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="avantages_card">
                        <object data={handIcon} type="" className='myicons_avantages'></object>
                        <div className="card-body">
                            <h5 className="card-title avantageText">Tarif unique</h5>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="avantages_card">
                        <object data={clientIcon} type="" className='myicons_avantages'></object>
                        <div className="card-body">
                            <h5 className="card-title avantageText">Espace client personnalisé</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Avantages