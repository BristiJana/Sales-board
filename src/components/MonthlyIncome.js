import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Navbar, Nav, Dropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../assets/style.css";

const MonthlyIncome = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [income, setIncome] = useState({
    salary: "",
    business: "",
    other: "",
    familySupport: "",
  });

  const [livingExpenses, setLivingExpenses] = useState({
    rent: "",
    food: "",
    electricity: "",
    gas: "",
    phone: "",
    otherUtilities: "",
  });

  const [lifestyleExpenses, setLifestyleExpenses] = useState({
    travel: "",
    digital: "",
    dining: "",
    houseHelp: "",
    outing: "",
  });

  const navigate = useNavigate();

  const sum = (obj) => Object.values(obj).reduce((acc, item) => acc + parseFloat(item || 0), 0);

  const totalIncome = sum(income);
  const totalLivingExpenses = sum(livingExpenses);
  const totalLifestyleExpenses = sum(lifestyleExpenses);

  const handleSet = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    navigate("/login-signup");
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/sales-board");
    }
  };

  const handleInputChange = (e, setState, state) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
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

      <Container fluid className="step-two-container text-center text-white">
        <Row className="justify-content-center">
          <Col md={8}>
            {currentStep === 1 && (
              <div className="income-section">
                <h1 className="section-heading">Your Monthly Income</h1>
                <Form>
                  <Form.Group controlId="salary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                      type="number"
                      name="salary"
                      value={income.salary}
                      onChange={(e) => handleInputChange(e, setIncome, income)}
                    />
                  </Form.Group>
                  <Form.Group controlId="business" className="mt-3">
                    <Form.Label>Business Income</Form.Label>
                    <Form.Control
                      type="number"
                      name="business"
                      value={income.business}
                      onChange={(e) => handleInputChange(e, setIncome, income)}
                    />
                  </Form.Group>
                  <Form.Group controlId="other" className="mt-3">
                    <Form.Label>Other Income</Form.Label>
                    <Form.Control
                      type="number"
                      name="other"
                      value={income.other}
                      onChange={(e) => handleInputChange(e, setIncome, income)}
                    />
                  </Form.Group>
                  <Form.Group controlId="familySupport" className="mt-3">
                    <Form.Label>Family Support</Form.Label>
                    <Form.Control
                      type="number"
                      name="familySupport"
                      value={income.familySupport}
                      onChange={(e) => handleInputChange(e, setIncome, income)}
                    />
                  </Form.Group>
                  <div className="mt-4">
                    <strong>Total Monthly Income: {totalIncome.toFixed(2)} INR</strong>
                  </div>
                  <Button variant="primary" className="mt-4" onClick={handleNextStep}>
                    Next: Living Expenses
                  </Button>
                </Form>
              </div>
            )}

            {currentStep === 2 && (
              <div className="expenses-section">
                <h1 className="section-heading">Living Expenses</h1>
                <Form>
                  <Form.Group controlId="rent">
                    <Form.Label>Rent/Maintenance</Form.Label>
                    <Form.Control
                      type="number"
                      name="rent"
                      value={livingExpenses.rent}
                      onChange={(e) => handleInputChange(e, setLivingExpenses, livingExpenses)}
                    />
                  </Form.Group>
                  <Form.Group controlId="food" className="mt-3">
                    <Form.Label>Food Expenses</Form.Label>
                    <Form.Control
                      type="number"
                      name="food"
                      value={livingExpenses.food}
                      onChange={(e) => handleInputChange(e, setLivingExpenses, livingExpenses)}
                    />
                  </Form.Group>
                  <Form.Group controlId="electricity" className="mt-3">
                    <Form.Label>Electricity Bill</Form.Label>
                    <Form.Control
                      type="number"
                      name="electricity"
                      value={livingExpenses.electricity}
                      onChange={(e) => handleInputChange(e, setLivingExpenses, livingExpenses)}
                    />
                  </Form.Group>
                  <Form.Group controlId="gas" className="mt-3">
                    <Form.Label>Gas Bill</Form.Label>
                    <Form.Control
                      type="number"
                      name="gas"
                      value={livingExpenses.gas}
                      onChange={(e) => handleInputChange(e, setLivingExpenses, livingExpenses)}
                    />
                  </Form.Group>
                  <Form.Group controlId="phone" className="mt-3">
                    <Form.Label>Phone Bill</Form.Label>
                    <Form.Control
                      type="number"
                      name="phone"
                      value={livingExpenses.phone}
                      onChange={(e) => handleInputChange(e, setLivingExpenses, livingExpenses)}
                    />
                  </Form.Group>
                  <Form.Group controlId="otherUtilities" className="mt-3">
                    <Form.Label>Other Utilities</Form.Label>
                    <Form.Control
                      type="number"
                      name="otherUtilities"
                      value={livingExpenses.otherUtilities}
                      onChange={(e) => handleInputChange(e, setLivingExpenses, livingExpenses)}
                    />
                  </Form.Group>
                  <div className="mt-4">
                    <strong>Total Living Expenses: {totalLivingExpenses.toFixed(2)} INR</strong>
                  </div>
                  <Button variant="primary" className="mt-4" onClick={handleNextStep}>
                    Next: Lifestyle Expenses
                  </Button>
                </Form>
              </div>
            )}

            {currentStep === 3 && (
              <div className="expenses-section">
                <h1 className="section-heading">Lifestyle Expenses</h1>
                <Form>
                  <Form.Group controlId="travel">
                    <Form.Label>Travel/Fuel</Form.Label>
                    <Form.Control
                      type="number"
                      name="travel"
                      value={lifestyleExpenses.travel}
                      onChange={(e) => handleInputChange(e, setLifestyleExpenses, lifestyleExpenses)}
                    />
                  </Form.Group>
                  <Form.Group controlId="digital" className="mt-3">
                    <Form.Label>Digital Subscription</Form.Label>
                    <Form.Control
                      type="number"
                      name="digital"
                      value={lifestyleExpenses.digital}
                      onChange={(e) => handleInputChange(e, setLifestyleExpenses, lifestyleExpenses)}
                    />
                  </Form.Group>
                  <Form.Group controlId="dining" className="mt-3">
                    <Form.Label>Dining Out</Form.Label>
                    <Form.Control
                      type="number"
                      name="dining"
                      value={lifestyleExpenses.dining}
                      onChange={(e) => handleInputChange(e, setLifestyleExpenses, lifestyleExpenses)}
                    />
                  </Form.Group>
                  <Form.Group controlId="houseHelp" className="mt-3">
                    <Form.Label>House Help</Form.Label>
                    <Form.Control
                      type="number"
                      name="houseHelp"
                      value={lifestyleExpenses.houseHelp}
                      onChange={(e) => handleInputChange(e, setLifestyleExpenses, lifestyleExpenses)}
                    />
                  </Form.Group>
                  <Form.Group controlId="outing" className="mt-3">
                    <Form.Label>Outing</Form.Label>
                    <Form.Control
                      type="number"
                      name="outing"
                      value={lifestyleExpenses.outing}
                      onChange={(e) => handleInputChange(e, setLifestyleExpenses, lifestyleExpenses)}
                    />
                  </Form.Group>
                  <div className="mt-4">
                    <strong>Total Lifestyle Expenses: {totalLifestyleExpenses.toFixed(2)} INR</strong>
                  </div>
                  <Button variant="primary" className="mt-4" onClick={handleNextStep}>
                    Continue to Summary
                  </Button>
                </Form>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MonthlyIncome;
