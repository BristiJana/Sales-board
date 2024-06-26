// FinalPage.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import '../assets/style.css'; // Ensure your CSS file path is correct

const FinalPage = () => {
    const handleDownloadFile = () => {
        // Handle download file logic here
        alert('File download functionality will be implemented here.');
    };

    const handleUploadFile = () => {
        // Handle upload file logic here
        alert('File upload functionality will be implemented here.');
    };

    return (
        <Container fluid className="final-page-container text-center">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className='mb-4'>Enroll now for only ₹599 to become debt free</h1>
                    <ul className="final-page-list">
                        <li>Settle your debts from 50% plus discount</li>
                        <li>Protection from Creditors Harassment</li>
                        <li>Legal cover from our in-house advocates</li>
                        <li>Dedicated relationship manager</li>
                        <li>Money protected in a Trust account</li>
                        <li>Client dashboard</li>
                    </ul>
                    <Button variant="primary" className="btn-lg mb-4" onClick={handleDownloadFile}>
                        Start Now Pay Rs 599 
                    </Button>
                    <p className="upload-text">For us to process your application, you would need to download your credit file from Experian and upload it to us.</p>
                    <Button variant="secondary" className="btn-lg" onClick={handleUploadFile}>
                        Upload your Credit File <FaDownload className="ms-2" />
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default FinalPage;
