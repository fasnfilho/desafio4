import { Link } from 'react-router-dom'
import '../Styles/Navbar.Modules.css'
import { FaDragon } from "react-icons/fa6";

function Navbar(props){
    return(
        <nav id="mainNav">
            <ul>
                <li>
                    <Link to='/' className='dragao'>
                        <FaDragon />
                        <h1>Olá, {props.name}</h1>
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
        </nav>
    )
}
export default Navbar