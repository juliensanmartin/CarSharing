/**
 * Created by bm03096 on 6/15/2016.
 */
import React, {Component} from 'react';
import { GoogleMapLoader, GoogleMap , Marker } from 'react-google-maps';

export default class MyGoogleMap extends Component {
    constructor(props){
        super(props);

        this.state = {
            origin:{lat:49.2827, lng:-123.1207},
            destination:{lat:'', lng:''},
            zoom:12,
            markers:[]
        };

        this.onMapClick = this.onMapClick.bind(this);

    }

    onMapClick(event){
        this.setState({
            origin:{lat:45.2827, lng:-123.1207},
            destination:{lat:'', lng:''},
            zoom:8,
            markers:[]
        });
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
                        {this.state.markers.map((marker, index) => {
                            return (
                                {...marker}
                            );
                        })};
                    </GoogleMap>
                }
            />
        );
    }
}

/*
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ name_of_action_creator }, dispatch);
}

export default connect(null, mapDispatchToProps)(MyGoogleMap);*/
