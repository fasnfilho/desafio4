import '../Styles/Footer.Module.css'
import { FaDragon } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer(){
    return(
        <div className="mainFooter">
            <div className='esq'>
                <FaDragon />
                <h1>PAI D'ÉGUANIMES</h1>
            </div>
            <div className='meio'>
                <ul>
                    <li>
                        <Link to='/' className='dragao'>
                            <h1>Home</h1>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sobre">
                            <h1>Sobre nós</h1>
                        </Link>
                    </li>
                    <li>
                        <Link to='/contato'>
                            <h1>Contatos</h1>
                        </Link>
                    </li>
                    <li>
                        <Link to='/quiz'>
                            <h1>Quiz</h1>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='dir'>
                <h1>Nossas Redes Sociais:</h1>
                <FaFacebook />
                <AiFillInstagram />
                <IoLogoWhatsapp />

            </div>
        </div>

    )
}
export default Footer