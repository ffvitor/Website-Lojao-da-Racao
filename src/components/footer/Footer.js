import { FaFacebookF, FaInstagram, FaWhatsapp, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SiPix } from "react-icons/si"; // Ícones da Elo e Pix
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Atendimento */}
        <div className="footer-section">
          <h3>Atendimento</h3>
          <p><strong>Atendimento WhatsApp:</strong><br />85-98739-2707</p>
          <p><strong>E-mail:</strong><br /><a href="mailto:lojaodaracao@outlook.com">lojaodaracao@outlook.com</a></p>
        </div>

        {/* Sobre nós */}
        <div className="footer-section">
          <h3>Sobre nós</h3>
          <ul>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Fale conosco</a></li>
            <li><a href="#">Nossas Lojas</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
          </ul>
        </div>

        {/* Ajuda e Suporte */}
        <div className="footer-section">
          <h3>Ajuda e suporte</h3>
          <ul>
            <li><a href="#">Política de Troca</a></li>
            <li><a href="#">Política de Entrega</a></li>
            <li><a href="#">Segurança e Privacidade</a></li>
          </ul>
        </div>

        {/* Pagamento */}
        <div className="footer-section">
          <h3>Pagamento</h3>
          <div className="payment-icons">
            <FaCcVisa className="payment-icon visa" />
            <FaCcMastercard className="payment-icon mastercard" />
            <SiPix className="payment-icon pix" />
          </div>
        </div>

        {/* Redes sociais */}
        <div className="footer-section">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="footer-bottom">
        <p>LOJAO DA RAÇÃO COMERCIO E REPRESENTAÇÕES DE PROD AVÍCOLAS LTDA BR 222, KM 06 Nº 8290 TABAPUAZINHO CAUCAIA CE</p>
        <p>©2024 TODOS OS DIREITOS RESERVADOS.</p>
      </div>

      {/* Botão WhatsApp e Voltar ao Topo */}
      <a href="https://wa.me/5585987392707" className="whatsapp-button">
        <FaWhatsapp />
      </a>
      <a href="#top" className="top-button">TOPO</a>
    </footer>
  );
}
