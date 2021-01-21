import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import '../style/main.scss';
import { ThemeContext } from '../store/ContextAPI';

const Footer = () => {
    const { light } = useContext(ThemeContext)
    return (
        <footer className={light ? `${Footer} Footer2` : `Footer`}>
            <p>Zaprojektowane i stworzone przez
                <Link className={light ? `Signature Signature2` : `Signature`} to="https://github.com/Mhiho">
                    <span>:  </span>
                    <strong>Michał Pełka</strong>
                    <span> © </span> <span>{new Date().getFullYear()}</span>
                </Link>

            </p>
        </footer>
    )
}

export default Footer