import React from 'react';
import { Container, Row, Col, Button, Card, Navbar, Nav } from 'react-bootstrap';
import '../assets/style.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/login-signup');
    };
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">MyApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="hero-section text-center text-white">
                <Row>
                    <Col>
                        <h1>Welcome to MyApp</h1>
                        <p>Your solution for awesome web applications</p>
                        <Button variant="primary" size="lg" onClick={handleGetStartedClick}>Get Started</Button>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5">
                <Row>
                    <Col md={4}>
                        <Card className="mb-4 shadow-sm">
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-wEk8ShOBSV9IwsJNUxNx3dzsLAg-Qw4oQ&s" className="card-img-top"/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4 shadow-sm">
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0t17cooQWAc7rrZIeeN8xm2HD4KppOIJh5Q&s" className="card-img-top" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4 shadow-sm">
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtHrE6l-Y4v00pvUYG5hATq6jdfFsyrOBqg&s" className="card-img-top"/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HomePage;
