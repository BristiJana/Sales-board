import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Form } from 'react-bootstrap';
import '../assets/style.css';
import { useNavigate } from 'react-router-dom';
const BudgetInformation = () => {
    const [loans, setLoans] = useState([{
        id: 1,
        loanID: '',
        loanCompanyName: '',
        loanType: '',
        loanAmount: '',
        emi: '',
        lastPaymentDate: '',
        outstandingLoanAmount: ''
    }]);

    const addLoanRow = () => {
        setLoans([...loans, {
            id: loans.length + 1,
            loanID: '',
            loanCompanyName: '',
            loanType: '',
            loanAmount: '',
            emi: '',
            lastPaymentDate: '',
            outstandingLoanAmount: ''
        }]);
    };
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/settlement');
    };
    const deleteLoanRow = (index) => {
        setLoans(loans.filter((_, i) => i !== index));
    };

    const handleLoanChange = (index, field, value) => {
        const newLoans = loans.map((loan, i) => {
            if (i === index) {
                return { ...loan, [field]: value };
            }
            return loan;
        });
        setLoans(newLoans);
    };

    const totalOutstandingLoanAmount = loans.reduce((total, loan) => total + parseFloat(loan.outstandingLoanAmount || 0), 0);

    return (
        <Container fluid className="budget-information-container">
            <Row className="justify-content-center">
                <Col md={12}>
                    <Card className="budget-information-card">
                        <Card.Body>
                            <h2 className="text-center">Budget Information</h2>
                            <hr />
                            <Row>
                                <Col md={6}>
                                    <h5>Total Monthly Income</h5>
                                    <p>₹ Amount</p>
                                </Col>
                                <Col md={6}>
                                    <h5>Total Secured Loan</h5>
                                    <p>₹ Amount</p>
                                </Col>
                                <Col md={6}>
                                    <h5>Total Living Expenses</h5>
                                    <p>₹ Amount</p>
                                </Col>
                                <Col md={6}>
                                    <h5>Total Lifestyle Expenses</h5>
                                    <p>₹ Amount</p>
                                </Col>
                                <Col md={12}>
                                    <h5>Fund Available For DRP</h5>
                                    <p>₹ Amount</p>
                                </Col>
                            </Row>
                            <hr />
                            <h3>Bank/Loan Details</h3>
                            <Table striped bordered hover className="loan-table">
                                <thead>
                                    <tr>
                                        <th>Loan ID/Number</th>
                                        <th>Loan Company Name</th>
                                        <th>Loan Type</th>
                                        <th>Loan Amount (INR)</th>
                                        <th>EMI (INR)</th>
                                        <th>Last Payment Date</th>
                                        <th>Outstanding Loan Amount (INR)</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loans.map((loan, index) => (
                                        <tr key={loan.id}>
                                            <td>
                                                <Form.Control
                                                    type="text"
                                                    value={loan.loanID}
                                                    onChange={(e) => handleLoanChange(index, 'loanID', e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <Form.Control
                                                    type="text"
                                                    value={loan.loanCompanyName}
                                                    onChange={(e) => handleLoanChange(index, 'loanCompanyName', e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <Form.Control
                                                    type="text"
                                                    value={loan.loanType}
                                                    onChange={(e) => handleLoanChange(index, 'loanType', e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <Form.Control
                                                    type="number"
                                                    value={loan.loanAmount}
                                                    onChange={(e) => handleLoanChange(index, 'loanAmount', e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <Form.Control
                                                    type="number"
                                                    value={loan.emi}
                                                    onChange={(e) => handleLoanChange(index, 'emi', e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <Form.Control
                                                    type="date"
                                                    value={loan.lastPaymentDate}
                                                    onChange={(e) => handleLoanChange(index, 'lastPaymentDate', e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <Form.Control
                                                    type="number"
                                                    value={loan.outstandingLoanAmount}
                                                    onChange={(e) => handleLoanChange(index, 'outstandingLoanAmount', e.target.value)}
                                                />
                                            </td>
                                            <td>
                                                <Button variant="danger" className='mt-0' onClick={() => deleteLoanRow(index)}>Delete</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Button variant="success" onClick={addLoanRow}>
                                Add More Loan Details
                            </Button>
                            <hr />
                            <h5>Total Outstanding Loan Amount: ₹{totalOutstandingLoanAmount.toFixed(2)}</h5>
                            <Button variant="primary" onClick={handleNext}>Next</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BudgetInformation;
