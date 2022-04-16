import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';
import { Route, Routes } from 'react-router-dom';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<Routes>
						<Route exact path='/metricas' element={<ContentRowMovies/>}/>			
					</Routes>
					{/* Si la ruta es /metricas el elemento que quiero renderizar es <ContentRowMovies/>
					entonces si hago clic en métricas(del lado izquierdo), me renderiza la página incluyendo las 3 cajas que están debajo del título.
					Entonces al cambiar la ruta react-router-dom detecta enseguida que componente quiero mostrar y cual no */}
					
					<ContentRowCenter />

					<Routes>
						<Route exact path='/peliculas' element={<Chart />}/>		
					</Routes>			
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;


/* Si traemos Routes, ya lo trae desde react-router-dom, en donde lo usemos, lo requerimos.
Termina siendo una página más dinámica, al presionar alguno de los links del lado izquierdo, me renderiza solo la parte que quiero en la vista
el footer no lo toca, arriba marcará la ruta, pero no se carga de cero la página */

