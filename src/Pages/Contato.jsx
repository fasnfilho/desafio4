import contato from '../Images/contato.jpg'
import { useEffect, useState } from 'react';
import '../Styles/Contato.Module.css'
import Cardsedes from '../Components/Cardsedes'

function Contato(){
    const [sedes, setsedes] = useState([]);
    
        useEffect(() => {
            fetch('./sedes.json')
              .then((response) => response.json())
              .then((data) => setsedes(data))
              .catch((error) => console.error('Erro ao carregar os depoimentos:', error));
          }, []);

    const [formDados, setFormDados] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
        });
        
    const handleInputChange = (event) => {
    const { name, value } = event.target;
        setFormDados({
            ...formDados,
            [name]: value
        });
    };
        
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formDados); 
        };  

    return(
        <div className="mainContato">
            <div className="header1">
                <img src={contato} alt="Imagem de Contato" />
                <h2>Entre em Contato conosco!</h2>
            </div>
            <div className="contact-details">
            {sedes.map((sede) => (
                    <Cardsedes
                    key={sede.id}
                    photourl={sede.photourl}
                    local={sede.local}
                    address={sede.address}
                    phone={sede.phone}
                    />
                    ))}
            </div>
            <div className="forms">
                <h2>Fale Conosco</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" value={formDados.name} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" value={formDados.email} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Assunto:</label>
                        <input type="text" id="subject" name="subject" value={formDados.subject} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensagem:</label>
                        <textarea id="message" name="message" value={formDados.message} onChange={handleInputChange} />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}
export default Contato