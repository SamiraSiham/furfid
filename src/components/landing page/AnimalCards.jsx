import React from 'react'
import '../../style/landing-page/animalCards.css';
import dogIcon from '../../icons/dog-icon.svg';
import catIcon from '../../icons/cat-icon.svg';
import nacIcon from '../../icons/nac-icon.svg';
const AnimalCards = () => {
    return (
        <section className="container-fluid ">
            <div className=" animalCardsContainer">
                <div className="">
                    <div className="card animalCards">
                        <object data={dogIcon}  type="" className='myicons'></object>
                        <div className="card-body">
                            <h5 className="card-title animalCardText text-center">Chien</h5>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="card animalCards">
                        <object data={catIcon} type="" className='myicons'></object>
                        <div className="card-body">
                            <h5 className="card-title animalCardText text-center">Chat</h5>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="card animalCards">
                        <object data={nacIcon} type="" className='myicons'></object>
                        <div className="card-body">
                            <h5 className="card-title animalCardText text-center">Nac</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnimalCards