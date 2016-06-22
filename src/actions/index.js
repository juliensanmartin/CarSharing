import axios from 'axios';

/*const API_KEY = 'AIzaSyAYjvU-D90-pX56a8mWEAtSLvVaBvtsGJA';
const ROOT_URL = `https://maps.googleapis.com/maps/api/distancematrix/json?key=${API_KEY}`;*/

export const FETCH_DISTANCE_MATRIX = 'FETCH_DISTANCE_MATRIX';

export function fetchDistanceMatrix(response){
    return {
        type:FETCH_DISTANCE_MATRIX,
        payload: response
    };
}


