import React, { Component } from 'react';
import MyGoogleMap from './google_map';

export default class App extends Component {
  render() {
    return (
        <div className="main">
            <MyGoogleMap />
        </div>
    );
  }
}
