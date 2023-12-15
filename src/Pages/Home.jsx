import { useState, useEffect, useRef } from 'react'
import '../Styles/Home.Module.css'
import { motion } from 'framer-motion'
import Cardhome from '../Components/Cardhome'
import Carddepoimentos from '../Components/Carddepoimentos'

import image1 from '../Images/Cavaleiros-do-zodíaco.jpg'
import image2 from '../Images/Demon-slayer.jpg'
import image3 from '../Images/Naruto.jpg'
import image4 from '../Images/dragon-ball-z.jpg'
import image5 from'../Images/one-piece.jpg'
import fundo from '../Images/fundo.jpg'

const images = [image1, image2, image3, image4, image5]

function Home(){
    const numbers = [
        { title: 'Total de Clientes', value: 200000 },
        { title: 'Total de Funcionários', value: 1300 },
        { title: 'Faturamento Anual', value: '$1.5M' },
        { title: 'Horas assistidas', value:'10.2M Horas'}
    ];

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('./Depoimentos.json')
          .then((response) => response.json())
          .then((data) => setTestimonials(data))
          .catch((error) => console.error('Erro ao carregar os depoimentos:', error));
      }, []);
    

    const slider = useRef();
    const[width, setWidth] = useState(0)

    useEffect(() => {
        console.log(slider.current?.scrollWidth, slider.current?.offsetWidth)
        setWidth(slider.current?.scrollWidth - slider.current?.offsetWidth)
    }, [])
    return(
        <div className='Home'>
            <div className='titulo'>
                <h1>PAI D'ÉGUANIMES</h1>
                <h2>Seja bem-vindo ao seu site favorito de Animes!</h2>
                <p>Aqui você encontrará desde animes clássicos até os mais atuais.</p>
                <p>Da ação ao romance, do drama à comédia.</p>
            </div>
            <motion.div ref={slider} className='slider' whileTap={{cursor: "grabbing"}}>
                <motion.div 
                className='inner' 
                drag="x"
                dragConstraints={{right: 0, left: -width}}
                >
                    {images.map(image => (
                        <motion.div className='item' key={image}>
                            <img src={image} alt='Texto alt'/>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <section className="company-numbers">
                <h2>Números da Empresa</h2>
                <div className="numbers">
                    {numbers.map((number, index) => (
                    <Cardhome
                    key={index}
                    title={number.title}
                    value={number.value}
                    />
                    ))}
                </div>
            </section>
            <section className="testimonials">
                <h2>Depoimentos</h2>
                <div className="testimonial-list">
                    {testimonials.map((testimonial) => (
                    <Carddepoimentos
                    key={testimonial.id}
                    author={testimonial.author}
                    content={testimonial.content}
                    photoUrl={testimonial.photoUrl}
                    />
                    ))}
                </div>
            </section>
        </div>
    )
}
export default Home