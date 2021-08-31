import { MOSTRAR_CHECKIN,EDITAR_CHECKIN } from '../actions/types'

// cada reducers tiene su propio state
const initialState = {
    checkins: []
}

// los reducers son los unicos que pueden modificar el store
export default function (state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_CHECKIN:
            return {
                ...state,
                checkin: action.payload
            }
        case EDITAR_CHECKIN:
            return {
                ...state,
                checkins: state.checkins.map(checkin =>
                    checkin.id === action.payload ? (checkin = action.payload) : checkin 
                )
            }
        default:
            return state;
    }
}