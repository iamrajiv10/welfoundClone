import Container from 'react-bootstrap/Container';
import Logo from "../Pages/Img/CID_logo-01.svg"

function Footer() {
    return (
        <div className="bg-secondary p-5">
            <Container className='py-4'>
                <div className="d-flex justify-content-between">
                    <div>
                        <img src={Logo} alt='Logo' style={{ width: "250px" }} />
                    </div>
                    <div className="row align-items-top w-50">
                        <div className="col-4 text-light">
                            <h5 className='text-warning'><b>For Candidates</b></h5>
                            <p>Overview</p>
                            <p>Startup jobs</p>
                            <p>Featured</p>
                            <p>Remote</p>
                        </div>
                        <div className="col-4 text-light">
                            <h5 className='text-warning'><b>For Recuriters</b></h5>
                            <p>Overview</p>
                            <p>Recruit Pro</p>
                            <p>Pricing</p>
                        </div>
                        <div className="col-4 text-light">
                            <h5 className='text-warning'><b>Company</b></h5>
                            <p>About</p>
                            <p>Help</p>
                            <p>Blog</p>
                            <p>Terms & Risks</p>
                            <p>Privacy & Policies</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <p style={{color:"rgba(255, 221, 0, 0.658)"}}>Copyright © 2023 AngelList Talent. All rights reserved.</p>
                </div>
            </Container>
        </div>
    );
}
export default Footer;