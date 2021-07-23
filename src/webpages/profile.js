import React from 'react';
import data from '../data.json';


const Profile = () => {

    return (
        <div>
            <div className="header-profile">
                <b>Profile</b>
            </div>

            <div className="main-profile">
                <div>
                    <img alt="Logo" src={data.profile.avatarImage} width="130" height="130" />
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td><b>First name</b></td><td>{data.profile.firstName}</td>
                        </tr>
                        <tr>
                            <td><b>Last name</b></td><td>{data.profile.lastName}</td>
                        </tr>
                        <tr>
                            <td><b>Phone</b></td><td>{data.profile.phone}</td>
                        </tr>
                        <tr>
                            <td><b>Email</b></td><td>{data.profile.email}</td>
                        </tr>
                        <tr>
                            <td><b>Bio</b></td><td>{data.profile.bio}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default Profile;