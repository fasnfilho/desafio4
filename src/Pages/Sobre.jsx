import '../Styles/Sobre.Module.css'
import header from '../Images/header.jpg'
import { useState, useEffect, useRef } from 'react'
import Cardservicos from '../Components/Cardservicos';


function Sobre(){
    const [servs, setServs] = useState([]);
    
        useEffect(() => {
            fetch('./Servicos.json')
              .then((response) => response.json())
              .then((data) => setServs(data))
              .catch((error) => console.error('Erro ao carregar os depoimentos:', error));
          }, []);
    return(
        <div className="about-us">
            <div className='header'>
                <div className='txtheader'>
                    <h2>Venha conhecer um pouco sobre nós</h2>
                    <p>Confere abaixo um pouquinho da nossa história e dos nossos serviços.</p>
                </div>
                <img src={header} alt="Descrição da imagem" />
            </div>
            <div className='txtaboutus'>
                <h1>Sobre nós</h1>
                <p>Somos uma empresa que trabalha no ramo do entretenimento há muitos anos, principalmente na área da cultura nipônica. Desde muitos anos fazemos streaming de animes, vendemos produtos e, agora, viemos com algo para agradar ainda mais nossos clientes, O QUIZ!! Espero que todos se divirtam com nossa variedade e cada vez mais consigamos espalhar essa cultura.</p>
            </div>
            <section className="servicos">
                <h2>Nossos serviços</h2>
                <div className="servicos-list">
                    {servs.map((serv) => (
                    <Cardservicos
                    key={serv.id}
                    titulo={serv.titulo}
                    texto={serv.texto}
                    />
                    ))}
                </div>
            </section>
        </div>
    )
}
export default Sobre