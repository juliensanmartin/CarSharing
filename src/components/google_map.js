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

        this.handleMapClick = this.handleMapClick.bind(this);
        this.retrieveDataFromGoogleMap = this.retrieveDataFromGoogleMap.bind(this);
        this.createMarker = this.createMarker.bind(this);
        this.calculateMatrix = this.calculateMatrix.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);

        this.service = new google.maps.DistanceMatrixService();

    }

    handleMapClick(event) {
        // if origin is null then we set origin otherwise we set destination
        (!this.state.origin) ? this.state.origin = event.latLng : this.state.destination = event.latLng;

        var originMarker = this.createMarker(this.state.origin, 'From', 1);
        var destinationMarker = this.createMarker(this.state.destination, 'To', 2);

        // Rebuild the markers state from scratch
        this.setState({markers:[originMarker, destinationMarker]});

        this.calculateMatrix();
    }

    createMarker(latlng,title, key) {
        var marker = new google.maps.Marker({
            position: latlng,
            title: title,
            draggable:true,
            key: key
        });

        return marker;
    }

    handleDragEnd(index, event){
        if (index==0){
            this.state.origin=event.latLng;
        } else {
            this.state.destination=event.latLng;
        }
        this.calculateMatrix();
    }

    calculateMatrix(){

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
                        onClick={this.handleMapClick}>
                            {this.state.markers.map((marker, index) => {
                                return (
                                    <Marker {...marker}
                                    onDragend={this.handleDragEnd.bind(this, index)}/>
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
