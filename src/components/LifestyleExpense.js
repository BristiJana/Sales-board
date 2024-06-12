import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/style.css';

const LifestyleExpense= () => {
    const [salary, setSalary] = useState();
    const [businessIncome, setBusinessIncome] = useState();
    const [otherIncome, setOtherIncome] = useState();
    const [familySupport, setFamilySupport] = useState();
    const [familySupport1, setFamilySupport1] = useState();
    const navigate = useNavigate();

    const totalMonthlyIncome = salary + businessIncome + otherIncome + familySupport+familySupport1;

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        // Verify OTP logic
        // If OTP is correct, redirect to dashboard or another page
        navigate('/budget-information');
    };
    return (
        <Container className="monthly-income-container">
            <Row className="justify-content-center align-items-center w-100 h-100">
                <Col md={10} className="d-flex justify-content-center">
                    <Card className="monthly-income-card">
                        <Card.Body>
                            <h3>Lifestyle Expenses</h3>
                            <Form>
                                <Form.Group controlId="formSalary">
                                    <Form.Label>Travel/Fuel</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>₹</InputGroup.Text>
                                        <Form.Control
                                            type="number"
                                            value={salary}
                                            onChange={(e) => setSalary(Number(e.target.value))}
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group controlId="formBusinessIncome">
                                    <Form.Label>Digital Subscription</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>₹</InputGroup.Text>
                                        <Form.Control
                                            type="number"
                                            value={businessIncome}
                                            onChange={(e) => setBusinessIncome(Number(e.target.value))}
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group controlId="formOtherIncome">
                                    <Form.Label>Dinig Out</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>₹</InputGroup.Text>
                                        <Form.Control
                                            type="number"
                                            value={otherIncome}
                                            onChange={(e) => setOtherIncome(Number(e.target.value))}
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group controlId="formFamilySupport">
                                    <Form.Label>House Help</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>₹</InputGroup.Text>
                                        <Form.Control
                                            type="number"
                                            value={familySupport}
                                            onChange={(e) => setFamilySupport(Number(e.target.value))}
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group controlId="formOtherIncome">
                                    <Form.Label>Outing</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>₹</InputGroup.Text>
                                        <Form.Control
                                            type="number"
                                            value={familySupport1}
                                            onChange={(e) => setFamilySupport1(Number(e.target.value))}
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <div className="total-monthly-income">
                                    <p className='mb-0'>Total Lifestyle Expenses: ₹{totalMonthlyIncome.toFixed(2)}</p>
                                </div>
                                <Button variant="primary" className="mt-3" style={{ paddingLeft: "60px", paddingRight: "60px" }} onClick={handleOtpSubmit}>
                                    Next
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default LifestyleExpense;
