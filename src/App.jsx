import React, {Component} from 'react';
// Componentes
import Cabecera from './componentes/Cabecera'
// Redux
import { Provider } from 'react-redux'
// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Store
import store from './store'
// Componentes
import BuscadorCheckIn from './componentes/BuscadorCheckIn';
import CheckIn from './componentes/CheckIn';
import ResultadoCheckIn from './componentes/ResultadoCheckIn';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <Router>
           <React.Fragment>
             <Cabecera />
             <div className="container">
               <Switch>
                 <Route exact path="/" component={BuscadorCheckIn} /> 
                 <Route exact path="/checkin" component={CheckIn} /> 
                 <Route exact path="/resultado" component={ResultadoCheckIn} /> 
               </Switch>
             </div>
           </React.Fragment>
         </Router>
      </Provider>
    );
  }
}

export default App;
