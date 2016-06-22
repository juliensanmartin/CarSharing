/**
 * Created by bm03096 on 6/17/2016.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

class CarsList extends Component{
    renderCars(){
        console.log('this.props.distance : '+ this.props.distance);

        if (this.props.distance){
            console.log('this.props.distance : '+ this.props.distance.rows);

            return this.props.distance.rows.map((row) => {
                return row.elements.map((data) => {
                    return (
                        <tr key={new Date()}>
                            <td>{data.distance.text}</td>
                            <td>{data.duration.text}</td>
                        </tr>
                    )
                })
            });
        }
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Distance</th>
                    <th>Duration</th>
                </tr>
                </thead>
                <tbody>
                {this.renderCars()}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return {distance: state.distance.distance};
}

export default connect(mapStateToProps)(CarsList);

