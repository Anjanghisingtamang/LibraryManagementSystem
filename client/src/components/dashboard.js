import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarComponent from './navigationBar'; // Ensure the correct path to the NavigationBar component

function Dashboard() {
    return (
        <div>
            <NavbarComponent />
            {/* Other content of the Dashboard */}
            <Container >
                <Row>
                    <Col md={8} style={{ marginTop: '10px', marginLeft: '300px', marginRight: '10px', color: 'black' }}>
                        {/* <OverviewSection /> */}
                        <h2>Welcome to the Book Reservation System</h2>
                        <h2></h2>
                        <p>Effortlessly reserve books with real-time updates and personalized recommendations in our streamlined system.</p>

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;
