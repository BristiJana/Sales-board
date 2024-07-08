import React ,{useState} from 'react';
import { Container, Row, Col, Button, Table, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate,useLocation } from 'react-router-dom';
import '../assets/style.css';
import axios from 'axios';


const DebtFreePlansPage = () => {
    const location = useLocation();
    const { totalDebtsOutstanding } = location.state;
    const navigate = useNavigate();
    const [selectedPlan, setSelectedPlan] = useState(null);

    const fiftyPercentOfYearly = (totalDebtsOutstanding * 0.5) / 12;
    const fifbt=(totalDebtsOutstanding * 0.5) / 18;
    const fifytuyty=(totalDebtsOutstanding * 0.5) / 24;
    const handleSet = () => {
        navigate('/profile');
    };

    const handleLogout = () => {
        navigate('/login-signup');
    };

    const handleNavigateToFinalPage = async () => {
        if (selectedPlan) {
            const userId = localStorage.getItem('userId'); // Assume you store userId in localStorage

        // Post the summary data to the backend
        axios.post("http://localhost:5000/api/auth/updatePlan", {
            userId,
            selectedPlan
        })
        .then((response) => {
            console.log("Summary data stored successfully:", response.data);
            navigate('/activity-page');
        })
        .catch((error) => {
            alert('Error updating the plan: ' + error.message);
        });
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
                                    <td>{fiftyPercentOfYearly.toFixed(2)}</td>
                                    <td>₹599</td>
                                    <td>{fiftyPercentOfYearly > 500000 ? 649 : 599}</td>
                                    <td>12 months</td>
                                    <td><Button variant="outline-dark">Know more</Button></td>
                                </tr>
                                <tr>
                                    <td>18 months Plan</td>
                                    <td>{fifbt.toFixed(2)}</td>
                                    <td>₹599</td>
                                    <td>{fifbt > 500000 ? 649 : 599}</td>
                                    <td>18 months</td>
                                    <td><Button variant="outline-dark">Know more</Button></td>
                                </tr>
                                <tr>
                                    <td>24 months Plan</td>
                                    <td>{fifytuyty.toFixed(2)}</td>
                                    <td>₹599</td>
                                    <td>{fifytuyty > 500000 ? 649 : 599}</td>
                                    <td>24 months</td>
                                    <td><Button variant="outline-dark">Know more</Button></td>
                                </tr>
                            </tbody>
                        </Table>

                        {/* <h3 className="plans-subheading">Subscription Amount</h3>
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
                        </Table> */}

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
                            <h3 className="plans-benefits-heading">We offer the following for you to become debt free:</h3>
                            <ul className="plans-benefits-list">
                                <li>EMI Settlement Plan (ESP) – To settle your enrolled debts.</li>
                                <li>Mobile User Application & Settlement Portal – To make our services more accessible and to keep you updated with settlement offers.</li>
                                <li>Prepaid Credit Card – To help improve your credit score.</li>
                                <li>Referral Program for enrolled customers – You earn when you refer new customers to us.</li>
                                <li>Creditor’s Call Diversion Service. – To keep you free from creditor’s calls, which we will take on your behalf.</li>
                                <li>In house legal advocates – to protect you from harassment and protect your legal rights.</li>
                                <li>Case studies – How we have helped our customers become debt free, with the different types of settlements we offer, like One Time Settlements (OTS), Term settlements, OTS with Credit Clearance (will not affect your credit score), Moratorium Settlement (Where you have 4 to 6 months breathing space before you pay the agreed settlement) and Reversal Settlement, where your interest and charges are forgiven on the outstanding debts with credit clearance. </li>
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
