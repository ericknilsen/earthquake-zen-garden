import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

let orderingField = '';
let flagsMap = { 'mag': 1, 'title': 1, 'time': 1 };

const Home = () => {

    const formatTime = (timestamp) => {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(timestamp));
    }

    const compare = (a, b) => {
        if (a.properties[orderingField] < b.properties[orderingField]) {
            return -flagsMap[orderingField];
        }
        if (a.properties[orderingField] > b.properties[orderingField]) {
            return flagsMap[orderingField];
        }
        return 0;
    }

    const sort = () => {
        data.data.features.sort(compare);
        flagsMap[orderingField] = -flagsMap[orderingField];
    }

    const sortByMagnitude = () => {
        orderingField = 'mag';
        sort();
    }

    const sortByTitle = () => {
        orderingField = 'title';
        sort();
    }

    const sortByTime = () => {
        orderingField = 'time';
        sort();
    }

    return (
        <div>
            <div className="header-home">
                <b>{data.data.metadata.title}</b>
            </div>

            <div className="main-home">
                <table>
                    <thead>
                        <tr>
                            <th><a href="#" onClick={sortByTitle}>Title</a></th>
                            <th><a href="#" onClick={sortByMagnitude}>Magnitude</a> </th>
                            <th><a href="#" onClick={sortByTime}>Time</a></th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.data.features.map(feature => (
                            <tr key={feature.id}>
                                <td><Link to={`detail/${feature.id}`}>{feature.properties.title}</Link></td>
                                <td className="mag">{feature.properties.mag}</td>
                                <td>{formatTime(feature.properties.time)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;