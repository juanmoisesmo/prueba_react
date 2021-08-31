import React, { Component } from 'react';
import {connect} from 'react-redux';
import { mostrarCheckIn, editarCheckIn } from '../actions/checkinsActions';
import { Link } from 'react-router-dom';

class EditarCheckIn extends Component {

     state = { 
          id:'',
          dni:'',
          nombres: '',
          apellidos:'',
          origen:'',
          destino:'',
          fecha:'',
          hora:'',
          check:'',
          error: false
     }

     componentWillReceiveProps(nextProps, nextState){

        const {id,dni, nombres, apellidos, origen, destino, fecha, hora, check} = nextProps.checkin;

        this.setState({
            id,
            dni,
            nombres,
            apellidos,
            origen,
            destino,
            fecha, 
            hora,
            check
        });

     }
     
     nombresCheckIn = e => {
          this.setState({nombres: e.target.value })
     }

     apelllidosCheckIn = e => {
          this.setState({apellidos: e.target.value })
     }

     origenCheckIn = e => {
          this.setState({origen: e.target.value })
     }

     destinoCheckIn = e => {
          this.setState({destino: e.target.value })
     }

     fechaCheckIn = e => {
          this.setState({fecha: e.target.value })
     }

     horaCheckIn = e => {
          this.setState({hora: e.target.value })
     }

     checkCheckIn = e => {
          this.setState({check: e.target.checked });
     }

     actualizarDatosCheckIn = e => {
          e.preventDefault();

          const { id,dni,nombres,apellidos,origen,destino,fecha,hora,check } = this.state;
          
          if(nombres === '' || 
             apellidos === '' || 
             origen === '' ||
             destino === '' ||
             fecha === '' ||
             hora === '' ) {
               this.setState({error: true});
               return;
          } 

          this.setState({error: false});

          const infoCheckIn = {
              id,
              dni,
              nombres,
              apellidos,
              origen,
              destino,
              fecha,
              hora,
              check
          }

          this.props.editarCheckIn(infoCheckIn);

          // redireccionar
          this.props.history.push('/resultado');
     }

     render() { 
          const { dni,nombres,apellidos,origen,destino,fecha,hora,check,error } = this.state;
          
          if (dni === ""){
               return (
                   <div className="row justify-content-center mt-5">
                       <div className="col-md-8">
                            <div className="card">
                               <div className="card-body">
                                   <h2 className="text-center">No se encontraron datos.</h2>
                                   <div className="col-md-12 d-flex justify-content-end acciones">
                                         <Link to={'/'} className="btn editar mr-2">Regresar a la pagina de consulta</Link>
                                   </div>
                                </div>  
                           </div>  
                       </div>  
                   </div>   
               )
             }else{
          return ( 
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                         <div className="card">
                         <div className="card-body">
                              <h2 className="text-center">Modificar Datos CheckIn</h2>
                              <form onSubmit={this.actualizarDatosCheckIn}>
                                   <div className="form-group">
                                        <label>DNI</label>
                                        <input defaultValue={dni} type="text" className="form-control" placeholder="DNI" readOnly="readonly" />
                                   </div>
                                   <div className="form-group">
                                        <label>Nombres</label>
                                        <input defaultValue={nombres} onChange={this.nombresCheckIn} type="text" className="form-control" placeholder="Nombres" />
                                   </div>
                                   <div className="form-group">
                                        <label>Apellidos</label>
                                        <input defaultValue={apellidos} onChange={this.apelllidosCheckIn} type="text" className="form-control" placeholder="Apellidos" />
                                   </div>
                                   <div className="form-group">
                                        <label>Origen</label>
                                        <input defaultValue={origen} onChange={this.origenCheckIn} type="text" className="form-control" placeholder="Origen" />
                                   </div>
                                   <div className="form-group">
                                        <label>Destino</label>
                                        <input defaultValue={destino} onChange={this.destinoCheckIn} type="text" className="form-control" placeholder="Destino" />
                                   </div>
                                   <div className="form-group">
                                        <label>Fecha</label>
                                        <input defaultValue={fecha} onChange={this.fechaCheckIn} type="text" className="form-control" placeholder="Fecha" />
                                   </div>
                                   <div className="form-group">
                                        <label>Hora</label>
                                        <input defaultValue={hora} onChange={this.horaCheckIn} type="text" className="form-control" placeholder="Hora" />
                                   </div>
                                   <div className="form-group">
                                        <label>Check-In</label>
                                        <input onChange={this.checkCheckIn} type="checkbox" checked={check} className="form-control"/>
                                   </div>
                                   <button type="submit" className="btn editar p-2 font-weight-bold text-uppercase d-block w-100">Realizar Check-In</button>
                              </form>
                              {error ? 
                                   <div className="font-weight-bold alert alert-danger text-center mt-4 ">
                                        Todos los campos son Obligatorios
                                   </div> 
                                   : ''
                              }
                         </div>
                         </div>
                    </div>
               </div>
           );
          }
     }
}
// state
const mapStateToProps = state => ({
    checkin: state.checkins.checkin
})
 
export default connect(mapStateToProps, {mostrarCheckIn, editarCheckIn})(EditarCheckIn);