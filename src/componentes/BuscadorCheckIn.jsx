import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { mostrarCheckIn } from '../actions/checkinsActions';

class BuscadorCheckIns extends Component {
    

    state = { 
        dni: '',
        error: false
    }

    dniBuscador = e => {
        this.setState({dni: e.target.value })
    }

    realizarCheckIn = e => {
        e.preventDefault();

        const { dni } = this.state;
        
        if(dni === '') {
             this.setState({error: true});
             return;
        } 

        this.setState({error: false});
        
        this.props.mostrarCheckIn(dni);

        this.props.history.push(`/checkin`);
   }

    render() { 
        const {dni, error} = this.state;
          return ( 
               <React.Fragment>
                    <h2 className="text-center checkin-title my-5">Realizar CheckIn</h2>
                    <div className="row justify-content-center">
                         <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="text-center">Buscar Check-In por DNI</h2>
                                    <form onSubmit={this.realizarCheckIn}>
                                        <div className="form-group">
                                                <label>DNI</label>
                                                <input defaultValue={dni} onChange={this.dniBuscador} type="text" className="form-control" placeholder="DNI" />
                                        </div>
                                        <button type="submit" className="btn editar p-2 font-weight-bold text-uppercase d-block w-100">Buscar Check-In</button>
                                    </form>
                                    {error ? 
                                        <div className="font-weight-bold alert alert-danger text-center mt-4 ">
                                                Ingrese el DNI para realizar la búsqueda
                                        </div> 
                                        : ''
                                    }
                                </div>
                            </div>
                         </div>
                    </div>
               </React.Fragment>
           );
     }
}
// state
const mapStateToProps = state => ({
     checkins: state.checkins.checkins
})
 
export default connect(mapStateToProps, { mostrarCheckIn })(BuscadorCheckIns);