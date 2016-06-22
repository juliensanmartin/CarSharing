import React, { Component } from 'react';
import MyGoogleMap from './google_map';
import CarsList from './cars_list';

export default class App extends Component {
  render() {
    return (
        <div className="main">
            <MyGoogleMap />
            <CarsList />
        </div>
    );
  }
}
