import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../assets/style.css';

const OTPVerification = () => {
    const [debts, setDebts] = useState([]);
    const navigate = useNavigate();

    const addDebtRow = () => {
        setDebts([...debts, { id: debts.length, creditorName: '', debtType: '', debtOutstanding: '', emi: '', missedEmi: '' }]);
    };

    const handleDebtChange = (index, field, value) => {
        const newDebts = debts.map((debt, i) => (i === index ? { ...debt, [field]: value } : debt));
        setDebts(newDebts);
    };

    const deleteDebtRow = (index) => {
        const newDebts = debts.filter((_, i) => i !== index);
        setDebts(newDebts);
    };

    const handleSet = () => {
        navigate('/profile');
    };

    const handleLogout = () => {
        navigate('/login-signup');
    };

    const navigateToSummary = () => {
        navigate('/budget-information', { state: { debts } });
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Debt Free Solutions</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    <FaUserCircle size={24} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={handleSet}>Setting</Dropdown.Item>
                                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid className="debts-container text-center text-white">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h1 className="debts-heading">Tell us about your debts</h1>
                        <p className="debts-subheading">Your Debts – Add your debts</p>

                        <Form.Group controlId="numberOfDebts" className="mb-5">
                            <Form.Label className='mb-4' style={{fontSize:"20px",fontWeight:"bold"}}>Number of debts</Form.Label>
                            <Form.Control as="select" onChange={(e) => setDebts(Array.from({ length: e.target.value }, (_, i) => ({ id: i, creditorName: '', debtType: '', debtOutstanding: '', emi: '', missedEmi: '' })))}>
                                {[...Array(11).keys()].map(num => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Button variant="success" onClick={addDebtRow}>
                            Add a new debt
                        </Button>

                        <Table striped bordered hover className="mt-3">
                            <thead>
                                <tr>
                                    <th>Creditor Name</th>
                                    <th>Type of Debt</th>
                                    <th>Debt Outstanding (INR)</th>
                                    <th>EMI (INR)</th>
                                    <th>Number of Missed EMI</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {debts.map((debt, index) => (
                                    <tr key={debt.id}>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                value={debt.creditorName}
                                                onChange={(e) => handleDebtChange(index, 'creditorName', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                value={debt.debtType}
                                                onChange={(e) => handleDebtChange(index, 'debtType', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="number"
                                                value={debt.debtOutstanding}
                                                onChange={(e) => handleDebtChange(index, 'debtOutstanding', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="number"
                                                value={debt.emi}
                                                onChange={(e) => handleDebtChange(index, 'emi', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="number"
                                                value={debt.missedEmi}
                                                onChange={(e) => handleDebtChange(index, 'missedEmi', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => deleteDebtRow(index)}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <Button variant="primary" className="mt-4" onClick={navigateToSummary}>
                            Continue to Summary
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default OTPVerification;
