// ProjectManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarComponent from './navigationBar';

const BookManagement = () => {
    const [books, SetBooks] = useState([]);

    useEffect(() => {
        // Fetch projects data from the server when the component mounts
        axios.get('http://localhost:5001/books')
            .then(response => SetBooks(response.data))
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
                    <h2 className="mb-4">Book Management</h2>

                    <Link to="/addbook" className='btn btn-success'>Add +</Link>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Book ID</th>
                                <th>Book Title</th>
                                <th>Book Author</th>
                                <th>  ISBN </th>
                                <th> Publisher</th>
                                <th>Publication Date</th>
                                <th>Genre</th>

                                <th> Availability</th>


                            </tr>
                        </thead>
                        <tbody>
                            {books.map((books, i) => (
                                <tr key={books.BookID}>
                                    <td>{books.BookTitle}</td>
                                    <td>{books.BookAuthor}</td>
                                    <td>{books.ISBN}</td>
                                    <td>{books.Publisher}</td>
                                    <td>{books.PublicationDate}</td>
                                    <td>{books.Genre}</td>
                                    <td>{books.BookAvailability}</td>
                                    <td>

                                        <Link to="/updatebook" className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-2'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >

        </div >
    );
};

export default BookManagement;
