import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import { Route, Routes } from 'react-router-dom';


function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <Routes>
                <Route exact path='/pelicula' element={<LastMovieInDb />}/>
                <Route exact path='/generos' element={<GenresInDb />}/>
            </Routes>       

        </div>
    )
}

export default ContentRowCenter;

/* Si pusieramos: <Route exact path='/metricas' element={<ContentRowMovies/>}/> es decir un exact justo delante del path,
querra decir que nos traiga ese componente exactamente que le estamos pidiendo y desaparecen los peligros en amarillo de la consola.
Para la ruta del error 404 armaremos un nuevo componente, en el path pondremos el comodin(*), entonces entiende 
que si le paso cualquier otra ruta me renderizará el error 404, no le pongo exact e irá al final de todas las rutas...*/