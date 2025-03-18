import "./shelf.css";
import { BiMessageDetail } from "react-icons/bi"; // Ícone para Missão
import { AiOutlineHeart } from "react-icons/ai"; // Ícone para Visão
import { FaRegBookmark } from "react-icons/fa"; // Ícone para Objetivo

export default function Shelf() {

    return(
        <>
    {/* Seção "Sobre Nós" */}
    <div className="sobre-nos">
    <h1 className="sobre-nos-title">SOBRE NÓS</h1>
    <div className="sobre-nos-content">
        <div className="sobre-nos-item">
            <h3><BiMessageDetail size={25} color="white" /> Missão</h3>
            <p>Executar com excelência a arte da venda e fazer a distribuição de nossos produtos com rapidez e segurança.</p>
        </div>
        <div className="sobre-nos-item">
            <h3><AiOutlineHeart size={25} color="white" /> Visão</h3>
            <p>Ser referência no mercado de distribuição em termos de excelência nos serviços e qualidade de produtos.</p>
        </div>
        <div className="sobre-nos-item">
            <h3><FaRegBookmark size={25} color="white" /> Objetivo</h3>
            <p>A empresa também se preocupa com os animais, apoiando feiras de adoção e eventos sociais.</p>
        </div>
    </div>
</div>
</>
    );
}