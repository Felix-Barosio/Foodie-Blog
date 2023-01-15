import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img2 from '../images/img2.png'

const About = () => {
    return (
        <>
            <Container fluid="md" id="about" className="about">
                <Row>
                    <Col md={6}>
                        <div className="image-container">
                            <img src={img2} alt="food" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;
