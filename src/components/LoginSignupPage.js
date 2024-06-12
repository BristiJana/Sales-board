// src/components/LoginSignupPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/style.css';

const LoginSignupPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };
    const handleLoginSignup = (event) => {
        event.preventDefault();
        // Here you would normally handle the login/signup logic.
        // For this example, we'll just redirect to the dashboard.
        navigate('/dashboard');
    };
    return (
        <Container fluid className="login-signup-container">
            <Row className="h-100 w-100">
                <Col md={6} className="d-none d-md-flex flex-column justify-content-center align-items-center login-image-col">
                    <div className="text-center-first text-white">
                        <h1>Welcome to MyApp</h1>
                        <p>Your solution for awesome web applications</p>
                    </div>
                    <div className="login-image"></div>
                </Col>
                <Col md={6} className="form-col">
                    <div className="form-background">
                        <Card className="login-signup-card">
                            <Card.Body>
                                {isLogin ? (
                                    <>
                                        <h2 className="text-center mb-4">Login</h2>
                                        <Form onSubmit={handleLoginSignup}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicPassword" className="mt-3">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit" className="w-100 mt-3">
                                                Login
                                            </Button>
                                        </Form>
                                        <p className="text-center mt-3">
                                            Don't have an account? <a href="#!" onClick={toggleForm}>Sign Up</a>
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <h2 className="text-center mb-4">Sign Up</h2>
                                        <Form onSubmit={handleLoginSignup}>
                                            <Form.Group controlId="formBasicName">
                                                <Form.Label>Full Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter full name" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail" className="mt-3">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicPassword" className="mt-3">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit" className="w-100 mt-3">
                                                Sign Up
                                            </Button>
                                        </Form>
                                        <p className="text-center mt-3">
                                            Already have an account? <a href="#!" onClick={toggleForm}>Login</a>
                                        </p>
                                    </>
                                )}
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginSignupPage;
