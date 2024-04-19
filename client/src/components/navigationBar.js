// NavbarComponent.js
import React from 'react';
import { Nav, Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import { BarChart2, List, Users, CheckSquare, Mail, Search, Book, Gift, Activity, LogOut, User } from 'react-feather';
import { Link } from 'react-router-dom';
import { FiBook } from 'react-icons/fi';



const NavbarComponent = () => {




    // useEffect(() => {
    //     // Simulate an asynchronous call to fetch the user's information from the backend
    //     const fetchUserInfo = async () => {
    //         try {
    //             // Assuming you have a function called getUserInfo() that fetches the user's data
    //             const userData = await getUserInfo(); // Call to backend to fetch user data
    //             setUserName(userData.name); // Update state with user's name
    //             setIsLoggedIn(true); // Set login status to true
    //         } catch (error) {
    //             // Handle error if any
    //             console.error('Error fetching user information:', error);
    //         }
    //     };

    //     // Call the fetchUserInfo function when the component mounts
    //     fetchUserInfo();
    // }, []); // Empty dependency array ensures this effect runs only once on component mount

    return (
        <Container fluid>
            <Row>
                {/* Navbar */}
                <Col sm={12} className="mb-6"  >

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
                                    <Link className="nav-link" to="/profile" style={{ color: '#009933', border: '1px solid #009933', padding: '5px 10px', borderRadius: '5px' }}>
                                        {/* {userName} */}  Nabaraj Acharya
                                    </Link>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </Col>

                <Col sm={3} md={2} className="bg-grey" style={{ backgroundColor: 'rgba(250,250,250,255)', color: '#009933', height: '100vh', position: 'fixed', zIndex: 1, top: '56px', paddingTop: '20px' }}>
                    <Nav className="flex-column" style={{ color: '#009933', borderRadius: '8px', padding: '10px' }}>
                        <Link to="/Dashboard" className="nav-link" style={{ color: '#009933', marginRight: '8px' }}>
                            <BarChart2 size={20} className="mr-2" />
                            Dashboard
                        </Link>
                        <Link to="/usermanagement" className="nav-link" style={{ color: '#009933', display: 'flex', alignItems: 'center' }}>
                            <Users size={20} style={{ marginRight: '8px' }} /> {/* Adjust margin right for spacing */}
                            User
                        </Link>
                        <Link to="/bookmanagement" className="nav-link" style={{ color: '#009933' }}>
                            <List size={20} style={{ marginRight: '8px' }} />
                            Book Management
                        </Link>
                        <Link to="/viewRecord" className="nav-link" style={{ color: '#009933' }}>
                            <CheckSquare size={20} style={{ marginRight: '8px' }} />
                            Record Management
                        </Link>
                        <Link to="/viewMessage" className="nav-link" style={{ color: '#009933' }}>
                            <Mail size={20} style={{ marginRight: '8px' }} />
                            Messages
                        </Link>


                        <Link to="/logOut" className="nav-link" style={{ color: '#009933' }}>
                            <LogOut size={20} style={{ marginRight: '8px' }} />
                            Logout
                        </Link>

                    </Nav>
                </Col>


                {/* Main content */}
                <Col sm={9} md={10} style={{ marginLeft: 'auto', paddingTop: '56px' }}>
                    {/* Your main content goes here */}
                </Col>
            </Row>
        </Container>
    );
};

export default NavbarComponent;



