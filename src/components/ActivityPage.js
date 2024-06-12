import React from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import '../assets/style.css';
import { useNavigate } from 'react-router-dom';
const ActivityPage = () => {
    const handleOptionSelect = (event) => {
        console.log(event.target.value);
    };
    const navigate = useNavigate();
    return (
        <Container fluid className="activity-container">
            <Card className="activity-card" >
                <Card.Body>
                <div style={{ textAlign: "center" }}>
    <img src="https://i.pinimg.com/originals/77/21/bf/7721bf941fa2021b2a34f0b015c2ffd7.gif" alt="Impressive GIF" />
</div>
                    <p className="text-center">You have successfully set up all your data and information.</p>
                    <hr />
                    <h3 className="text-center">Activity</h3>
                    <Form.Group style={{margin: "0 auto", width: "40%"}}>
                        <Form.Label>Choose your next action:</Form.Label>
                        <Form.Control as="select" onChange={handleOptionSelect}>
                            <option>Call Interested</option>
                            <option>Call Not Interested</option>
                            <option>Call Later</option>
                        </Form.Control>
                        <Button variant="success" className="generate-report w-100" style={{margin: "0 auto", width: "40%",marginTop:"40px"}}>
                        Generate Report
                    </Button>
                    </Form.Group>

                    

                    <hr />

                    <h3 className="text-center">Payment</h3>
                    <Form.Group style={{margin: "0 auto", width: "40%"}}>
                        <Form.Label>Send Payment Link</Form.Label>
                        <Button variant="primary" className="send-payment w-100">
                            Send Payment Link
                        </Button>
                    </Form.Group>

                    <h2 className="text-center mt-4">Payment Received!</h2>
                    <p className="text-center">Amount: $1000</p>
                    <p className="text-center">EMI Left: None</p>
                    <div style={{ textAlign: "center" }}>
    <Button variant="primary" onClick={() => navigate('/dashboard')}>
        Back to Dashboard
    </Button>
</div>

                </Card.Body>
            </Card>
        </Container>
    );
};

export default ActivityPage;
