import fwdLogo from '../assets/images/Logos/FWD_LogoMark_white.png'
import teamReactLogo from '../assets/images/Logos/Team_React_Logo.png'

import '../App.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg h-50 ps-5 pe-5 py-4">
            <div className="container-fluid">
                <a href="" className="">
                    <img src={fwdLogo} className="d-inline-block" id="fwdLogo"/>
                </a>
                <a href="" className="ms-3 me-auto">
                    <img src={teamReactLogo} className="d-inline-block" id="teamReactLogo"/>
                </a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item fs-1 mx-3">
                        <a className="nav-link">Join</a>
                    </li>
                    <li className="nav-item fs-1 mx-3">
                        <a className="nav-link">About</a>
                    </li>
                    <li className="nav-item fs-1 mx-3">
                        <a className="nav-link">Team</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
} 