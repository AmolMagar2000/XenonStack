import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import {Aboutmain} from './Aboutmain';
import logo from '../Images/Brand.png';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    
    <>
        <Container fluid className='MyNavigationBar'>
            <Navbar className='Brand'>
                <Container fluid>
                    
                    <img
                    alt=""
                    src={logo}
                    />
                        
                    
                </Container>
            </Navbar>

            <Container fluid className='Bar'>
                
                <Row className='Emergency'>
                    <Col lg={9}>
                        <marquee direction="right">AIA Hospital</marquee> 
                    </Col>
                    <Col lg={3}>
                        <span>Emergency: +91 (0000)9990000</span>
                    </Col>
                </Row>
                
                <Container fluid className='NavigationBar'>
                    <Navbar >
                        <Container fluid>
                            
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to={'/'}>
                                    <Link>Home</Link>
                                </LinkContainer>
                                {/* <LinkContainer to={'/department'}>
                                    <Nav.Link>Department</Nav.Link>
                                </LinkContainer> */}
                                <a href='#about'> About us</a>
                                <a href='#footer'> Contact us</a>
                                {/* <LinkContainer to={'/contact-us'}>
                                    <Nav.Link>Contact us</Nav.Link>
                                </LinkContainer> */}
                                <LinkContainer to={'/log-in'}>
                                    <Link>Log in</Link>
                                </LinkContainer>
                                
                                
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </Container>
        </Container>
        
    </>
  );
}

