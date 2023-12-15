function Cardsedes({ local, address, phone, photourl }) {
    return (
        <div className="sede">
            <div className="sede-content">
                <img src={photourl} alt={'Foto da sede'} className="sede-photo" />   
                <h1>{local}</h1>
                <h2>{address}</h2>
                <p>{phone}</p>
            </div>
        </div>
    );
  }
  
  export default Cardsedes;
  