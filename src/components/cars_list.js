/**
 * Created by bm03096 on 6/17/2016.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

class CarsList extends Component{
    renderDistance(){
        return(
            <tbody>
                {this.renderParticularTransport(this.props.distanceDriving, 'Driving')}
                {this.renderParticularTransport(this.props.distanceDriving, 'DrivingCar2Go')}
                {this.renderParticularTransport(this.props.distanceDriving, 'DrivingModoMonthly')}
                {this.renderParticularTransport(this.props.distanceDriving, 'DrivingPlus')}
                {this.renderParticularTransport(this.props.distanceBicycling, 'Bicycling')}
                {this.renderParticularTransport(this.props.distanceWalking, 'Walking')}
                {this.renderParticularTransport(this.props.distanceTransit, 'Transit')}
            </tbody>
        );
    }

    renderParticularTransport(distance, mode){
        if (distance){
            {console.log('distance: '+distance.rows+ 'mode: '+mode)}
            return distance.rows.map((row) => {
                return row.elements.map((data) => {
                    return (
                        <tr key={new Date()}>
                            <td>{mode}</td>
                            <td>{data.distance.text}</td>
                            <td>{data.duration.text}</td>
                            <td>{this.cost(data.duration.value, data.distance.value, mode)}</td>
                        </tr>
                    )
                })
            });
        }
    }

    cost(duration, distance, mode){
        if (mode == 'Driving'){
            return ((distance/1000) * 0.50 * 2);
        } else if (mode == 'DrivingCar2Go'){
            return ((duration/60) * 0.40) + 1;
        } else if (mode == 'DrivingModoMonthly'){
            return (Math.ceil(duration*2/3600)) * 8;
        } else if (mode == 'DrivingPlus'){
            return ((Math.ceil(duration*2/3600)) * 4)+(Math.ceil(distance*2/1000)) * 0.40;
        } else if (mode == 'Transit'){
            return 2.75;
        } else {
            return '';
        }
    }

    render(){

        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th></th>
                    <th>Distance</th>
                    <th>Duration</th>
                    <th>Cost($)</th>
                </tr>
                </thead>
                {(this.props.distanceDriving && this.props.distanceBicycling && this.props.distanceTransit && this.props.distanceWalking)?this.renderDistance():<tbody/>}
            </table>
        );
    }
}

function mapStateToProps(state){
    return {distanceDriving: state.distance.distanceDriving, distanceBicycling: state.distance.distanceBicycling, distanceTransit: state.distance.distanceTransit, distanceWalking: state.distance.distanceWalking};
}

export default connect(mapStateToProps)(CarsList);

