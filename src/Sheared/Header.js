import React from 'react';
import { Link } from 'react-router-dom';
import mistlogo from '../asset/img/Military_Institute_of_Science_and_Technology_Monogram.svg.png'

const Header = () => {
    return (
        <div className="navbar bg-blue-300 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/testsrates">Test Rates</Link></li>
                        <li><Link to="/experts">Experst</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>

                    </ul>
                </div>
                {/* <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link> */}
                <div className='flex justify-center items-center'>
                    <div className="w-16 rounded-full m-2 p-2">
                        <img src={mistlogo} alt="" />
                    </div>
                    <div >
                        <h1 className='text-xl'>CATS-MIST (PME)</h1>
                        <h3>CENTRE FOR ADVISORY & TESTING SERVICES DEPT OF PETROLIUM & MINING ENGINEERING, MIST</h3>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/testsrates">Test Rates</Link></li>
                    <li><Link to="/experts">Experst</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;