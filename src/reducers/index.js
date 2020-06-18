import { combineReducers } from 'redux';
import WeatherReducer from "./reducer_weathere"

const rootReducer = combineReducers({
  weather :WeatherReducer
});

export default rootReducer;
