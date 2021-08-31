import { MOSTRAR_CHECKIN,EDITAR_CHECKIN } from './types';

import axios from 'axios';

export const mostrarCheckIn = dni => async dispatch => {
     const data = await axios.get('http://localhost:3000/checkins');
     const respuesta = data.data.find(c => c.dni === dni);

     dispatch({
          type: MOSTRAR_CHECKIN,
          payload:respuesta
     })
}

export const editarCheckIn = checkin => async dispatch => {
     const respuesta = await axios.put(`http://localhost:3000/checkins/${checkin.id}`, checkin);
     dispatch({
          type: EDITAR_CHECKIN,
          payload: respuesta.data
     })
}