import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import '../assets/style.css';
import { useNavigate } from 'react-router-dom';

const SettlementPage = () => {
    const [settlementPercentage, setSettlementPercentage] = useState(0);
    const [drpPercentage, setDrpPercentage] = useState(0);
    const [savingsPercentage, setSavingsPercentage] = useState(0);
    const [prepaidCreditAmount, setPrepaidCreditAmount] = useState('');
    const [bankName, setBankName] = useState('');
    const [prepaidCard, setPrepaidCard] = useState(false);

    const settlementAmount = (settlementPercentage / 100) * 10000; // Example calculation
    const drpPlanAmount = (drpPercentage / 100) * 5000; // Example calculation
    const savingsPlanAmount = (savingsPercentage / 100) * 3000; // Example calculation
    const monthlyTotalPay = settlementAmount + drpPlanAmount + savingsPlanAmount; // Example calculation
    const navigate = useNavigate();

    return (
        <Container fluid className="settlement-page-container">
            <Row className="justify-content-center align-items-center h-100">
                <Col md={10} lg={5} className='modiclass'>
                    <Card className="settlement-page-card">
                        <Card.Body>
                            <h2 className="text-center mb-4 pt-2">Settlement Amount</h2>
                            <Form.Group controlId="formSettlementPercentage">
                                <Form.Label>Select Settle Percentage</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={settlementPercentage}
                                    onChange={(e) => setSettlementPercentage(Number(e.target.value))}
                                >
                                    <option value={0}>0%</option>
                                    <option value={10}>10%</option>
                                    <option value={20}>20%</option>
                                    <option value={30}>30%</option>
                                    <option value={40}>40%</option>
                                    <option value={50}>50%</option>
                                </Form.Control>
                                <p className="mt-2 text-info">Settlement Amount: ₹{settlementAmount.toFixed(2)}</p>
                            </Form.Group>
                            <hr />
                            <h3 className="text-center mb-4">Debt Relief Plan (DRP)</h3>
                            <Form.Group controlId="formDrpPercentage">
                                <Form.Label>Select DRP Percentage</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={drpPercentage}
                                    onChange={(e) => setDrpPercentage(Number(e.target.value))}
                                >
                                    <option value={0}>0%</option>
                                    <option value={10}>10%</option>
                                    <option value={20}>20%</option>
                                    <option value={30}>30%</option>
                                    <option value={40}>40%</option>
                                    <option value={50}>50%</option>
                                </Form.Control>
                                <p className="mt-2 text-info">DRP Plan Amount: ₹{drpPlanAmount.toFixed(2)}</p>
                                <p className="text-info">Months to Pay: 12</p>
                            </Form.Group>
                            <hr />
                            <h3 className="text-center mb-4">Savings Plan</h3>
                            <Form.Group controlId="formSavingsPercentage">
                                <Form.Label>Select Savings Percentage</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={savingsPercentage}
                                    onChange={(e) => setSavingsPercentage(Number(e.target.value))}
                                >
                                    <option value={0}>0%</option>
                                    <option value={10}>10%</option>
                                    <option value={20}>20%</option>
                                    <option value={30}>30%</option>
                                    <option value={40}>40%</option>
                                    <option value={50}>50%</option>
                                </Form.Control>
                                <p className="mt-2 text-info">Savings Plan Amount: ₹{savingsPlanAmount.toFixed(2)}</p>
                            </Form.Group>
                            <hr />
                            <h3 className="text-center mb-4">Prepaid Focused Card</h3>
                            <Form.Group controlId="formPrepaidCreditAmount">
                                <Form.Label>Prepaid Credit Amount (INR)</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={prepaidCreditAmount}
                                    onChange={(e) => setPrepaidCreditAmount(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBankName">
                                <Form.Label>Bank Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={bankName}
                                    onChange={(e) => setBankName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formPrepaidCard" className='mt-4'>
                                <Form.Check
                                    type="checkbox"
                                    label="Do you want Prepaid Focused Card?"
                                    checked={prepaidCard}
                                    onChange={(e) => setPrepaidCard(e.target.checked)}
                                />
                            </Form.Group>
                            <hr />
                            <h3 className="text-center mb-4">Monthly Total Pay</h3>
                            <p className="mt-2 text-info text-center">Monthly Total Pay: ₹{monthlyTotalPay.toFixed(2)}</p>
                            <hr />

<h3 className="text-center">You are almost good to go!</h3>
<p className="text-center">Click the button below to proceed to the final steps of your setup.</p>
<Button variant="primary" onClick={() => navigate('/activity-page')}>
    Proceed to Final Steps
</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SettlementPage;
