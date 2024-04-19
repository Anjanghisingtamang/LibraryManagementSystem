// SignUp.js
import axios from 'axios';
import React, { useState } from 'react';
import { FiUser, FiUsers, FiBookOpen, FiCheckCircle, FiCalendar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../CSS/signup.css';
import { FiBook } from 'react-icons/fi';
import NavbarComponent from './navigationBar';
import { Container, Row, Col } from 'react-bootstrap';


const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [publisher, setPublisher] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [genre, setGenre] = useState('');
    const [availability, setAvailability] = useState('');

    const [titleError, setTitleError] = useState('');
    const [authorError, setAuthorError] = useState('');
    const [isbnError, setIsbnError] = useState('');
    const [publisherError, setPublisherError] = useState('');
    const [publicationDateError, setPublicationDateError] = useState('');
    const [genreError, setGenreError] = useState('');
    const [availabilityError, setAvailabilityError] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showFailurePopup, setShowFailurePopup] = useState(false);
    const navigate = useNavigate();


    const clearForm = () => {
        setTitle('');
        setAuthor('');
        setIsbn('');
        setPublisher('');
        setPublicationDate('');
        setGenre('');
        setAvailability('');
    };

    const handleAddBook = (e) => {
        e.preventDefault();
        setTitleError('');
        setAuthorError('');
        setIsbnError('');
        setPublisherError('');
        setPublicationDateError('');
        setGenreError('');
        setAvailabilityError('');
        setShowSuccessPopup(false);
        setShowFailurePopup(false);

        // Validation checks
        if (!title) {
            setTitleError('Please enter the book title.');
            return;
        }

        if (!author) {
            setAuthorError('Please enter the book author(s).');
            return;
        }

        if (!isbn) {
            setIsbnError('Please enter the book ISBN.');
            return;
        }

        if (!publisher) {
            setPublisherError('Please enter the book publisher.');
            return;
        }

        if (!publicationDate) {
            setPublicationDateError('Please enter the publication date.');
            return;
        }

        if (!genre) {
            setGenreError('Please enter the book genre.');
            return;
        }

        if (!availability) {
            setAvailabilityError('Please enter the book availability status.');
            return;
        }

        // Assuming all validations pass, make the POST request
        axios.post('http://localhost:8080/books', {
            BookTitle: title,
            BookAuthor: author,
            ISBN: isbn,
            Publisher: publisher,
            PublicationDate: publicationDate,
            Genre: genre,
            BookAvailability: availability,
        })
            .then((res) => {
                if (res.data === 'Success') {
                    setShowSuccessPopup(true);
                    clearForm();
                    navigate('/dashboard');

                } else {
                    setShowFailurePopup(true);
                }
            })
            .catch((err) => {
                console.error(err);
                setShowFailurePopup(true);
            });
    };

    return (
        <div>
            <NavbarComponent />
            <Container>
                <Row>
                    <Col style={{ marginTop: '-100px' }}>
                        <div className="container-fluid" style={{ backgroundColor: 'rgba(247,250,250,255)' }}>
                            <div className="row justify-content-center mt-5">
                                <div className="col-md-9">
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="card-title text-center mb-4">Add Book</h2>
                                            <form onSubmit={handleAddBook}>
                                                <div className="row mb-3">
                                                    <div className="col">
                                                        <div className="input-group">
                                                            <span className="input-group-text"><FiBook size={20} /></span>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Title"
                                                                value={title}
                                                                onChange={(e) => setTitle(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        {titleError && <div className="text-danger">{titleError}</div>}
                                                    </div>
                                                    <div className="col">
                                                        <div className="input-group">
                                                            <span className="input-group-text"><FiUser size={20} /></span>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Author(s)"
                                                                value={author}
                                                                onChange={(e) => setAuthor(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        {authorError && <div className="text-danger">{authorError}</div>}
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col">
                                                        <div className="input-group">
                                                            <span className="input-group-text"><FiBook size={20} /></span>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="ISBN"
                                                                value={isbn}
                                                                onChange={(e) => setIsbn(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        {isbnError && <div className="text-danger">{isbnError}</div>}
                                                    </div>
                                                    <div className="col">
                                                        <div className="input-group">
                                                            <span className="input-group-text"><FiUsers size={20} /></span>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Publisher"
                                                                value={publisher}
                                                                onChange={(e) => setPublisher(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        {publisherError && <div className="text-danger">{publisherError}</div>}
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col">
                                                        <div className="input-group">
                                                            <span className="input-group-text"><FiCalendar size={20} /></span>
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                placeholder="Publication Date (YYYY-MM-DD)"
                                                                value={publicationDate}
                                                                onChange={(e) => setPublicationDate(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        {publicationDateError && <div className="text-danger">{publicationDateError}</div>}
                                                    </div>
                                                    <div className="col">
                                                        <div className="input-group">
                                                            <span className="input-group-text"><FiBookOpen size={20} /></span>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Genre"
                                                                value={genre}
                                                                onChange={(e) => setGenre(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        {genreError && <div className="text-danger">{genreError}</div>}
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col">
                                                        <div className="input-group">
                                                            <span className="input-group-text"><FiCheckCircle size={20} /></span>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Availability"
                                                                value={availability}
                                                                onChange={(e) => setAvailability(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        {availabilityError && <div className="text-danger">{availabilityError}</div>}
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-success w-100">Add</button>
                                            </form>
                                            {showSuccessPopup && (
                                                <div className="alert alert-success mt-3" role="alert">
                                                    Book Successfully Added
                                                </div>
                                            )}
                                            {showFailurePopup && (
                                                <div className="alert alert-danger mt-3" role="alert">
                                                    Adding book failed. Please try again.
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* Footer */}
            <footer className="footer mt-auto py-3 bg-light">
                <div className="container text-center">
                    <span className="text-muted">Book Reservation System &copy; 2024</span>
                </div>
            </footer>
        </div>
    );
};

export default AddBook;

