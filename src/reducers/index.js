import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  //state: (state = {}) => state - the placeholder to just maintain state?
  weather: WeatherReducer
});

export default rootReducer;
