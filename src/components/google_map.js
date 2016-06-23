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
            origin:null,
            destination:null,
            markers:[]
        };

        this.onMapClick = this.onMapClick.bind(this);
        this.retrieveDataFromGoogleMap = this.retrieveDataFromGoogleMap.bind(this);

        this.service = new google.maps.DistanceMatrixService();

    }

    onMapClick(event) {
        // if origin is null then we set origin otherwise we set destination
        (!this.state.origin) ? this.state.origin = event.latLng : this.state.destination = event.latLng;

        var originMarker = new google.maps.Marker({
            position: this.state.origin,
            animation: google.maps.Animation.DROP,
            draggable:true,
            title: 'From',
            key: Date.now()
        });

        var destinationMarker = new google.maps.Marker({
            position: this.state.destination,
            animation: google.maps.Animation.DROP,
            draggable:true,
            title: 'To',
            key: Date.now()+1
        });

        this.setState({markers:[originMarker, destinationMarker]});

        if (this.state.destination) {

            // create the param for the googlemap request
            const param = {
                origins: [this.state.origin],
                destinations: [this.state.destination],
                travelMode: google.maps.TravelMode.DRIVING,
                /*transitOptions: TransitOptions,*/
                /*drivingOptions: DrivingOptions,*/
                avoidHighways: false,
                avoidTolls: false
            };

            this.service.getDistanceMatrix(param, this.retrieveDataFromGoogleMap);
        }


    }

    retrieveDataFromGoogleMap(response, status){
        if (status == google.maps.DistanceMatrixStatus.OK) {
            this.props.fetchDistanceMatrix(response);
        }
    }

    render() {
        return (
            <GoogleMapLoader
                containerElement={ <div className="container-google-map col-sd-12" /> }
                googleMapElement={
                    <GoogleMap
                        defaultZoom={this.props.zoom}
                        defaultCenter={this.props.center}
                        onClick={this.onMapClick}>
                            {this.state.markers.map((marker, index) => {
                                return (
                                    <Marker {...marker} />
                                );
                            })}
                    </GoogleMap>
                }
            />
        );
    }
}

MyGoogleMap.propTypes = {
    center : React.PropTypes.object.isRequired,
    zoom : React.PropTypes.number.isRequired
};

MyGoogleMap.defaultProps = {
    center: new google.maps.LatLng(49.2827, -123.1207),
    zoom:12
};



function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchDistanceMatrix }, dispatch);
}

export default connect(null, mapDispatchToProps)(MyGoogleMap);
