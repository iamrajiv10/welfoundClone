import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Logo from "../Pages/Img/CID_logo-01.svg"
import Logo1 from "../../../Landing/Pages/Img/Logo1.png"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function CanHeader() {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-light">
                <Container>
                    <img src={Logo1} alt='Logo' style={{ width: "50px" }} />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className=' align-items-center'>
                            <Link className='text-dark text-decoration-none mx-2' to="#pricing"><b>Jobs</b></Link>
                            <Link className='text-dark text-decoration-none mx-2' to="#pricing"><b>Featured</b></Link>
                            <button className='d-flex btn'>
                            <img src='https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png'
                            style={{width:"5vh"}} 
                            className='rounded-circle'/>
                            <NavDropdown align={{ lg: 'end' }}>
                                <NavDropdown.Item >Edit Profile</NavDropdown.Item>
                                <NavDropdown.Item >Setting</NavDropdown.Item>
                                <NavDropdown.Item >Notifications</NavDropdown.Item>
                                <br/><NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                            </NavDropdown>
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default CanHeader;