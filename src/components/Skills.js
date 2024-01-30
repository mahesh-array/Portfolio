import { Container, Col, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
// import colorSharp from "../assets/img/color-sharp.png";


const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
        
      };

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p> <span className="skillname">Front-end: </span> <span>html,</span> <span>jsx,</span> <span>css,</span> <span>Bootstrap,</span> <span>Material ui,</span> <span>React,</span> <span>jQuery</span> </p>
                        <p> <span className="skillname">Back-end:</span> <span>Node,</span> <span>Flask</span> </p>
                        <p> <span className="skillname">Database:</span> <span>Mysql,</span> <span>Mongo DB</span> </p>
                        <p> <span className="skillname">programming languages:</span> <span>Javascript,</span> <span>Java,</span> <span>Python</span></p>
                        <p> <span className="skillname">Others:</span> <span>Git,</span>  <span>Gitlab,</span> <span>Postman,</span> <span>Json,</span> <span>REST APIs,</span> <span>Data Structures,</span> <span>Algorithms</span> </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Front-end</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>back-end</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Database</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>DSA</h5>
                            </div>
                        </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" alt="" src={colorSharp} /> */}
        </section>
      );
}

export default Skills;