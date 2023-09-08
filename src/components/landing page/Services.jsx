import React from 'react'
import '../../style/landing-page/services.css';
import doctorIcon from '../../icons/services/doctor.svg';
import emergencyIcon from '../../icons/services/emergency.svg';
import pawIcon from '../../icons/services/paw.svg';
import operationIcon from '../../icons/services/surgery-room.svg';
import sterilisationIcon from '../../icons/services/surgical.svg';
import vaccineIcon from '../../icons/services/vaccine_icon.svg';
// import service1 from '../../images/services/service-1.jpg';
// import service2 from '../../images/services/service-2.jpg';
// import service3 from '../../images/services/service-3.jpg';
// import service4 from '../../images/services/service-4.jpg';
// import service5 from '../../images/services/service-5.jpg';
// import service6 from '../../images/services/service-6.jpg';
const Services = () => {
    return (
        <section id="services_section">
            <h1 id="services_title">
                <span id="purple">Nos</span>
                <span id="orange"> Services</span>
            </h1>
            <div id="services_wrapper" className='container-fluid'>
                <div className='services_icon_container'>
                    <div className="services_icon_wrapper">
                        <img src={pawIcon} width='90px' height='90px' alt="" />
                    </div>
                    <div className="services_text">Consultation Veterinaire</div>
                </div>

                <div className='services_icon_container'>
                    <div className="services_icon_wrapper">
                        <img src={doctorIcon} width='80px' height='80px' alt="" />
                    </div>
                    <div className="services_text">Conseil médicale</div>
                </div>

                <div className='services_icon_container'>
                    <div className="services_icon_wrapper">
                        <img src={emergencyIcon} width='70px' height='70px' alt="" />
                    </div>
                    <div className="services_text">Urgence médicale</div>
                </div>

                <div className="services_icon_container">
                    <div className="services_icon_wrapper">
                        <img src={operationIcon} width='70px' height='70px' alt="" />
                    </div>
                    <div className="services_text">Opération</div>
                </div>

                <div className="services_icon_container">
                    <div className="services_icon_wrapper">
                        <img src={sterilisationIcon} width='70px' height='70px' alt="" />
                    </div>
                    <div className="services_text">Stérilisation</div>
                </div>

                <div className="services_icon_container">
                    <div className="services_icon_wrapper">
                        <img src={vaccineIcon} width='70px' height='70px' alt="" />
                    </div>
                    <div className="services_text">Vaccination</div>
                </div>

            </div>
        </section>
    )
}

export default Services