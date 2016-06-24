/**
 * Created by bm03096 on 6/17/2016.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

class CarsList extends Component{
    renderCars(){
        if (this.props.distance){
            return this.props.distance.rows.map((row) => {
                return row.elements.map((data) => {
                    return (
                        <tbody>
                            <tr key={new Date()}>
                                <td>CAR2GO - EVO</td>
                                <td>{data.distance.text}</td>
                                <td>{data.duration.text}</td>
                                <td>{((data.duration.value/60) * 0.40) + 1}</td>
                            </tr>
                            <tr key={new Date()+1}>
                                <td>MODO</td>
                                <td>{data.distance.text}</td>
                                <td>{data.duration.text}</td>
                                <td>{((data.duration.value/60) * 0.40) + 1}</td>
                            </tr>
                        </tbody>
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
                    <th></th>
                    <th>Distance</th>
                    <th>Duration</th>
                    <th>Cost($)</th>
                </tr>
                </thead>
                {this.renderCars()}

            </table>
        );
    }
}

function mapStateToProps(state){
    return {distance: state.distance.distance};
}

export default connect(mapStateToProps)(CarsList);

