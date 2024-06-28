import React from 'react';
import { Container, Row, Col, Button, Table, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/style.css';

const StepThreePage = () => {
    const location = useLocation();
    const { totalDebtsOutstanding,totalEMISecured,totalIncome,totalLifestyleExpenses,totalLivingExpenses } = location.state;
    const navigate = useNavigate();

    const monthlyTakeHomeIncome = totalIncome;
    const securedLoanEMI = totalEMISecured;
    const livingExpenses = totalLivingExpenses;
    const lifestyleExpenses = totalLifestyleExpenses;

    const totalFundsForDebtSolution = monthlyTakeHomeIncome - (securedLoanEMI + livingExpenses + lifestyleExpenses);
    const diPercentage = totalFundsForDebtSolution > 0 ? ((totalFundsForDebtSolution / monthlyTakeHomeIncome) * 100).toFixed(2) : 0;

    const handleSet = () => {
        navigate('/profile');
    };

    const handleLogout = () => {
        navigate('/login-signup');
    };

    const navigateToStepTwo = () => {
        navigate('/living-exp',{
            state: {
                totalDebtsOutstanding
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
                        <h1 className="summary-heading">Summary of Income & Expenditure Information</h1>

                        <Table striped bordered hover className="mt-3 text-white mb-5">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Amount (INR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Monthly Take Home Income</td>
                                    <td>{monthlyTakeHomeIncome.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Secured Loan EMI</td>
                                    <td>{securedLoanEMI.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Living Expenses</td>
                                    <td>{livingExpenses.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Lifestyle Expenses</td>
                                    <td>{lifestyleExpenses.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td><strong>Total Funds Available for Debt Solution (Disposable Income – DI)</strong></td>
                                    <td><strong>{totalFundsForDebtSolution.toFixed(2)}</strong></td>
                                </tr>
                                <tr>
                                    <td><strong>% of Available Income</strong></td>
                                    <td><strong>{diPercentage}%</strong></td>
                                </tr>
                            </tbody>
                        </Table>

                        <Button variant="primary" className="mt-4" onClick={navigateToStepTwo}>
                            Continue to Final Step
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default StepThreePage;

