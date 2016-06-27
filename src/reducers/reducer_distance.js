/**
 * Created by bm03096 on 6/21/2016.
 */
import {FETCH_DISTANCE_MATRIX_BICYCLING, FETCH_DISTANCE_MATRIX_DRIVING, FETCH_DISTANCE_MATRIX_TRANSIT, FETCH_DISTANCE_MATRIX_WALKING} from '../actions/index';

const INITIAL_STATE = {distanceDriving: null, distanceWalking: null, distanceBicycling: null, distanceTransit: null};

export default function(state= INITIAL_STATE, action){
    switch (action.type){
        case FETCH_DISTANCE_MATRIX_DRIVING:
            return {...state, distanceDriving: action.payload};
        case FETCH_DISTANCE_MATRIX_BICYCLING:
            return {...state, distanceBicycling: action.payload};
        case FETCH_DISTANCE_MATRIX_WALKING:
            return {...state, distanceWalking: action.payload};
        case FETCH_DISTANCE_MATRIX_TRANSIT:
            return {...state, distanceTransit: action.payload};
        default:
            return state;
    }
}