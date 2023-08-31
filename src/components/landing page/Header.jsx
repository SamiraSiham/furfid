import React from 'react'
import '../../style/landing-page/header.css'

const Header = () => {
    return (
        <div id='header'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7" id='header-part1'>
                        <a href="/">learn more</a> about service furfid +212123456789 <a href="/" style={{ color: 'black' }}><i id='arrow-icon' className="fa-solid fa-chevron-right"></i></a>
                    </div>
                    <div className="d-flex col-5" id='header-part2'>
                        <a className="nav-link text-light mynavitems" aria-current="page" href="/">Feuille de soin</a>
                        <a className="nav-link text-light mynavitems" href="/">Recrutement</a>
                        <a className="nav-link text-light mynavitems" href="/">Aide & contact</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Header