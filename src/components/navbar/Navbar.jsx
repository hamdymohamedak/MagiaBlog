import React, { useState } from 'react';
import './navbar.css';
import Logo from "../imgs/magia.png"
export default function Navbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [navTransform, setNavTransform] = useState("translate(-2000px, 0)");

    const handleNavbarToggle = () => {
        if (isNavbarOpen) {
            setNavTransform("translate(-2000px, 0)");
        } else {
            setNavTransform("translate(0, 0)");
        }
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <nav>
            <ul className='navbar'>
                <div className='navbar-brand'>
                    <div className='logo'><img className='magiaLogo' src={Logo} alt="Magia Logo" /></div>
                    <button onClick={handleNavbarToggle} className='btn_menu'>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
                <div className='navbar_parent'>
                    <li><i class="fa-solid fa-book"></i>books</li>
                    <li><i class="fa-solid fa-globe"></i>websites</li>
                    <li><i class="fa-solid fa-plus"></i>More</li>
                    <li><i class="fa-solid fa-house"></i>Home</li>
                </div>
                <div className='navbar_mobile' style={{ transform: navTransform }}>
                    <li className='logoNavMobile'> <img className='magiaLogoMobile' src={Logo} alt="Magia Logo" /> </li>
                    <li> <i class="fa-solid fa-book"></i> books</li>
                    <li> <i class="fa-solid fa-globe"></i> websites</li>
                    <li> <i class="fa-solid fa-plus"></i> More</li>
                    <li> <i class="fa-solid fa-house"></i> Home</li>
                </div>
            </ul>
        </nav>
    );
}
