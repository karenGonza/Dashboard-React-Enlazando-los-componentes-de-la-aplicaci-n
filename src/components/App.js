import React from 'react';
import SideBar from './SideBar'; 
import ContentWrapper from './ContentWrapper';
import { Route, Routes } from 'react-router-dom'; 
import Error404 from './Error404'; 

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <ContentWrapper />      
          <Routes>
            <Route exact path="/"></Route>
            <Route exact path="/metricas"></Route>
            <Route exact path="/pelicula"></Route>
            <Route exact path="/generos"></Route>
            <Route exact path="/peliculas"></Route> 
            <Route path='*' element={<Error404/>} />  
          </Routes>       
        </div>
    </React.Fragment>
  );
}

export default App;
