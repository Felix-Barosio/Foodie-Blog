import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import png from "../../../images/img.png"
import "./HomePage.css"

function HomePage() {
    const navigate = useNavigate();
    return (
        <>
            <div id='home' className="home">
                <Container>
                    <Row>
                        <Col md={6} className="home-content">
                            <h3 className="home-title">
                                Share Recipes with Friend and Family.
                            </h3>
                            <p className="home-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.
                            </p>
                            <button onClick={() => navigate('/post')} className="btn btn-primary" type="submit">Get Started</button>
                        </Col>
                        <Col md={6} className="home-image">
                            <img src={png} alt="food" className="nyv" style={{ width: "100%" }} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    )
}

export default HomePage;