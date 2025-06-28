import { Link } from 'react-router-dom';
import cameraLogo from '../assets/cameraLogo.png'
import '../styles/Header.css'
import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../App/store'
import { logoutUser } from '../Features/authSlice';

export const Header = () => {
    const [active, setActive] = useState(false);
    const user = useSelector((state: RootState) => state.auth.user);
      const dispatch = useDispatch<AppDispatch>();
    const handleNavActive = () => {
        setActive(!active)
    }
    const handleLogout = () => {
        dispatch(logoutUser());
    }
    const Icon = FaHamburger as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
    const CloseIcon = IoClose as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
    return (
        <header>
            <Link to='/'>
                <img src={cameraLogo} alt='Camera logo'/>
                <div>Gotcha.</div>
            </Link>
            <nav className={active ? 'active' : ''}>
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Contacts</Link>
                {user ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to='/login'>Login</Link>
                )}
                <Link to='/register'>Get Started</Link>
            </nav>
            { active ? (
                <button className='close' onClick={handleNavActive}>
                    <CloseIcon />
                </button>
            ) : (
                <button onClick={handleNavActive}>
                    <Icon className='hamburger' />
                </button>
            )}
        </header>
    );
};