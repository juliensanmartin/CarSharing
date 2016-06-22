/**
 * Created by bm03096 on 6/15/2016.
 */
import React, {Component} from 'react';
import { GoogleMapLoader, GoogleMap , Marker } from 'react-google-maps';
import {fetchDistanceMatrix} from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export default class MyGoogleMap extends Component {
    constructor(props){
        super(props);

        this.state = {
            origin:{lat:49.2827, lng:-123.1207},
            destination:{lat:49.222289, lng:-122.997237},
            zoom:12,
            markers:[]
        };

        this.onMapClick = this.onMapClick.bind(this);
        this.retrieveDataFromGoogleMap = this.retrieveDataFromGoogleMap.bind(this);

    }

    onMapClick(event){

        console.log('origin :'+this.state.origin);
        console.log('destination :'+this.state.destination);

        var origin = new google.maps.LatLng(this.state.origin);
        var destination = new google.maps.LatLng(this.state.destination);

        var service = new google.maps.DistanceMatrixService();

        const param = {
            origins: [origin],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING,
            /*transitOptions: TransitOptions,*/
            /*drivingOptions: DrivingOptions,*/
            avoidHighways: false,
            avoidTolls: false
        };

        service.getDistanceMatrix(param, this.retrieveDataFromGoogleMap);
    }

    retrieveDataFromGoogleMap(response, status){
        this.props.fetchDistanceMatrix(response);
    }

    render() {
        return (
            <GoogleMapLoader
                containerElement={ <div className="container-google-map col-sd-12" /> }
                googleMapElement={
                    <GoogleMap
                        defaultZoom={this.state.zoom}
                        defaultCenter={{lat: this.state.origin.lat, lng: this.state.origin.lng}}
                        onClick={this.onMapClick}>

                    </GoogleMap>
                }
            />
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchDistanceMatrix }, dispatch);
}

export default connect(null, mapDispatchToProps)(MyGoogleMap);
