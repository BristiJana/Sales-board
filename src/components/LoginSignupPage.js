import React, { useState, useRef } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import app from "./firbase_config";
import { getAuth, RecaptchaVerifier ,signInWithPhoneNumber} from "firebase/auth";

const auth = getAuth(app);
const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verifybutton,setverifybutton]=useState(false);
  const [verifyotp,setverifyotp]=useState(false);
  const [otp, setOtp] = useState(Array(5).fill(''));
  const [validated, setValidated] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const navigate = useNavigate();

  const otpRefs = useRef([]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      setverifybutton(value.length === 10);
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

  const handleLogin = async (emailOrPhone, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        emailOrPhone,
        password,
      });
      alert('Login successful!');
      console.log(response);
      const { name, id } = response.data.data;
      navigate("/dashboard", {
        state: {
          value: name,
          value1: id,
        },
      });
    } catch (error) {
      console.error('Login error:', error);
      alert(error.response.data.message);
    }
  };
  const handleSendOTP = () => {
    console.log(phoneNumber);
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'normal',
      'callback': (response) => {
       console.log("calleddd")
      },
      'expired-callback': () => {
       console.log("errror")
      }
  });
}
  const againHandle =()=>{
    const phoneNumber = "+91"+ phoneNumber;
    console.log("come")
const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      alert("Otp Sent");
      setverifyotp(true)
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });

  }

  const handleSignup = async (name, email, password, phoneNumber) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        name,
        email,
        password,
        phoneNumber,
      });
      alert('Signup successful!');
      setName('');
    setEmail('');
    setPassword('');
    setPhoneNumber('');
    setverifybutton(false);
    } catch (error) {
      console.error('Signup error:', error);
      alert(error.response.data.message);
    }
  };

  const handleOtpVerification = () => {
  const enteredOtp = otp.join('');
  window.confirmationResult.confirm(enteredOtp).then((result) => {
    // User signed in successfully.
    const user = result.user;
    alert("Verified");
    // ...
  }).catch((error) => {
    alert("Not Verified");
  });
};

  const handleLoginSignup = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const email = form.elements['formBasicEmail'].value;
      const password = form.elements['formBasicPassword'].value;
      if (isLogin) {
        handleLogin(emailOrPhone, password);
      } else {
        const name = form.elements['formBasicName'].value;
        const phoneNumber = form.elements['formBasicMobile'].value;
        console.log(name, email, password, phoneNumber);
        handleSignup(name, email, password, phoneNumber);
      }
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
                        <Form.Label style={{ color: "black" }}>Email/Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Email/Phone Number"value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)} required />
                        <Form.Control.Feedback type="invalid">Email/Phone Number is required.</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ color: "black" }}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" required />
                        <Form.Control.Feedback type="invalid">Password is required.</Form.Control.Feedback>
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
                    <div id="recaptcha-container"></div>
                    <Form noValidate validated={validated} onSubmit={handleLoginSignup}>
                      <Form.Group controlId="formBasicName">
                        <Form.Label style={{ color: "black" }}>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter full name" required  value={name}
    onChange={(e) => setName(e.target.value)} />
                        <Form.Control.Feedback type="invalid">Name is required.</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ color: "black" }}>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required value={email}
    onChange={(e) => setEmail(e.target.value)}/>
                        <Form.Control.Feedback type="invalid">Email is required.</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ color: "black" }}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" required value={password}
    onChange={(e) => setPassword(e.target.value)}/>
                        <Form.Control.Feedback type="invalid">Password is required.</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="formBasicMobile">
                        <Form.Label style={{ color: "black" }}>Mobile number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter mobile number"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">Mobile number is required.</Form.Control.Feedback>
                        {verifybutton &&(<Button variant="primary" className="w-100 mt-3" onClick={handleSendOTP}>
                            Verify 
                          </Button>)}
                      </Form.Group>
                      {verifyotp && (
                        <Form.Group controlId="formBasicOTP">
                          <Form.Label style={{ color: "black" }}>OTP</Form.Label>
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
                          <Button variant="primary" className="w-100 mt-3" onClick={handleOtpVerification}>
                            Verify OTP
                          </Button>
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
