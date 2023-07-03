import { Container, Row, Col, Image } from "react-bootstrap";
import Breadcrumb from "../../components/Breadcrumb";
import Paragraph from '../../components/Paragraph';
import Banner from "../../components/Banner";

import eye from '../../static/svg/eye.svg';
import briefcase from '../../static/svg/briefcase.svg';
import layers from '../../static/svg/layers.svg';
import human from '../../static/img/human.png';

const AboutUs = () => {
  return (
    <>
      <Banner title={"About US"} />
      <Breadcrumb paths={[
        { name: "Home", url: "/" },
        { name: "About US", url: "/aboutus" },
      ]} />

      <Container className="px-4 pb-5">
        <Row lg={12} sm={12} xs={12} md={12} className="mx-4 mb-5">
          <Col xs={12} className="mt-3">
            <h3 className="header2">Core Strategy</h3>
            <Paragraph descript="Efficient and effective management of all resources for sustainable water supply in Butuan City." />
          </Col>
        </Row>
        <Row lg={12} sm={12} xs={12} md={12} className="mx-4 mb-5">

          <Row>
            <Col lg={4} md={12} sm={12} className="d-flex justify-content-center mb-5">
              <div className="card mycard rounded-4">
                <div className="card-body">
                  <div className="container text-left">
                    <div className="row justify-content-center">
                      <div className="col-12 py-3 m-1 d-flex justify-content-center">
                        <Image src={eye} />
                      </div>
                      <div className="col-12 py-3 m-1">
                        <h5 className="card-title">Vision</h5>
                        <p className="card-about-us">A leader in the water and sanitation industry advancing integrated water resource management.</p>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </Col>
            <Col lg={4} md={12} sm={12} className="d-flex justify-content-center mb-5">
              <div className="card mycard rounded-4">
                <div className="card-body">
                  <div className="container text-left">
                    <div className="row justify-content-center">
                      <div className="col-12 py-3 m-1 d-flex justify-content-center">
                        <Image src={briefcase} />
                      </div>
                      <div className="col-12 py-3 m-1">
                        <h5 className="card-title">Mission</h5>
                        <p className="card-about-us">Butuan City Water District a service oriented entity endeavors to preserve the environment, deliver quality service and satisfy its customers.</p>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </Col>
            <Col lg={4} md={12} sm={12} className="d-flex justify-content-center mb-5">
              <div className="card mycard rounded-4">
                <div className="card-body">
                  <div className="container text-left">
                    <div className="row justify-content-center">
                      <div className="col-12 py-3 m-1 d-flex justify-content-center">
                        <Image src={layers} />
                      </div>
                      <div className="col-12 py-3 m-1">
                        <h5 className="card-title">Core Values</h5>
                        <p className="card-about-us-core">C - Commitment</p>
                        <p className="card-about-us-core">L - Leadership</p>
                        <p className="card-about-us-core">I - Integrity</p>
                        <p className="card-about-us-core">E - Excellence</p>
                        <p className="card-about-us-core">N - Novelty (Innovation)</p>
                        <p className="card-about-us-core">T - Teamwork</p>
                        <p className="card-about-us-core">S - Safety</p>
                      </div>
                    </div>
                  </div>
                </div >
              </div >
            </Col>
          </Row>
        </Row>
      </Container>

      <div id="about-purpose" style={{ overflowX: "hidden" }}>
        <Row>
          <Col lg={12} md={12} sm={12} className="px-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="z-1 position-absolute p-5 ">
                  <Image className="aboutus-image" src={human} />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5} md={5} sm={5} >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 py-3 m-1 mt-4">

                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} >
            <div className="container mx-4 mb-2 mt-5">
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-xs-12 col-sm-10 col-lg-12 col-md-12 ">
                  <h5 className="card-title-purpose mb-3">Core Values</h5>
                  <p className="card-about-us-core mb-3">
                    I. Acquiring, installing, improving, maintaining and operating water supply and distribution system for domestic, industrial, municipal and agricultural uses for residents and lands withind the boundaries of such districts;
                  </p>
                  <p className="card-about-us-core mb-3">
                    II. Providing, maintaining, and operating waste water collection, treatment and disposal facilities; and
                  </p>
                  <p className="card-about-us-core mb-3">
                    III. Conducting such other functions and operations incidental to water resource development, utilization and disposal within such districts, as are necessary or incidental to said purpose.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="pb-5 mb-5">
        <h1 className="fs-4 d-flex justify-content-center align-items-center mb-5 pb-5">
          <strong>GOALS</strong>
        </h1>
        <Container className="pb-5 mb-5">
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="btn btn-info m-2 btn-goals"><p className="goals">1. Protection, rehabilitation and conservation of Taguibo Watershed Forest Reserve.</p></Col>
            <Col className="btn btn-info m-2 btn-goals"><p className="goals">2. Sustain quality of water in accordance with PNSDW.</p></Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="btn btn-info m-2 btn-goals"><p className="goals">3. Increase availablity of water supply to all concessionaires for 24/7.</p></Col>
            <Col className="btn btn-info m-2 btn-goals"><p className="goals">4. Reduce Non-Revenue Water to 20%.</p></Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="btn btn-info m-2 btn-goals"><p className="goals">5. Provide fast and efficient water related services for every concessionaires.</p></Col>
            <Col className="btn btn-info m-2 btn-goals"><p className="goals">6. Continuous capacity building and enhance working environment of employees.</p></Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="btn btn-info m-2 btn-goals"><p className="goals">7. Establishment of mechanism for Septage Management Program.</p></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;