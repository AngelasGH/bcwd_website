import Banner from "../../components/Banner";
import Breadcrumb from "../../components/Breadcrumb";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
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

const ContactUs = () => {
  return (
    <>
      <Banner title={"Contact US"} />
      <Breadcrumb
        paths={[
          { name: "Company", url: "#" },
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
                <div className="container mytext">
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
                <div className="container mytext">
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
                <div className="container mytext">
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
                <div className="container mytext">
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