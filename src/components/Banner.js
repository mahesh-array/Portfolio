import {useState, useEffect} from "react";
import { Container, Row ,Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/selfimage.jpg";
// import 'animate.css'; //animatation npm package
import TrackVisibility from 'react-on-screen'; //for animation
import Resume from '../assets/img/resume.pdf';

const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate =["Web Developer", "Full Stack Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return ()=>{ clearInterval(ticker) };
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setIndex(1);
            setDelta(500);
        }else{
            setIndex(prevIndex => prevIndex+1)
        }
    }

    return(
        <section className="banner" id="home">
            <Container className="banner" id="home">
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isvisible }) =>
                        <div className={isvisible ? "animated_animated animate_fadeIn" : ""}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Mahesh `}<br></br><span className="wrap">{text}</span></h1>
                        <br></br>
                        <p>Welcome to my digital space! I am a highly skilled and innovative <span>web developer</span>, 
                        equipped with a Master's degree in <span>Computer Science</span> from University Of Central Missouri. 
                        With a passion for crafting seamless and engaging online experiences, my expertise spans 
                        both <span>front-end</span> and <span>back-end development</span>, where I leverage the <span>latest frameworks and technologies</span>. 
                        My journey in the digital realm is defined by a commitment to excellence, a keen eye for design,
                        and a proven ability to translate complex ideas into elegant, user-friendly solutions.</p>
                        <button><a href={Resume} target="_blank">Resume <ArrowRightCircle sixe={25}/> </a></button>
                        </div> }
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;