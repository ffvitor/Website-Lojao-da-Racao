import { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/logo/logoLojao.png";
import { FaWhatsapp } from "react-icons/fa";



export default function Header() {
    const today = new Date().toLocaleDateString("pt-BR");

    

    return (
        <header>
            <div className="top-bar">
                <span className="date">{today}</span>
                <a
                    href="https://wa.me/5585987392707"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp"
                >
                     <FaWhatsapp size={20} color="#25D366" /> (85) 98739-2707
                </a>
            </div>

            {/* Área do menu e da logo */}
            <div className="menu-bar">
                <img src={logo} alt="Logo da Empresa" className="logo" />
                <nav className="menu">
                    <ul>
                        <li><a href="home.html">HOME</a></li>
                        <li><a href="about.html">ABOUT</a></li>
                        <li><a href="service.html">SERVICE</a></li>
                        <li><a href="produtos.html">PRODUTOS</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
}
