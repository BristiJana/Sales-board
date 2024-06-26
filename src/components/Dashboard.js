import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../assets/style.css';

const DashboardPage = () => {
    const navigate = useNavigate();

    const handleSet = () => {
        navigate('/profile');
    };

    const handleLogout = () => {
        navigate('/login-signup');
    };

    const handleNextStep = () => {
        navigate('/otp-verification');
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Debt Free Solutions</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    <FaUserCircle size={24} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={handleSet}>Setting</Dropdown.Item>
                                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid className="dashboard-container text-center text-white">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h1 className="dashboard-heading">Welcome Bristi!</h1>
                        <p className="dashboard-subheading">Let's get started with three simple steps:</p>
                        <Card className="step-card">
                            <Card.Body>
                                <h3>Step One – Tell us about your Debts</h3>
                            </Card.Body>
                        </Card>
                        <Card className="step-card mt-4">
                            <Card.Body>
                                <h3>Step Two – Your Income & Expenditure</h3>
                            </Card.Body>
                        </Card>
                        <Card className="step-card mt-4">
                            <Card.Body>
                                <h3>Step Three – Your Debt Solutions</h3>
                            </Card.Body>
                        </Card>
                        <Button
                            variant="primary"
                            size="lg"
                            className="mt-5 next-step-button"
                            onClick={handleNextStep}
                        >
                            Let's Proceed to the Next Step
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DashboardPage;
