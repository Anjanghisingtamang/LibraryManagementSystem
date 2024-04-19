// ProjectManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarComponent from './navigationBar';

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch projects data from the server when the component mounts
        axios.get('http://localhost:8080/Users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);


    return (
        <div>
            <NavbarComponent />


            <div
                className="d-flex justify-content-center align-items-center vh-100"
                style={{
                    backgroundColor: 'rgba(250,250,250,255)',
                    marginTop: '-100px'
                }}   >
                <div className='w-30 bg-white rounded p-3 project-management-container' style={{ marginTop: '10px', marginLeft: '220px', marginRight: '10px' }}>
                    <h2 className="mb-4">User Management</h2>

                    <Link to="/adduser" className='btn btn-success'>Add +</Link>
                    <table className='table'>
                        <thead>

                            <tr>
                                <th>First Name</th>
                                <th>Middle Name</th>
                                <th>last Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>AdressLine</th>
                                <th>Post Code</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {users.map((users, i) => (
                                <tr key={users.userId}>
                                    <td>{users.FirstName}</td>
                                    <td>{users.MiddleName}</td>
                                    <td>{users.LastName}</td>
                                    <td>{users.PhoneNumber}</td>
                                    <td>{users.EmailAddress}</td>
                                    <td>{users.AddressLine}</td>
                                    <td>{users.PostCode}</td>
                                    <td>
                                        <Link to="/updateUser" className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-2'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div >
    );
};

export default UserManagement;
