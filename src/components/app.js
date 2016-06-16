import React, { Component } from 'react';
import GoogleMap from './google_map';

export default class App extends Component {
  render() {
    return (
        <div className="main">
            <GoogleMap />
        </div>
    );
  }
}
