import React from 'react'
import '../../style/landing-page/header.css'

const Header = () => {
    return (
        <div id='header' className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <div className="" id='header-part1'>
                        <span className=''>
                            <a href="/">learn more</a> about service furfid +212123456789 
                            <a href="/" style={{ color: 'black' }}><i id='arrow-icon' className="fa-solid fa-chevron-right"></i></a>
                        </span>
                        <a className="mynavitems text-light" aria-current="page" href="/">Feuille de soin</a>
                        <a className="mynavitems text-light" href="/">Recrutement</a>
                        <a className="mynavitems text-light" href="/">Aide & contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header