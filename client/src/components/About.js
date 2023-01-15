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
                    <Col md={6} >
                        <div className="header-content">
                            <h1 className="header-title">
                                About Us.
                            </h1>
                            <p className="about-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.
                            </p>
                            <p className="about-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;
