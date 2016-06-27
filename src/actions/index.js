import axios from 'axios';

/*const API_KEY = 'AIzaSyAYjvU-D90-pX56a8mWEAtSLvVaBvtsGJA';
const ROOT_URL = `https://maps.googleapis.com/maps/api/distancematrix/json?key=${API_KEY}`;*/

export const FETCH_DISTANCE_MATRIX_DRIVING = 'FETCH_DISTANCE_MATRIX_DRIVING';
export const FETCH_DISTANCE_MATRIX_WALKING = 'FETCH_DISTANCE_MATRIX_WALKING';
export const FETCH_DISTANCE_MATRIX_TRANSIT = 'FETCH_DISTANCE_MATRIX_TRANSIT';
export const FETCH_DISTANCE_MATRIX_BICYCLING = 'FETCH_DISTANCE_MATRIX_BICYCLING';

export function fetchDistanceMatrixDriving(response){
    return {
        type:FETCH_DISTANCE_MATRIX_DRIVING,
        payload: response
    };
}

export function fetchDistanceMatrixWalking(response){
    return {
        type:FETCH_DISTANCE_MATRIX_WALKING,
        payload: response
    };
}

export function fetchDistanceMatrixTransit(response){
    return {
        type:FETCH_DISTANCE_MATRIX_TRANSIT,
        payload: response
    };
}

export function fetchDistanceMatrixBicycling(response){
    return {
        type:FETCH_DISTANCE_MATRIX_BICYCLING,
        payload: response
    };
}


