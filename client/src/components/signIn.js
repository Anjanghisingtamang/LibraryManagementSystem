// SignUp.js
import axios from 'axios';
import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiLock, FiMapPin, FiCalendar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../CSS/signup.css';
import { FiBook } from 'react-icons/fi';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [addressLine, setAddressLine] = useState('');
    const [postcode, setPostcode] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [middleNameError, setMiddleNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [dateOfBirthError, setDateOfBirthError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [postcodeError, setPostcodeError] = useState('');
    const [countryError, setCountryError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showFailurePopup, setShowFailurePopup] = useState(false);

    const clearForm = () => {
        setFirstName('');
        setMiddleName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setDateOfBirth('');
        setAddressLine('');
        setPostcode('');
        setCountry('');
        setPassword('');
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        setFirstNameError('');
        setMiddleNameError('');
        setLastNameError('');
        setEmailError('');
        setPhoneError('');
        setDateOfBirthError('');
        setAddressError('');
        setPostcodeError('');
        setCountryError('');
        setPasswordError('');
        setShowSuccessPopup(false);
        setShowFailurePopup(false);

        // Validation checks
        if (!firstName) {
            setFirstNameError('Please enter your first name.');
            return;
        }

        if (!middleName) {
            setMiddleNameError('Please enter your middle name.');
            return;
        }

        if (!lastName) {
            setLastNameError('Please enter your last name.');
            return;
        }

        if (!email || !email.includes('@')) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        if (!phoneNumber) {
            setPhoneError('Please enter your phone number.');
            return;
        }

        if (!dateOfBirth) {
            setDateOfBirthError('Please enter your date of birth.');
            return;
        }

        if (!addressLine) {
            setAddressError('Please enter your address.');
            return;
        }

        if (!postcode) {
            setPostcodeError('Please enter your postcode.');
            return;
        }

        if (!country) {
            setCountryError('Please enter your country.');
            return;
        }

        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long.');
            return;
        }

        // Assuming all validations pass, make the POST request
        axios.post('http://localhost:8080/users', {
            FirstName: firstName,
            MiddleName: middleName,
            LastName: lastName,
            EmailAddress: email,
            PhoneNumber: phoneNumber,
            DateOfBirth: dateOfBirth,
            AddressLine: addressLine,
            Postcode: postcode,
            Country: country,
            Password: password,
        })
            .then((res) => {
                if (res.data === 'Success') {
                    setShowSuccessPopup(true);
                    clearForm();
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
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white', marginTop: '5px' }}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <FiBook className="library-icon" size={30} style={{ color: '#009933' }} />
                        <span className="library-text-custom" style={{ color: '#009933' }}>Library Management System</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" style={{ color: '#009933' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faq" style={{ color: '#009933' }}>FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" style={{ color: '#009933' }}>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Sign Up Form */}
            <div className="container-fluid" style={{ backgroundColor: 'rgba(247,250,250,255)' }}>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Join the Library Community</h2>
                                <form onSubmit={handleSignUp}>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <div className="input-group">
                                                <span className="input-group-text"><FiUser size={20} /></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            {firstNameError && <div className="text-danger">{firstNameError}</div>}
                                        </div>
                                        <div className="col">
                                            <div className="input-group">
                                                <span className="input-group-text"><FiUser size={20} /></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Middle Name"
                                                    value={middleName}
                                                    onChange={(e) => setMiddleName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            {middleNameError && <div className="text-danger">{middleNameError}</div>}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <div className="input-group">
                                                <span className="input-group-text"><FiUser size={20} /></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            {lastNameError && <div className="text-danger">{lastNameError}</div>}
                                        </div>
                                        <div className="col">
                                            <div className="input-group">
                                                <span className="input-group-text"><FiMail size={20} /></span>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            {emailError && <div className="text-danger">{emailError}</div>}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <div className="input-group">
                                                <span className="input-group-text"><FiPhone size={20} /></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Phone Number"
                                                    value={phoneNumber}
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            {phoneError && <div className="text-danger">{phoneError}</div>}
                                        </div>
                                        <div className="col">
                                            <div className="input-group">
                                                <span className="input-group-text"><FiCalendar size={20} /></span>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="DateofBirth(YYYY-MM-DD)"
                                                    value={dateOfBirth}
                                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            {dateOfBirthError && <div className="text-danger">{dateOfBirthError}</div>}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <div className="input-group">
                                                <span className="input-group-text"><FiMapPin size={20} /></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Address Line"
                                                    value={addressLine}
                                                    onChange={(e) => setAddressLine(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            {addressError && <div className="text-danger">{addressError}</div>}
                                        </div>
                                        <div className="col">
                                            <div className="input-group">
                                                <span className="input-group-text"><FiMapPin size={20} /></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Postcode"
                                                    value={postcode}
                                                    onChange={(e) => setPostcode(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            {postcodeError && <div className="text-danger">{postcodeError}</div>}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <div className="input-group">
                                                <span className="input-group-text"><FiMapPin size={20} /></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Country"
                                                    value={country}
                                                    onChange={(e) => setCountry(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            {countryError && <div className="text-danger">{countryError}</div>}
                                        </div>
                                        <div className="col">
                                            <div className="input-group">
                                                <span className="input-group-text"><FiLock size={20} /></span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            {passwordError && <div className="text-danger">{passwordError}</div>}
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success w-100">Sign Up</button>
                                </form>
                                {showSuccessPopup && (
                                    <div className="alert alert-success mt-3" role="alert">
                                        Registration successful! Welcome to the library.
                                    </div>
                                )}
                                {showFailurePopup && (
                                    <div className="alert alert-danger mt-3" role="alert">
                                        Registration failed. Please try again.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer mt-auto py-3 bg-light">
                <div className="container text-center">
                    <span className="text-muted">Library Management System &copy; 2024</span>
                </div>
            </footer>
        </div >
    );
};

export default SignUp;
