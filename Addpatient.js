import { useState } from "react";
import { Alert, Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
// import { Addpatient } from './components/patient/Addpatient';
// import { AddPrescriptionToServer } from "../services/prescription";
import './Addpatient.css';
import { Addpatientdata } from "../services/patientapi";
import { Header } from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Header1 } from "./Header1";
 



export function Addpatient(props){
    const [formData,setFormData] = useState({});
    const [modalOpeningStatus,setmodalOpeningStatus] = useState(false);

    const openDialog=()=>{
        setmodalOpeningStatus(true);
    }
    const closeDialog=()=>{
        setmodalOpeningStatus(false);
    }

    //console.log(props.pid);
    function handleChange(event){
        console.log(event.target.name);
        setFormData({...formData,[event.target.name]:event.target.value});
        console.log(formData);
    }

    async function handleSumbit(event){
        event.preventDefault();
        const response = await Addpatientdata(formData)
        openDialog()
        // = await AddpatientToServer(formData);
        console.log(response.data);
        setFormData({fname:"",lname:"",date:"",
        contactno:""});
    }

    return (
        <>
        <Header1></Header1>
            <div style={{backgroundColor:"#F0EFEF"}}>
            <Container fluid className="p-3 text-center">
                <Alert style={{border:"solid",fontWeight:"bold",fontSize:"100%"}}>Add Patient</Alert>
            </Container>

            <Container fluid className="mt-5" id="form">
                <Row className="justify-content-center">
                    <Col lg={5}>
                        <Form onSubmit={handleSumbit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name :</Form.Label>

                                <div style={{display: "flex",columnGap:"1%"}}>
                                <Form.Control type="text" name="fname" value={formData.fname}placeholder="firstname" required onChange={handleChange}/>
                                {/* <Form.Text className="text-muted" >
                                </Form.Text> */}
                                <Form.Control type="text" name="lname" value={formData.lname}placeholder="lastname" required onChange={handleChange}/>
                                </div>
                                {/* <Form.Text className="text-muted">
                                    First name
                                </Form.Text> */}
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Dob :</Form.Label>
                                <Form.Control type="date" name="date" value={formData.date}required onChange={handleChange}/>
                            </Form.Group>

                           
       
            
                            
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Contact no:</Form.Label>
                                <Form.Control type="Number" name="contactno" value={formData.contactno} required onChange={handleChange}/>
                                <Form.Text className="text-muted">
                                    please Enter your mobile no
                                </Form.Text>
                            </Form.Group>
                            
                                         

 
                            <Button variant ="primary" id="sbtn" type="submit" >
                                Submit
                            </Button>
                            
                            <Link to={'/menu'}><Button variant ="primary" id="sbtn" type="button" >
                                Menu
                            </Button></Link>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>
            </div>
            <Footer></Footer>


            <Modal show={modalOpeningStatus} onHide={closeDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Patient Added!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={closeDialog}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        </>
    )
}