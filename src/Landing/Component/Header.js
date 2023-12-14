import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../Pages/Img/CID_logo-01.svg"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Header() {

    const [forS, setForS] = useState(true)
    const navigate = useNavigate();

    const handleToggle = () => {
        setForS(!forS);
        console.log(forS);
        if (forS === true) {
            navigate('/')
          } else {
            navigate('/overviewCan')
          }
    }

    const handleNavigation = () => {
      if (forS === true) {
        navigate('/')
      } else {
        navigate('/overviewCan')
      }
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-secondary">
                <Container>
                    <img src={Logo} alt='Logo' style={{width:"200px"}} />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            
                        </Nav>
                        <Nav className='text-light align-items-center'>
                        {forS ? (
                                <>
                                    <Link className='text-light text-decoration-none mx-2' to="/"><b>Overview</b></Link>
                                    <Link className='text-light text-decoration-none mx-2' to="#pricing"><b>Pricing</b></Link>
                                    <Link
                                        className='text-light text-decoration-none mx-2' 
                                        // onClick={() => {handleToggle(); handleNavigation()}}
                                        onClick={handleToggle}
                                        ><b></b>For Job Seekers</Link>
                                    <Link 
                                        className='text-light text-decoration-none mx-2' to="/signUp">
                                        <button type="button" className="btn btn-light m-2">Log In</button></Link>
                                    <button type="button" className="btn btn-warning border border-white m-2">Sign Up</button>
                                </>
                            ) : (
                                <>
                                    <Link className='text-light text-decoration-none mx-2' to="/overviewCan"><b>Overview</b></Link>
                                    <Link className='text-light text-decoration-none mx-2' to="#pricing"><b>Jobs</b></Link>
                                    <Link className='text-light text-decoration-none mx-2' to="#pricing"><b>Featured</b></Link>

                                    <Link
                                        className='text-light text-decoration-none mx-2' 
                                        // onClick={() => {handleToggle(); handleNavigation()}} 
                                        onClick={handleToggle}
                                        >For Companies</Link>
                                    <button type="button" className="btn btn-light m-2">Log In</button>
                                    <Link to="/signUpCan">
                                    <button type="button" className="btn btn-warning border border-white m-2">Sign Up</button>
                                    </Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Header;