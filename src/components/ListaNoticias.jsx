import { useState, useEffect } from 'react';
import TarjetaNoticia from './TarjetaNoticia';
import './General.css';

function ListaNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setNoticias(data.slice(0, 12)); // Limitamos a 12 noticias por UX
        setCargando(false);
      })
      .catch((err) => {
        console.error('Error fetching:', err);
        setError('No se pudieron cargar las noticias.');
        setCargando(false);
      });
  }, []); // [] = se ejecuta solo una vez, al montar el componente

  if (cargando) {
    return <p className="estado-carga">Cargando noticias...</p>;
  }

  if (error) {
    return <p className="estado-error">{error}</p>;
  }

  return (
    <div className="grid-noticias">
      {noticias.map((noticia) => (
        <TarjetaNoticia key={noticia.id} info={noticia} />
      ))}
    </div>
  );
}

export default ListaNoticias;