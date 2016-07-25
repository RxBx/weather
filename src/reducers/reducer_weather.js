import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	
	switch(action.type) {
		case FETCH_WEATHER:
			// old way: return  state.concat([action.payload.data]);
			return [ action.payload.data, ...state ];
	}
	//console.log('Action received', action);

	return state;
}