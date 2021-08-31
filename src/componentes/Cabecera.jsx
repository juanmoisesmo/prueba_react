import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cabecera extends Component {

     render() { 
          return ( 
               <nav className="navbar navbar-expand-lg navbar-dark bg-info justify-content-between d-flex">
                    <h1>
                         <Link to={'/'} className="text-light">CheckIn de Vuelos</Link>
                    </h1>
               </nav>
           );
     }
}
 
export default Cabecera;