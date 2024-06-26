import React ,{useState} from 'react';
import { Container, Row, Col, Button, Table, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../assets/style.css';

const DebtFreePlansPage = () => {
    const navigate = useNavigate();
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleSet = () => {
        navigate('/profile');
    };

    const handleLogout = () => {
        navigate('/login-signup');
    };

    const handleNavigateToFinalPage = () => {
        if (selectedPlan) {

            // navigate(`/final-page/${selectedPlan}`); // Replace with actual path to the last page with selected plan
            navigate('/activity-page')
        } else {
            alert('Please select a debt-free plan.');
        }
    };

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
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

            <Container fluid className="debt-free-plans-container text-center text-dark">
                <Row className="justify-content-center">
                    <Col md={10}>
                        <h1 className="plans-heading">Debt Settlement</h1>
                        <p className="plans-description">
                            We will negotiate with all your creditors to settle debts for less than the owed amount. This can involve lump-sum payments or structured settlements, reducing the total debt and making it easier for you to become debt-free.
                        </p>
                      

                        <h2 className="plans-subheading">Your Debt Free Plans (DFP)</h2>
                        <Table striped bordered hover className="mt-3 mb-5">
                            <thead>
                                <tr>
                                    <th>Debt Free Plans (DFP)</th>
                                    <th>Monthly EMI</th>
                                    <th>One Off Fee</th>
                                    <th>Subscription</th>
                                    <th>Term to Get Debt Free</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12 months Plan</td>
                                    <td>₹20,833</td>
                                    <td>₹599</td>
                                    <td>₹649</td>
                                    <td>12 months</td>
                                    <td><Button variant="outline-dark">Know more</Button></td>
                                </tr>
                                <tr>
                                    <td>18 months Plan</td>
                                    <td>₹13,888</td>
                                    <td>₹599</td>
                                    <td>₹649</td>
                                    <td>18 months</td>
                                    <td><Button variant="outline-dark">Know more</Button></td>
                                </tr>
                                <tr>
                                    <td>24 months Plan</td>
                                    <td>₹10,416</td>
                                    <td>₹599</td>
                                    <td>₹649</td>
                                    <td>24 months</td>
                                    <td><Button variant="outline-dark">Know more</Button></td>
                                </tr>
                            </tbody>
                        </Table>

                        <h3 className="plans-subheading">Subscription Amount</h3>
                        <Table striped bordered hover className="mt-3 mb-5">
                            <thead>
                                <tr>
                                    <th>Amount</th>
                                    <th>Subscription</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1-5 lakh</td>
                                    <td>₹599</td>
                                </tr>
                                <tr>
                                    <td>5 lakh - 10 lakh</td>
                                    <td>₹649</td>
                                </tr>
                                <tr>
                                    <td>10 lakh - 20 lakh</td>
                                    <td>₹649</td>
                                </tr>
                                <tr>
                                    <td>20 lakh - 30 lakh</td>
                                    <td>₹649</td>
                                </tr>
                                <tr>
                                    <td>30 lakh and above</td>
                                    <td>₹649</td>
                                </tr>
                            </tbody>
                        </Table>

                        <h2 className="plans-subheading mb-3">Choose your Debt Free Plan (DFP)</h2>
                        <p className="plans-subdescription" style={{ color:"white" }}>
                            Select a plan that suits your financial situation to start your journey towards becoming debt-free.
                        </p>
                        <div className="plan-dropdown mb-4">
    <select className="form-select" onChange={(e) => handleSelectPlan(e.target.value)} value={selectedPlan}>
        <option value="">Select a plan...</option>
        <option value="12-months">12 months Plan</option>
        <option value="18-months">18 months Plan</option>
        <option value="24-months">24 months Plan</option>
    </select>
</div>


                        <div className="plans-benefits">
                            <h3 className="plans-benefits-heading">Here’s what you get when you enroll:</h3>
                            <ul className="plans-benefits-list">
                                <li>You get debt free as per your DFP</li>
                                <li>Protection from Creditor Harassment while on the DFP – We will handle all communications calls, SMS, & WhatsApp with your creditors.</li>
                                <li>Legal cover from our in-house advocates, who will reply to all your Legal Notices, attend arbitration and court hearing and any other legal matters related to your debts.</li>
                                <li>A dedicated relationship manager who will help with your personalised monthly budgeting and counselling.</li>
                                <li>You will be able to track your monthly payment progress through our App and portal.</li>
                            </ul>
                        </div>

                        <Button variant="primary" className="btn-lg mt-4" onClick={handleNavigateToFinalPage}>
                            Enroll Now
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DebtFreePlansPage;
