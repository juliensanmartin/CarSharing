/**
 * Created by bm03096 on 6/21/2016.
 */
import {FETCH_DISTANCE_MATRIX} from '../actions/index';

const INITIAL_STATE = {distance: null};

export default function(state= INITIAL_STATE, action){
    switch (action.type){
        case FETCH_DISTANCE_MATRIX:
            return {...state, distance: action.payload};
        default:
            return state;
    }
}