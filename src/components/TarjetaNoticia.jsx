import './General.css';

function TarjetaNoticia({ info }) {
  return (
    <div className="tarjeta-noticia">
      <span className="tarjeta-badge">Autor #{info.userId}</span>
      <h2 className="tarjeta-titulo">{info.title}</h2>
      <p className="tarjeta-body">{info.body}</p>
      <button className="tarjeta-boton">Leer más</button>
    </div>
  );
}

export default TarjetaNoticia;