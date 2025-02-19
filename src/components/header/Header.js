import { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/logo/logoLojao.jpeg";



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
                    📱 (85) 98739-2707
                </a>
            </div>

            {/* Área do menu e da logo */}
            <div className="menu-bar">
                <img src={logo} alt="Logo" className="logo" />
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
