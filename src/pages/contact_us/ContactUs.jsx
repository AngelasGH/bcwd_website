import Banner from "../../components/Banner";
import Breadcrumb from "../../components/Breadcrumb";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image, Modal, Form, Container } from 'react-bootstrap';
import Header1 from "../../components/Header1";

import qmark from '../../static/svg/contact_us_svg/qmark.svg';
import telephone from '../../static/svg/contact_us_svg/telephone.svg';
import mail from '../../static/svg/contact_us_svg/mail.svg';
import phone from '../../static/svg/contact_us_svg/phone.svg';
import facebook from '../../static/svg/contact_us_svg/facebook.svg';
import twitter from '../../static/svg/contact_us_svg/twitter.svg';
import message from '../../static/svg/contact_us_svg/message.svg';
import applyservices from '../../static/svg/contact_us_svg/applyservices.svg';
import complaint from '../../static/svg/contact_us_svg/complaint.svg';
import otherconcern from '../../static/svg/contact_us_svg/otherconcern.svg';

import { useState } from "react";

const ContactUs = () => {
  {/** Make Inquiry Modal */ }
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  {/** Send a Complain Modal */ }
  const [showComplaint, setShowComplaint] = useState(false)
  const handleShowComplaint = () => setShowComplaint(true);
  const handleCloseComplaint = () => setShowComplaint(false);

  {/** Other Concerns Modal */ }
  const [showOther, setShowOther] = useState(false)
  const handleShowOther = () => setShowOther(true);
  const handleCloseOther = () => setShowOther(false);

  {/** Apply for services Modal */ }
  const [showApplyServices, setShowApplyServices] = useState(false)
  const handleShowApplyServices = () => setShowApplyServices(true);
  const handleCloseApplyServices = () => setShowApplyServices(false);

  {/** Thank you Modal */ }
  const [showThankYou, setShowThankYou] = useState(false)
  const handleShowThankYou = () => {
    setShowThankYou(true);
    setShow(false);
    setShowComplaint(false);
    setShowOther(false);
    setShowApplyServices(false);
  };
  const handleCloseThankYou = () => setShowThankYou(false);


  return (
    <>
      {/** Make an Inquiry Modal*/}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body className="p-5">
          <div className="col-12 d-flex justify-content-end p-2" onClick={handleClose} >
            <span role="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </div>
          <div className="col-12 d-flex justify-content-start">
            <p style={{ fontSize: "14px", fontFamily: "Roboto Bold", letterSpacing: "1px", color: "#7B7A7A" }}><strong>Make an Inquiry</strong></p>
          </div>
          <Form className="mt-1">
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">With an existing connection?</Form.Label>
                  <Form.Control type="text" placeholder="Yes or No" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Control/Account Number</Form.Label>
                  <Form.Control type="text" placeholder="123-012345-1" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Account Name</Form.Label>
                  <Form.Control type="text" placeholder="Juan Delacruz" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Case Type (optional)</Form.Label>
                  <Form.Control type="text" placeholder="Meter" className="input" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Relationship to the owner</Form.Label>
                  <Form.Control type="number" placeholder="Owner" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Telephone Number</Form.Label>
                  <Form.Control type="text" placeholder="815-1324" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="09101398472" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Email Address</Form.Label>
                  <Form.Control type="email" placeholder="email.myemail@gmail.com" className="input" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              className="input mt-3"
              style={{ height: '100px' }}
            />

            <div className="mt-3">
              <Form.Check // prettier-ignore
                style={{ fontSize: "12px", fontFamily: "Roboto Light", color: "#666666" }}
                type="checkbox"
                id=""
                label="I hereby acknowledge that I have read, understand and agree to the Terms and Conditions and Privacy Policy of BCWD. I am giving my consent to the processing of my personal data in accordance with the Privacy Policy of the Company."
              />
            </div>

            <div className="mt-3">
              <Form.Check // prettier-ignore
                style={{ fontSize: "12px", fontFamily: "Roboto Light", color: "#666666" }}
                type="checkbox"
                id=""
                label="I am allowing BCWD to enroll my mobile number to their TxTubig program which will allow them to send me water service advisories and billing updates."
              />
            </div>

            <div className="text-start">
              <button className="mt-3 defaultButton" onClick={handleShowThankYou}>SEND</button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/** Send A Complaint Mod*/}
      <Modal show={showComplaint} onHide={handleCloseComplaint} size="lg">
        <Modal.Body className="p-5">
          <div className="col-12 d-flex justify-content-end p-2" onClick={handleCloseComplaint}>
            <span role="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </div>
          <div className="col-12 d-flex justify-content-start">
            <p style={{ fontSize: "14px", fontFamily: "Roboto Bold", letterSpacing: "1px", color: "#7B7A7A" }}><strong>Send a Complaint</strong></p>
          </div>
          <Form className="mt-1">
            <Row>
              <Col md={12} className="mb-3">
                <Row>
                  <Col md={3}>
                    <div className="mt-3">
                      <Form.Check // prettier-ignore
                        style={{ fontSize: "12px", fontFamily: "Roboto Light", color: "#666666" }}
                        type="radio"
                        id=""
                        label="Illegal Connection"
                      />
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="mt-3">
                      <Form.Check // prettier-ignore
                        style={{ fontSize: "12px", fontFamily: "Roboto Light", color: "#666666" }}
                        type="radio"
                        id=""
                        label="Leak Report"
                      />
                    </div>

                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Control/Account Number</Form.Label>
                  <Form.Control type="text" placeholder="123-012345-1" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Name of Reporter</Form.Label>
                  <Form.Control type="text" placeholder="Juanita Banana" className="input" required />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Name of Suspected Illegal Connection User</Form.Label>
                  <Form.Control type="text" placeholder="John Smith" className="input" required />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Complete Address of Reported Illegal Connection</Form.Label>
                  <Form.Control type="text" placeholder="Purok Maliwanag, Barangay Liwayway, Butuan City" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Nearest Landmark</Form.Label>
                  <Form.Control type="text" placeholder="Agustin Chapel" className="input" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="09101398472" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Telephone Number</Form.Label>
                  <Form.Control type="text" placeholder="815-1324" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Email Address</Form.Label>
                  <Form.Control type="email" placeholder="email.myemail@gmail.com" className="input" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              className="input mt-3"
              style={{ height: '100px' }}
            />

            <div className="mt-3">
              <Form.Check // prettier-ignore
                style={{ fontSize: "12px", fontFamily: "Roboto Light", color: "#666666" }}
                type="checkbox"
                id=""
                label="I hereby acknowledge that I have read, understand and agree to the Terms and Conditions and Privacy Policy of BCWD. I am giving my consent to the processing of my personal data in accordance with the Privacy Policy of the Company."
              />
            </div>

            <div className="mt-3">
              <Form.Check // prettier-ignore
                style={{ fontSize: "12px", fontFamily: "Roboto Light", color: "#666666" }}
                type="checkbox"
                id=""
                label="I am allowing BCWD to enroll my mobile number to their TxTubig program which will allow them to send me water service advisories and billing updates."
              />
            </div>

            <div className="text-start">
              <button className="mt-3 defaultButton" onClick={handleShowThankYou}>SEND</button>
            </div>
          </Form>
        </Modal.Body>
      </Modal >


      {/** Other Concerns */}
      < Modal show={showOther} onHide={handleCloseOther} size="lg" >
        <Modal.Body className="p-5">
          <div className="col-12 d-flex justify-content-end p-2" onClick={handleCloseOther}>
            <span role="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </div>
          <div className="col-12 d-flex justify-content-start">
            <p style={{ fontSize: "14px", fontFamily: "Roboto Bold", letterSpacing: "1px", color: "#7B7A7A" }}><strong>Other Request or Concern</strong></p>
          </div>
          <Form className="mt-1">
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">With an existing connection?</Form.Label>
                  <Form.Control type="text" placeholder="Yes or No" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Control/Account Number</Form.Label>
                  <Form.Control type="text" placeholder="123-012345-1" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Account Name</Form.Label>
                  <Form.Control type="text" placeholder="Juan Delacruz" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Case Type (optional)</Form.Label>
                  <Form.Control type="text" placeholder="Meter" className="input" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Relationship to the owner</Form.Label>
                  <Form.Control type="number" placeholder="Owner" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Telephone Number</Form.Label>
                  <Form.Control type="text" placeholder="815-1324" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="09101398472" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Email Address</Form.Label>
                  <Form.Control type="email" placeholder="email.myemail@gmail.com" className="input" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              className="input mt-3"
              style={{ height: '100px' }}
            />

            <div className="mt-3">
              <Form.Check // prettier-ignore
                style={{ fontSize: "12px", fontFamily: "Roboto Light", color: "#666666" }}
                type="checkbox"
                id=""
                label="I hereby acknowledge that I have read, understand and agree to the Terms and Conditions and Privacy Policy of BCWD. I am giving my consent to the processing of my personal data in accordance with the Privacy Policy of the Company."
              />
            </div>

            <div className="mt-3">
              <Form.Check // prettier-ignore
                style={{ fontSize: "12px", fontFamily: "Roboto Light", color: "#666666" }}
                type="checkbox"
                id=""
                label="I am allowing BCWD to enroll my mobile number to their TxTubig program which will allow them to send me water service advisories and billing updates."
              />
            </div>

            <div className="text-start">
              <button className="mt-3 defaultButton" onClick={handleShowThankYou}>SEND</button>
            </div>
          </Form>
        </Modal.Body>
      </Modal >


      {/** Apply for Services Modal */}
      < Modal show={showApplyServices} onHide={handleCloseApplyServices} size="lg" >
        <Modal.Body className="p-5">
          <div className="col-12 d-flex justify-content-end p-2" onClick={handleCloseApplyServices}>
            <span role="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </div>
          <div className="col-12 d-flex justify-content-start">
            <p style={{ fontSize: "14px", fontFamily: "Roboto Bold", letterSpacing: "1px", color: "#7B7A7A" }}><strong>Apply for Services</strong></p>
          </div>
          <Form className="mt-1">
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">With an existing connection?</Form.Label>
                  <Form.Control type="text" placeholder="Yes or No" className="input" required />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Control/Account Number</Form.Label>
                  <Form.Control type="text" placeholder="123-012345-1" className="input" required />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Type of application</Form.Label>
                  <Form.Control type="text" placeholder="New Water Service Connection" className="input" required />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Gomez" className="input" required />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">First Name</Form.Label>
                  <Form.Control type="text" placeholder="Selena" className="input" required />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Middle Name</Form.Label>
                  <Form.Control type="text" placeholder="Smith" className="input" required />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Address</Form.Label>
                  <Form.Control type="number" placeholder="Purok Malinaw, Barangay Sinawsinaw, Butuan City" className="input" required />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Nearest Landmark</Form.Label>
                  <Form.Control type="text" placeholder="Agustin Chapel" className="input" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="0987654321" className="input" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Email Address</Form.Label>
                  <Form.Control type="email" placeholder="email.myemail@gmail.com" className="input" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              className="input mt-3"
              style={{ height: '100px' }}
            />

          </Form>
          <Container>
            <Col md={12} className="mt-3">
              <span className="label">
                REQUIREMENTS:
              </span>
            </Col>
            <Col md={12} className="mt-3">
              <span className="label">
                NEW WATER SERVICES CONNECTION
              </span>
            </Col>
            <Col md={12} className="mt-2">
              <p style={{ fontSize: "12px", fontFamily: "Roboto Light", color: "#666666" }}>
                <ol>
                  <li>
                    a. For Privately Owned Properties:
                    <ol type="a">
                      <li>Transfer Certificate of Title (“TCT”)</li>
                      <li>Deed of Sale</li>
                      <li>Contract to Sell</li>
                    </ol>
                  </li>
                  <li>
                    b. For Open/Depressed Area - Certification from any Authorized Government Agency
                    <ol type="a">
                      <li>National Anti-Poverty Commission</li>
                      <li>National Housing Authority or Urban Poor Affairs Office</li>
                      <li>Social Housing Finance Corporation</li>
                    </ol>
                  </li>
                  <li> Application Form</li>
                  <li> Two (2) valid government-issued ID with three (3) specimen signatures</li>
                  <li> Tax Identification Number (TIN of Applicant)</li>
                  <li> Homeowner's Association Clearance (For subdivisions/Villages/Homeowners)</li>
                  <li> Special Power of Attorney (If representative with valid ID)</li>
                  <li> Sample Contract Account Number/ Meter Number of your neighbor (For creation of your account)</li>
                  <li> Excavation Permit - (To be advised after inspection)</li>
                  <li> Security and Exchange Commission Certificate (For Corporation/Company)</li>
                </ol>
              </p>
            </Col>

            <Col md={12} className="mt-3">
              <span className="label">
                ADDITIONAL METER
              </span>
            </Col>
            <Col md={12} className="mt-2">
              <p style={{ fontSize: "12px", fontFamily: "Roboto Light", color: "#666666" }}>
                <ol>
                  <li>
                    a. Privately Owned Properties:
                    <ol type="a">
                      <li>Transfer Certificate of Title (“TCT”)</li>
                      <li>Deed of Sale</li>
                      <li>Contract to Sell</li>
                    </ol>
                  </li>
                  <li>
                    b. For Open/Depressed Area - Certification from any Authorized Government Agency
                    <ol type="a">
                      <li>National Anti-Poverty Commission</li>
                      <li>National Housing Authority or Urban Poor Affairs Office</li>
                      <li>Social Housing Finance Corporation</li>
                    </ol>
                  </li>
                  <li> Application Form</li>
                  <li> Two (2) valid government-issued ID with three (3) specimen signatures</li>
                  <li> Latest Maynilad Statement of Account</li>
                  <li> Permission to Install Additional Meter (issued by existing Maynilad Customer)</li>
                  <li> Special Power of Attorney (If representative with Valid ID)</li>
                  <li> Security and Exchange Commission Certificate - (For Corporation/Company)</li>
                </ol>
              </p>
            </Col>

            <Col md={12} className="mt-3">
              <span className="label">
                CHANGE OF OWNERSHIP OF WATER SERVICE CONNECTION
              </span>
            </Col>
            <Col md={12} className="mt-2">
              <p style={{ fontSize: "12px", fontFamily: "Roboto Light", color: "#666666" }}>
                <ol>
                  <li>
                    1. a. Privately Owned Properties:
                    <ol type="a">
                      <li>Transfer Certificate of Title (“TCT”)</li>
                      <li>Deed of Sale</li>
                      <li>Contract to Sell</li>
                    </ol>
                  </li>
                  <li>
                    2. b. For Open/Depressed Area - Certification from any Authorized Government Agency
                    <ol type="a">
                      <li>National Anti-Poverty Commission</li>
                      <li>National Housing Authority or Urban Poor Affairs Office</li>
                      <li>Social Housing Finance Corporation</li>
                    </ol>
                  </li>
                  <li>2. Two (2) valid government-issued ID with three (3) specimen signatures</li>
                  <li>3. Latest Maynilad Statement of Account</li>
                  <li>4. Tax Identification Number (TIN of Applicant)</li>
                  <li>5. Special Power of Attorney (If representative with valid ID)</li>
                  <li>6. Security and Exchange Commission Certificate (For Corporation/Company)</li>
                </ol>
              </p>
            </Col>
            <div className="mt-5">
              <Form.Check // prettier-ignore
                style={{ fontSize: "12px", fontFamily: "Roboto Light", color: "#666666" }}
                type="checkbox"
                id=""
                label="I hereby acknowledge that I have read, understand and agree to the Terms and Conditions and Privacy Policy of BCWD. I am giving my consent to the processing of my personal data in accordance with the Privacy Policy of the Company."
              />
            </div>

            <div className="mt-3">
              <Form.Check // prettier-ignore
                style={{ fontSize: "12px", fontFamily: "Roboto Light", color: "#666666" }}
                type="checkbox"
                id=""
                label="I am allowing BCWD to enroll my mobile number to their TxTubig program which will allow them to send me water service advisories and billing updates."
              />
            </div>

            <div className="text-start">
              <button className="mt-3 defaultButton" onClick={handleShowThankYou}>SEND</button>
            </div>
          </Container>
        </Modal.Body>
      </Modal >

      {/** Apply for Services Modal */}
      < Modal show={showThankYou} onHide={handleCloseThankYou} >
        <Modal.Body className="p-5" style={{ height: "20rem" }}>
          <div className="col-12 d-flex justify-content-end p-2" onClick={handleCloseThankYou}>
            <span role="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </div>

          <Container className="mt-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-12 text-center mx-3 my-3">
                <h3 style={{ color: "#7B7A7A", fontWeight: "bold", fontSize: "x-large" }}>Thanks for contacting us! </h3>
              </div>

              <div className="col-lg-12 ">
                <div className="col-lg-12 d-flex justify-content-center">
                  <p style={{ color: "#7B7A7A", fontSize: "medium", fontFamily: "Roboto Light" }}>We will be in touch with you shortly.</p>
                </div>
              </div>
            </div>
          </Container>
        </Modal.Body>
      </Modal>

      <Banner title={"Contact US"} />
      <Breadcrumb
        paths={[
          { name: "Home", url: "/" },
          { name: "ContactUs", url: "/contactus" },
        ]}
      />
      <Container className="mb-5 pb-5">

        <Row className="d-flex justify-content-left p-5">
          <Col xs={12} md={6}>
            <Header1 header="WE LOVE TO HELP!" />
          </Col>
        </Row>

        <Row className="px-5">
          <Col xs={12} md={10} lg={6}>
            <Row>
              <Col xs={6} className="mt-4">
                <div className="container mytext" onClick={handleShow}>
                  <Image
                    className="m-2"
                    src={message}
                    alt="message"
                    width="50"
                    height="50"
                  />
                  <h5 className="card-title">Make an Inquiry</h5>
                </div>
              </Col>
              <Col xs={6} className="mt-4">
                <div className="container mytext" onClick={handleShowApplyServices}>
                  <Image
                    className="mt-2"
                    src={applyservices}
                    alt="apply"
                    width="50"
                    height="50"
                  />
                  <h5 className="card-title">Apply for services</h5>
                  {/* <p className="text"  style={{ color: "white" }}>c</p> */}
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} className="mt-4">
                <div className="container mytext" onClick={handleShowComplaint}>
                  <Image
                    className="mt-2"
                    src={complaint}
                    alt="complaint"
                    width="50"
                    height="50"
                  />
                  <h5 className="card-title">Send a Complaint</h5>
                </div>
              </Col>
              <Col xs={6} className="mt-4">
                <div className="container mytext" onClick={handleShowOther}>
                  <Image
                    className="mt-2"
                    src={otherconcern}
                    alt="otherconcern"
                    width="50"
                    height="50"
                  />
                  <h5 className="card-title">Other Concerns</h5>
                </div>
              </Col>
            </Row>
          </Col>


          <Col xs={12} md={10} lg={6} className="pt-2 mt-4">
            <div className="container mytext2">
              <div className="faq-item">
                <div class="row">
                  <div class="col-auto">
                    <img
                      className="mt-2"
                      src={qmark}
                      alt="qmark"
                      width="50"
                      height="50"
                    />
                  </div>
                  <div class="col mt-3">
                    <a href="/faqs" className="faqs-list">Frequently Asked Questions (FAQs)</a>
                  </div>
                </div>
              </div>


              <div className="faq-item">
                <div class="row">
                  <div class="col-auto">
                    <img
                      className="mt-2"
                      src={telephone}
                      alt="telephone"
                      width="50"
                      height="50"
                    />
                  </div>
                  <div class="col mt-3">
                    <p className="faqs-list">Customer Hotline: 342-3145, 341-6375</p>
                  </div>
                </div>
              </div>


              <div className="faq-ite">
                <div class="row">
                  <div class="col-auto">
                    <img
                      className="mt-2"
                      src={mail}
                      alt="mail"
                      width="50"
                      height="50"
                    />
                  </div>
                  <div class="col mt-3">
                    <p className="faqs-list">bcwd_pr@yahoo.com</p>
                  </div>
                </div>
              </div>


              <div className="faq-item">
                <div class="row">
                  <div class="col-auto">
                    <img
                      className="mt-2"
                      src={phone}
                      alt="phone"
                      width="50"
                      height="50"
                    />
                  </div>
                  <div class="col mt-3">
                    <p style={{ color: 'gray', fontSize: '20px', fontFamily: 'Roboto' }}> 0918 930 4234</p>
                  </div>
                </div>
              </div>


              <div className="faq-item">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <img
                      className="mt-2"
                      src={facebook}
                      alt="facebook"
                      width="50"
                      height="50"
                    />
                  </div>
                  <div className="col mt-3">
                    <p ><a href="https://www.facebook.com/profile.php?id=100064300855367" className="faqs-list">Facebook</a></p>
                  </div>
                </div>
              </div>


              <div class="faq-item">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <img
                      className="mt-2"
                      src={twitter}
                      alt="twitter"
                      width="50"
                      height="50"
                    />
                  </div>
                  <div class="col mt-3">
                    <p className="faqs-list">Twitter.com</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>

  );
};

export default ContactUs;