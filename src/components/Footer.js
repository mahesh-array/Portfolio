import { Container, Row, Col } from "react-bootstrap"
// import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const Footer = () =>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        {/* <img src={logo} alt="logo" /> */}
                        <p>Im More than a software Engineer,<br></br>
                        I'M also an Adrenaline junkie who loves scuba🤿 and sky diving✈️.</p>
                        <br></br>
                        <p>How about some coffee☕️ and conversation? <br/>Just drop a message in the above.</p>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/maheswara-reddy-061a9a1b6/" target="_blank"><img alt="" src={navIcon1} /></a>
                            <a href="https://github.com/mahesh-array" target="_blank"><img src={navIcon2} alt=""/></a>
                            <a href="https://www.instagram.com/mahesh0132_/" target="_blank"><img src={navIcon3} alt=""/></a>
                        </div>
                        {/* <p>CopyRight 2024, All rights reserved</p> */}
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;