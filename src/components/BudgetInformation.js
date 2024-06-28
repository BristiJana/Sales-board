import React from 'react';
import { Container, Row, Col, Button, Table, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/style.css';

const BudgetInformation = () => {
    const location = useLocation();
    const { totalOutstandingSecured, totalEMISecured, totalOutstandingUnsecured, totalEMIUnsecured } = location.state;
    const navigate = useNavigate();

    
    const totalDebtsOutstanding = totalOutstandingSecured + totalOutstandingUnsecured;

    const totalMonthlyEmi = totalEMISecured + totalEMIUnsecured;

    const handleSet = () => {
        navigate('/profile');
    };

    const handleLogout = () => {
        navigate('/login-signup');
    };

    const navigateToStepTwo = () => {
        navigate('/monthly-income', {
            state: {
                totalDebtsOutstanding,
                totalEMISecured
            }
        });
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

            <Container fluid className="summary-container text-center text-white">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h1 className="summary-heading">Summary of Debts</h1>

                        <Table striped bordered hover className="mt-3 text-white mb-5">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Total Amount (INR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Priority Debts (Secured)</td>
                                    <td>{totalOutstandingSecured.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Unsecured Debts</td>
                                    <td>{totalOutstandingUnsecured.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td><strong>Total Debts Outstanding</strong></td>
                                    <td><strong>{totalDebtsOutstanding.toFixed(2)}</strong></td>
                                </tr>
                            </tbody>
                        </Table>

                        <Table striped bordered hover className="mt-3 text-white">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Total EMI (INR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Priority EMI</td>
                                    <td>{totalEMISecured.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Unsecured EMI</td>
                                    <td>{totalEMIUnsecured.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td><strong>Total Monthly EMI</strong></td>
                                    <td><strong>{totalMonthlyEmi.toFixed(2)}</strong></td>
                                </tr>
                            </tbody>
                        </Table>

                        <Button variant="primary" className="mt-4" onClick={navigateToStepTwo}>
                            Continue to Step Two
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BudgetInformation;
