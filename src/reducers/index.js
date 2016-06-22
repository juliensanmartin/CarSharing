import { combineReducers } from 'redux';
import DistanceReducer from './reducer_distance';

const rootReducer = combineReducers({
    distance: DistanceReducer
});

export default rootReducer;
