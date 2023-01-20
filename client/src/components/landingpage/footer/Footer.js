import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Footer.css'
import png from "../../../images/blog.svg"

const Footer = () => {
    return (
        <div fluid="md" id="contact" className="container-fluid footer">
            <Row>
                <Col xs={12} md={6}>
                    <img src={png} alt="customer service" />
                </Col>
                <Col className='content' xs={12} md={6}>
                    <h1>Contact Us</h1>
                    <p>Our service is available always.</p>
                    <Row className="contacts">
                        <div className="contact">
                            <i className="fa-solid fa-at"></i>
                            <span>info@foodieblog.com </span>
                        </div>
                        <div className="contact">
                            <i className="fas fa-phone-alt"></i>
                            <span>254-712-000000</span>
                        </div>
                        <div className="contact">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Plaza, Upperhill, Nairobi</span>
                        </div>
                    </Row>

                    <Row className="socials">
                        <h1>Socials</h1>
                        <div className="icons">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://wa.me/254712000000" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </Row>
                    {/* Copyright */}
                    < Row className="copy">
                        <hr />
                        <p>© {new Date().getFullYear()} All rights reserved.Foodie Blog.</p>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
