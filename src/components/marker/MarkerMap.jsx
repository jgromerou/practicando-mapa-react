import { Marker, Popup } from "react-leaflet";
function MarkerMap ({nombre, urlImagen,descripcion,link, lat, lng}) {
return(
           <Marker position={[lat, lng]}>
              <Popup>
                <h3>{nombre}</h3>
                <div className="contenedorImg">
                    <img src={urlImagen} alt={`imagen-${nombre}`} />
                </div>
                <p> <strong className="textoImportante">Descripcion:</strong> {descripcion}</p>
                <a href={link}>Leer Más </a>
              </Popup>
            </Marker>
      );
}

export default MarkerMap; 