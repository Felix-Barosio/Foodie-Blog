import React from "react";
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import logo from "../../../assets/images/logo/afyanet.png";
import "./NavBar.css"
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import './LogInPopup.css'


function NavBar() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="white" expand="lg" className="home navbar navbar-expand-lg navbar-light fixed-top py-3">
                <Container className="container px-4 px-lg-5">
                    <Navbar.Brand className='brand' href="#home">
                        {/* <img src={""} alt="logo" className="logo" /> */}
                        <span className="navbar-brand">Foodie Blog</span>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className="navbar-nav ms-auto my-2 my-lg-2 me-lg-4">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0">
                                <li><Nav.Link href="#home">Home</Nav.Link></li>
                                <li><Nav.Link href="#about">About Us</Nav.Link></li>
                                {/* <li><Nav.Link href="#post">Post</Nav.Link></li> */}
                                <li><Nav.Link href="#contact">Contact Us</Nav.Link></li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler navbar-toggler-left" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav style={{ position: "relative" }} className="navbar-popup navbar-nav ms-auto my-2 my-lg-0">
                            <Popup className="navbar-popup" Popup trigger={<button className="btn outline-success">Log In</button>}
                                modal
                                closeOnDocumentClick
                                position='top left'
                            >
                                <button className='popup-btn btn btn-primary' onClick={() => navigate('/client/login')}>Client</button>
                                <br />
                                <Button className='popup-btn btn btn-primary' variant="primary" onClick={() => navigate('/admin/login')}>Admin</Button>
                            </Popup>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}
export default NavBar;