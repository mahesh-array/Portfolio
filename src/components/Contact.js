import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';

const Contact = ()=>{
        const formInitialDetails = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        }
        const [formDetails, setFormDetails] = useState(formInitialDetails);
        const [buttonText, setButtonText] = useState('send');
        const [status, setStatus] = useState({})

        const onFormUpdate = (category, value) => {
            setFormDetails({
                ...formDetails,
                [category]: value
            })
        }

        // const handleSubmit = async (e) =>{
        //     e.preventDefault();
        //     setButtonText('Sending...');
        //     let response = await fetch("http://localhost:5000/contact",{
        //         method: "POST",
        //         headers: {
        //             "content-Type": "Application/json;charset=utf-8",
        //         },
        //         body: JSON.stringify(formDetails),
        //     });
        //     setButtonText("Send");
        //     let result = response.json();
        //     setFormDetails(formInitialDetails);
        //     if(result.code === 200){
        //         setStatus({
        //             success: true, message: "Message sent Successfully"
        //         });
        //     }else{
        //         setStatus({success: false, message: 'something went wrong, please try again later.'})
        //     }
        // };

        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_6wutiwn', 'template_c88dute', form.current, 'fbn0sNZWEQB8BeAj5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        };


        return (
            <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    {/* <Col md={6}>
                    <img src={contactImg} alt="Contact Us" />
                    </Col> */}
                    <Col md={6} className="contact_center">
                        <h2>Get in touch</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Name" name="user_name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Subject" name="subject" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Your Email" name="user_email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
            </section>
        )

}

export default Contact;