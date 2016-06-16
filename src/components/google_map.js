/**
 * Created by bm03096 on 6/15/2016.
 */
import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
    return (
            <GoogleMapLoader
                containerElement={ <div className="container-google-map col-sd-12" /> }
                googleMapElement={
                    <GoogleMap defaultZoom={12} defaultCenter={{lat: 49.2827, lng: -123.1207}} />
                }
            />
    );
}