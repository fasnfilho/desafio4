function Carddepoimentos({ author, content, photoUrl }) {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <img src={photoUrl} alt={`Foto de ${author}`} className="client-photo" />   
        <span>- {author}</span>
      </div>
      <p className="testemunho">{content}</p>
    </div>
  );
}

export default Carddepoimentos;
