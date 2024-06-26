import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../assets/style.css";

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpEnabled, setOtpEnabled] = useState(false);
  const [otp, setOtp] = useState(Array(5).fill(''));
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const otpRefs = useRef([]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      setOtpEnabled(value.length === 10);
    }
  };

  const handleOtpChange = (e, idx) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[idx] = value;
      setOtp(newOtp);

      if (value && idx < otpRefs.current.length - 1) {
        otpRefs.current[idx + 1].focus();
      }
    }
  };

  const handleLoginSignup = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      // Handle login/signup logic here.
      navigate("/dashboard");
    }
    setValidated(true);
  };

  return (
    <Container fluid className="login-signup-container">
      <Row className="h-100 w-100 mx-0">
        <Col md={6} className="d-none d-md-flex flex-column justify-content-center align-items-center login-image-col">
          <div className="text-center-first text-white">
            <h1 className="head">Welcome to Debt Free Solutions</h1>
            <p className="head-input">Debt Free Solutions ?</p>
            <p className="head-input">Stop creditors calls and visits ?</p>
            <p className="head-input">Stop them harassing you, your family and friends ?</p>
          </div>
          <div className="login-image"></div>
        </Col>
        <Col md={6} className="form-col pe-0">
          <div className="form-background">
            <Card className="login-signup-card">
              <Card.Body>
                {isLogin ? (
                  <>
                    <h2 className="text-center mb-4">Login</h2>
                    <Form noValidate validated={validated} onSubmit={handleLoginSignup}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Control.Feedback type="invalid">Email is required.</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formBasicMobile" className="mt-3">
                        <Form.Label>Mobile number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter mobile number"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">Mobile number is required.</Form.Control.Feedback>
                      </Form.Group>
                      <Button variant="primary" type="submit" className="w-100 mt-3">
                        Login
                      </Button>
                    </Form>
                    <p className="text-center mt-3">
                      Don't have an account?{" "}
                      <a href="#!" onClick={toggleForm}>
                        Sign Up
                      </a>
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form noValidate validated={validated} onSubmit={handleLoginSignup}>
                      <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter full name" required />
                        <Form.Control.Feedback type="invalid">Name is required.</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail" className="mt-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Control.Feedback type="invalid">Email is required.</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formBasicMobile" className="mt-3">
                        <Form.Label>Mobile number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter mobile number"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">Mobile number is required.</Form.Control.Feedback>
                      </Form.Group>
                      {otpEnabled && (
                        <Form.Group controlId="formBasicOTP" className="mt-3">
                          <Form.Label>OTP</Form.Label>
                          <div className="otp-inputs">
                            {otp.map((digit, idx) => (
                              <Form.Control
                                key={idx}
                                type="text"
                                maxLength="1"
                                className="otp-input"
                                value={digit}
                                onChange={(e) => handleOtpChange(e, idx)}
                                ref={(el) => (otpRefs.current[idx] = el)}
                                required
                              />
                            ))}
                          </div>
                          <Form.Control.Feedback type="invalid">OTP is required.</Form.Control.Feedback>
                        </Form.Group>
                      )}
                      <Button variant="primary" type="submit" className="w-100 mt-3">
                        Sign Up
                      </Button>
                    </Form>
                    <p className="text-center mt-3">
                      Already have an account?{" "}
                      <a href="#!" onClick={toggleForm}>
                        Login
                      </a>
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
