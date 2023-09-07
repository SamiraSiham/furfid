import React from 'react'
import '../../style/landing-page/espaceVet.css';
import check from '../../icons/check-icon.svg';
import img from '../../images/vet.png'
const EspaceVet = () => {
  return (
    <section id="espace-vet">
      <h1 className='text-center pt-1 espace-vet-title'>
        <span id='espace-vet-title1'>Espace </span>
        <span id='espace-vet-title2'>Veterinaire</span>
      </h1>
      <div id="espace-vet-content">
        <h2 className='espace-vet-subtitle'>
          Vos services en ligne : simple, efficace et rapide
        </h2>
        {/* <div className="espace-vet-text container-fluid">
          <div className="espace-vet-phrase">
            <object width="30px" height="30px" className='check-icons' style={{marginRight : '10px'}} data={check}></object>
            <span className='espace-vet-spans'> Télécharger vos attestations</span>
          </div>
          <div className="espace-vet-phrase">
            <object width="30px" height="30px" className='check-icons' style={{marginRight : '10px'}} data={check}></object>
            <span className='espace-vet-spans'> Gérer vos contrats</span>
          </div>
          <div className="espace-vet-phrase">
            <object width="30px" height="30px" className='check-icons' style={{marginRight : '10px'}} data={check}></object>
            <span className='espace-vet-spans'> Déclarer et suivre votre sinistre</span>
          </div>
        </div> */}
        <div id="esp_vet_container">
          <div id="espace-vet-image">
            <img src={img} id='esp_vet_img' alt="" />
          </div>
          <div id="esp_vet_text">
            <div className="espace-vet-phrase">
              <object width="30px" height="30px" className='check-icons' style={{ marginRight: '10px' }} data={check}></object>
              <span className='espace-vet-spans'> Télécharger vos attestations</span>
            </div>
            <div className="espace-vet-phrase">
              <object width="30px" height="30px" className='check-icons' style={{ marginRight: '10px' }} data={check}></object>
              <span className='espace-vet-spans'> Gérer vos contrats</span>
            </div>
            <div className="espace-vet-phrase">
              <object width="30px" height="30px" className='check-icons' style={{ marginRight: '10px' }} data={check}></object>
              <span className='espace-vet-spans'> Déclarer et suivre votre sinistre</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EspaceVet