import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [leadId, setLeadId] = useState('');
    const [leadName, setLeadName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();
    const handleSave = () => {
        // Handle save logic
        navigate('/dashboard')
    };

    const handleCancel = () => {
        // Handle cancel logic
        navigate('/dashboard')
    };

    return (
        <Container className="profile-container">
    <Row>
        <Col>
           
            <Form className="profile-form">
                        <Form.Group controlId="leadId">
                            <Form.Label>Lead Id</Form.Label>
                            <Form.Control type="text" value={leadId} onChange={(e) => setLeadId(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="leadName">
                            <Form.Label>Lead Name</Form.Label>
                            <Form.Control type="text" value={leadName} onChange={(e) => setLeadName(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="mobileNumber">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email Id</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="pincode">
                            <Form.Label>Pin code</Form.Label>
                            <Form.Control type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" value={state} onChange={(e) => setState(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                        </Form.Group>
                        <div className='mt-4'>
                        <Button variant="primary"  onClick={handleSave}>Save</Button>{' '}
                        <Button variant="secondary" onClick={handleCancel}>Cancel</Button></div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;
