import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Table, Navbar, Nav, Dropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import {useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/style.css";

const OTPVerification = () => {
  const [debts, setDebts] = useState([]);
  const location = useLocation();
    const { value,value1 } = location.state;
  const navigate = useNavigate();

  const addDebtRow = () => {
    setDebts([
      ...debts,
      { id: debts.length, creditorName: "", debtType: "", debtOutstanding: "", emi: "", missedEmi: "", secured: false },
    ]);
  };

  const handleSet = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    navigate("/login-signup");
  };

  useEffect(() => {
   
  },[debts]);
  const handleDebtChange = (index, field, value) => {
    const newDebts = debts.map((debt, i) =>
      i === index
        ? {
            ...debt,
            [field]: value,
            // Set secured flag based on debtType
            ...(field === "debtType" && {secured: value.includes("Secured")}),
          }
        : debt
    );
    console.log(newDebts)
    setDebts(newDebts);
  };

  const deleteDebtRow = (index) => {
    const newDebts = debts.filter((_, i) => i !== index);
    setDebts(newDebts);
  };

  const navigateToSummary =  async() => {
    // Separate secured and unsecured debts
    console.log(debts)
    const securedDebts = debts.filter((debt) => debt.secured);
    const unsecuredDebts = debts.filter((debt) => !debt.secured);

    // Calculate total outstanding and total EMI for secured and unsecured debts
    const totalOutstandingSecured = securedDebts.reduce((total, debt) => total + parseFloat(debt.debtOutstanding || 0), 0);
    const totalEMISecured = securedDebts.reduce((total, debt) => total + parseFloat(debt.emi || 0), 0);

    const totalOutstandingUnsecured = unsecuredDebts.reduce((total, debt) => total + parseFloat(debt.debtOutstanding || 0), 0);
    const totalEMIUnsecured = unsecuredDebts.reduce((total, debt) => total + parseFloat(debt.emi || 0), 0);

    // Navigate to the next page with the debts information
    const userId = value1;
    try {
      // Make a POST request to save debts data
      await axios.post('http://localhost:5000/api/auth/debts', { userId, debts });
      console.log('Debts data saved successfully.');
  
      console.log(totalOutstandingSecured,
        totalEMISecured,
        totalOutstandingUnsecured,
        totalEMIUnsecured)
      navigate("/budget-information", {
        state: {
          totalOutstandingSecured,
          totalEMISecured,
          totalOutstandingUnsecured,
          totalEMIUnsecured,
        },
      });
    } catch (error) {
      console.error('Error saving debts data:', error);
      alert('Failed to save debts data.');
    }
  
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
              <Form.Label className="mb-4" style={{ fontSize: "20px", fontWeight: "bold" }}>
                Number of debts
              </Form.Label>
              <Form.Control
                as="select"
                onChange={(e) =>
                  setDebts(
                    Array.from({ length: parseInt(e.target.value) || 0 }, (_, i) => ({
                      id: i,
                      creditorName: "",
                      debtType: "",
                      debtOutstanding: "",
                      emi: "",
                      missedEmi: "",
                      secured: false,
                    }))
                  )
                }
              >
                {[...Array(11).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
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
                        onChange={(e) => handleDebtChange(index, "creditorName", e.target.value)}
                      />
                    </td>
                    <td>
                      <Form.Control
                        as="select"
                        value={debt.debtType}
                        onChange={(e) => handleDebtChange(index, "debtType", e.target.value)}
                      >
                        <option value="Credit Card – Unsecured">Credit Card – Unsecured</option>
                        <option value="Personal Loan – Unsecured">Personal Loan – Unsecured</option>
                        <option value="Overdraft - Secured">Overdraft - Secured</option>
                        <option value="Business Loan – Secured">Business Loan – Secured</option>
                        <option value="Education Loan – Unsecured">Education Loan – Unsecured</option>
                        <option value="Store Card – Unsecured">Store Card – Unsecured</option>
                        <option value="Pay Day Loan – Unsecured">Pay Day Loan – Unsecured</option>
                        <option value="Consumer Durable – Unsecured">Consumer Durable – Unsecured</option>
                        <option value="Digital Product – Unsecured">Digital Product – Unsecured</option>
                        <option value="Credit Line – Unsecured">Credit Line – Unsecured</option>
                        <option value="Bullet Loan – Unsecured">Bullet Loan – Unsecured</option>
                        <option value="Term Loan – Unsecured">Term Loan – Unsecured</option>
                        <option value="Business Loan Unsecured – Unsecured">Business Loan Unsecured – Unsecured</option>
                        <option value="LAP – Secured">LAP – Secured</option>
                        <option value="Secured Overdraft – Secured">Secured Overdraft – Secured</option>
                        <option value="Unsecured Overdraft – Unsecured">Unsecured Overdraft – Unsecured</option>
                        <option value="Emergency Credit Line Guarantee Scheme – Unsecured">
                          Emergency Credit Line Guarantee Scheme – Unsecured
                        </option>
                      </Form.Control>
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        value={debt.debtOutstanding}
                        onChange={(e) => handleDebtChange(index, "debtOutstanding", e.target.value)}
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        value={debt.emi}
                        onChange={(e) => handleDebtChange(index, "emi", e.target.value)}
                        
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        value={debt.missedEmi}
                        onChange={(e) => handleDebtChange(index, "missedEmi", e.target.value)}
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
