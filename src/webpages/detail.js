import React from 'react';

import data from '../data.json';


const Detail = props => {
    let id = props.match.params.id;
    const earthquake = data.data.features.filter(e => e.id === id).pop();

    return (
        <div>
            <div className="header-detail">
                <b>{earthquake.properties.title}</b>
            </div>

            <div className="main-detail">
                <table>
                    <tbody>
                        <tr>
                            <td>Title</td><td>{earthquake.properties.title}</td>
                        </tr>
                        <tr>
                            <td>Magnitude</td><td>{earthquake.properties.mag}</td>
                        </tr>
                        <tr>
                            <td>Time</td><td>{earthquake.properties.time}</td>
                        </tr>
                        <tr>
                            <td>Status</td><td>{earthquake.properties.status}</td>
                        </tr>
                        <tr>
                            <td>Tsunami</td><td>{earthquake.properties.tsunami}</td>
                        </tr>
                        <tr>
                            <td>Type</td><td>{earthquake.properties.type}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default Detail;