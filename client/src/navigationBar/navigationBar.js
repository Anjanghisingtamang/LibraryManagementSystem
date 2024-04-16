// NavbarComponent.js
import React from 'react';
import { Nav, Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import { BarChart2, List, Users, CheckSquare, Bell, Search, Book, Gift, Activity, LogOut, User } from 'react-feather';
import { Link } from 'react-router-dom';




const NavbarComponent = () => {



    // const handleLogout = () => {
    //     // Perform logout logic (clear session, etc.)

    //     // Redirect to the login page
    //     history.push('/login');
    // };
    return (
        <Container fluid>
            <Row>
                {/* Navbar */}
                <Col sm={12} className="mb-6"  >

                    <Navbar bg="light" variant="light" expand="lg"
                        style={{
                            background: 'grey',
                            marginLeft: '-2px'
                        }}

                    >

                        <Navbar.Brand >
                            <div class="col-md-4 mb-3" style={{ color: 'rgba(14,109,251,255)' }} >
                                <h4>H&K Learning Management System </h4>
                            </div>

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Item style={{
                                    marginLeft: '550px'
                                }}>
                                    <Link to="/dashboard" className="btn btn-outline-danger ml-3" style={{}}>
                                        <User size={20} className="mr-2" />
                                        Nabaraj Acharya
                                    </Link>
                                </Nav.Item>
                                <Nav.Item style={{
                                    marginLeft: '20px'
                                }}>
                                    <Link to="/" className="btn btn-outline-danger ml-auto">
                                        <LogOut size={20} className="mr-2" />
                                        Logout
                                    </Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>

                {/* Sidebar */}
                <Col sm={3} md={2} className="bg-dark" style={{ height: '100vh', position: 'fixed', zIndex: 1, top: '56px' }}>
                    <Nav className="flex-column">
                        <Link to="/dashboard" className="nav-link">
                            <BarChart2 size={20} className="mr-2" />
                            Overview
                        </Link>

                        <Link to="/branch" className="nav-link">
                            <Users size={20} className="mr-2" />
                            Branch Management
                        </Link>
                        <Link to="/users" className="nav-link">
                            <Users size={20} className="mr-2" />
                            User Management
                        </Link>
                        <Link to="/projects" className="nav-link">
                            <List size={20} className="mr-2" />
                            Projects
                        </Link>
                        <Link to="/taskManagement" className="nav-link">
                            <CheckSquare size={20} className="mr-2" />
                            Task Management
                        </Link>
                        <Link to="/announcementManagement" className="nav-link">
                            <Bell size={20} className="mr-2" />
                            Announcement Management
                        </Link>
                        <Link to="/search" className="nav-link">
                            <Search size={20} className="mr-2" />
                            Search Information
                        </Link>
                        <Link to="/training" className="nav-link">
                            <Book size={20} className="mr-2" />
                            Training Management
                        </Link>
                        <Link to="/incentives" className="nav-link">
                            <Gift size={20} className="mr-2" />
                            Incentives Management
                        </Link>
                        <Link to="/contribution" className="nav-link">
                            <Activity size={20} className="mr-2" />
                            Contribution Management
                        </Link>
                        <Link to="/rewards" className="nav-link">
                            <Gift size={20} className="mr-2" />
                            Reward Management
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



