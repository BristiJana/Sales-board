// src/components/MonthlyIncome.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import '../assets/style.css';

const MonthlyIncome = () => {
    const [salary, setSalary] = useState(0);
    const [businessIncome, setBusinessIncome] = useState(0);
    const [otherIncome, setOtherIncome] = useState(0);
    const [familySupport, setFamilySupport] = useState(0);

    const totalMonthlyIncome = salary + businessIncome + otherIncome + familySupport;

    return (
        <Container fluid className="monthly-income-container">
            <Row className="justify-content-center">
                <Col md={10}>
                    <Card className="monthly-income-card">
                        <Card.Body>
                            <h3>Monthly Income</h3>
                            <Form>
                                <Form.Group controlId="formSalary">
                                    <Form.Label>Salary</Form.Label>
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
                                    <Form.Label>Business Income</Form.Label>
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
                                    <Form.Label>Other Income</Form.Label>
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
                                    <Form.Label>Family Support</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>₹</InputGroup.Text>
                                        <Form.Control
                                            type="number"
                                            value={familySupport}
                                            onChange={(e) => setFamilySupport(Number(e.target.value))}
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <div className="total-monthly-income">
                                    <p className='mb-0'>Total Monthly Income: ₹{totalMonthlyIncome.toFixed(2)}</p>
                                </div>
                                <Button variant="primary" className="mt-3" style={{paddingLeft:"60px",paddingRight:"60px"}}>
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

export default MonthlyIncome;
