import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Navbar, Nav, Dropdown, Form, Button, InputGroup, Modal } from 'react-bootstrap';
import { FaUserCircle, FaPlus } from 'react-icons/fa';
import '../assets/style.css';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [selectedEmi, setSelectedEmi] = useState('');
    const [monthlyIncome, setMonthlyIncome] = useState('');

    const navigate = useNavigate();
    const handleSet = () => {
        // Handle logout logic
        navigate('/profile');
    };

    const handleLogout = () => {
        // Handle logout logic
        navigate('/login-signup');
    };

    const handleAddButtonClick = () => {
        setShowModal(true);
    };
    const handleAddButtonClick1 = () => {
        setShowModal1(true);
    };

    const handleOptionSelect = (option) => {
        setMonthlyIncome(option);
        setShowModal(false);
    };
    const handleOptionSelect1 = (option) => {
        setSelectedEmi(option);
        setShowModal1(false);
    };
    const handleFormSubmit = (e) => {
        
        navigate('/otp-verification');
    };
useEffect(()=>{

},[monthlyIncome,selectedEmi])
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">MyApp</Navbar.Brand>
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
            <Container fluid className="dashboard-container mt-3">
                <Row>
                    <Col md={12}>
                        <h1>Welcome Bristi!</h1>
                        <p>Let's get started with some quick information.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Quick Information</Card.Title>
                                <Card.Text>
                                    Be assured, your data is in safe hands.
                                </Card.Text>
                                <Form onSubmit={handleFormSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formMonthlyIncome">
                                            <Form.Label>Monthly Income</Form.Label>
                                            <InputGroup>
                                                <Button variant="outline-primary" onClick={handleAddButtonClick}>
                                                    <FaPlus />
                                                </Button>
                                                <InputGroup.Text>{monthlyIncome}</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formOtherIncome">
                                            <Form.Label>Other Income</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text>₹</InputGroup.Text>
                                                <Form.Control type="number" placeholder="0" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formTotalIncome">
                                            <Form.Label>Total Income</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text>₹</InputGroup.Text>
                                                <Form.Control type="number" placeholder="0"  />
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formLivingExpenses">
                                            <Form.Label>Living Expenses</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text>₹</InputGroup.Text>
                                                <Form.Control type="number" placeholder="0" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formMiscellaneousExpenses">
                                            <Form.Label>Miscellaneous Expenses</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text>₹</InputGroup.Text>
                                                <Form.Control type="number" placeholder="0" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formTotalExpenses">
                                            <Form.Label>Total Expenses</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text>₹</InputGroup.Text>
                                                <Form.Control type="number" placeholder="0"/>
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        
                                        <Form.Group as={Col} controlId="formSecuredLoanEMI">
                                            <Form.Label>Secured Loan EMI</Form.Label>
                                            <InputGroup>
                                                <Button variant="outline-primary" onClick={handleAddButtonClick1}>
                                                    <FaPlus />
                                                </Button>
                                                <InputGroup.Text>{selectedEmi}</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formAutoLoanEMI">
                                            <Form.Label>Auto Loan EMI</Form.Label>
                                            <Form.Control type="number" placeholder="0" />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formTotalSecuredLoanEMI">
                                            <Form.Label>Total Secured Loan EMI</Form.Label>
                                            <Form.Control type="number" placeholder="0"  />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formCreditCardPayments">
                                            <Form.Label>Credit Card Min. Payments</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text>₹</InputGroup.Text>
                                                <Form.Control type="number" placeholder="0" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formPersonalLoanEMI">
                                            <Form.Label>Personal Loan EMI(s)</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text>₹</InputGroup.Text>
                                                <Form.Control type="number" placeholder="0" />
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formTotalUnsecuredLoanPayments">
                                            <Form.Label>Total Unsecured Loan Payments</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text>₹</InputGroup.Text>
                                                <Form.Control type="number" placeholder="0" readOnly />
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    {/* Other rows */}
                                    <Button variant="primary" className="mt-3" onClick={handleFormSubmit}>
                                        Let's get you qualified
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Option</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Select onChange={(e) => handleOptionSelect(e.target.value)}>
                        <option value="">Select Option</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </Form.Select>
                </Modal.Body>
            </Modal>
            <Modal show={showModal1} onHide={() => setShowModal1(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Option</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Select onChange={(e) => handleOptionSelect1(e.target.value)}>
                        <option value="">Select Option</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </Form.Select>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Dashboard;
