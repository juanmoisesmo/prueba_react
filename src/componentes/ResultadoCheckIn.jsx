import React, { Component } from 'react';
import {connect} from 'react-redux';
import { mostrarCheckIn } from '../actions/checkinsActions';

class ResultadoCheckIn extends Component {

     state = { 
          id:'',
          dni:'',
          nombres: '',
          apellidos:'',
          origen:'',
          destino:'',
          fecha:'',
          hora:''
     }

     componentDidMount() {

        if(this.props.checkin === undefined){
            this.props.history.push('/');
        }else{

            const {id,dni, nombres, apellidos, origen, destino, fecha, hora} = this.props.checkin;
            
            this.setState({
                id,
                dni,
                nombres,
                apellidos,
                origen,
                destino,
                fecha, 
                hora
            });
        }
    }

     render() { 
          const { dni,nombres,apellidos,origen,destino,fecha,hora} = this.state;
          
          return ( 
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                         <div className="card">
                            <div className="card-body">
                                <h2 className="text-center">Muchas Gracias, se realizó el Check-In Correctamente</h2>
                                <form>
                                    <div className="form-group">
                                            <label>DNI</label>
                                            <input defaultValue={dni} type="text" className="form-control" placeholder="DNI" readOnly="readonly" />
                                    </div>
                                    <div className="form-group">
                                            <label>Nombres</label>
                                            <input defaultValue={nombres} type="text" className="form-control" placeholder="Nombres" readOnly="readonly"/>
                                    </div>
                                    <div className="form-group">
                                            <label>Apellidos</label>
                                            <input defaultValue={apellidos} type="text" className="form-control" placeholder="Apellidos" readOnly="readonly"/>
                                    </div>
                                    <div className="form-group">
                                            <label>Origen</label>
                                            <input defaultValue={origen} type="text" className="form-control" placeholder="Origen" readOnly="readonly" />
                                    </div>
                                    <div className="form-group">
                                            <label>Destino</label>
                                            <input defaultValue={destino} type="text" className="form-control" placeholder="Destino" readOnly="readonly"/>
                                    </div>
                                    <div className="form-group">
                                            <label>Fecha</label>
                                            <input defaultValue={fecha} type="text" className="form-control" placeholder="Fecha" readOnly="readonly"/>
                                    </div>
                                    <div className="form-group">
                                            <label>Hora</label>
                                            <input defaultValue={hora}  type="text" className="form-control" placeholder="Hora" readOnly="readonly"/>
                                    </div>
                                </form>
                            </div>
                         </div>
                    </div>
               </div>
           );
          
     }
}
// state
 
const mapStateToProps = state => ({
    checkin: state.checkins.checkin
})

export default connect(mapStateToProps, {mostrarCheckIn})(ResultadoCheckIn);