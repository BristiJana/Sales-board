// src/components/OTPVerification.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/style.css';

const OTPVerification = () => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        // Verify OTP logic
        // If OTP is correct, redirect to dashboard or another page
        navigate('/monthly-income');
    };

    return (
        <Container fluid className="otp-container">
            <Row className="justify-content-center align-items-center h-100 w-100">
                <Col md={6}>
                    <Card className="otp-card">
                        <Card.Body>
                            <div className="otp-header">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGaADCkZwbprPNGJbt1CGk-_vCGUYe8eYWA&s" alt="Brand Logo" className="otp-logo" />
                                <h3>OTP Verification</h3>
                                <p>Please enter the OTP sent to your number:</p>
                                <h5>+91-8289039820 <i className="fas fa-edit"></i></h5>
                            </div>
                            <Form onSubmit={handleOtpSubmit}>
                                <Form.Group controlId="formOtp">
                                    <Form.Label>Enter OTP</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter OTP"
                                        value={otp}
                                        onChange={handleOtpChange}
                                        className="otp-input"
                                    />
                                </Form.Group>
                                <Button type="submit" variant="primary" className="mt-3 otp-button">
                                    Confirm <i className="fas fa-paper-plane"></i>
                                </Button>
                            </Form>
                            {/* <div className="resend-otp">
                                Resend OTP in <span>20 Sec</span>
                            </div> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default OTPVerification;
