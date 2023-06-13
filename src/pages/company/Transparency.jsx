import Banner from "../../components/Banner";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paragraph from '../../components/Paragraph';
import MyTable from "../../components/MyTable";

import Breadcrumb from "../../components/Breadcrumb";

const Transparency = () => {
  return (
    <>
      <Banner title={"Transparency"} />
      <Container >
        <Breadcrumb
          paths={[
            { name: "Home", url: "/" },
            { name: "Transparency", url: "/transparencys" },
            // { name: "About us", url: "/news/about" },
          ]}
        />

        <Container className="px-4 pb-5">
          <Row className="mx-4">
            <Col xs={12} className="mt-3">
              <h3 className="header2">Symbolism</h3>
              <Paragraph descript="A pearl buried inside a tightly-shut shell is practically worthless. Government information is a pearl, meant to be shared with the public in order to maximize its inherent value." />
              <Paragraph descript="The Transparency Seal, depicted by a pearl shining out of an open shell, is a symbol of a policy shift towards openness in access to government information. On the one hand, it hopes to inspire Filipinos in the civil service to be more open to citizen engagement; on the other, to invite the Filipino citizenry to exercise their right to participate in governance." />
              <Paragraph descript="This initiative is envisioned as a step in the right direction towards solidifying the position of the Philippines as the Pearl of the Orient - a shining example for democratic virtue in the region." />
            </Col>

            <Col xs={12} className="mt-4 pt-4">
              <h3 className="header2">BCWD's Compliance With Transparency Seal</h3>
            </Col>
            <Col xs={12} className="mt-3">
              <ul>
                <li>
                  Dbm Approved Budget And Targets
                </li>
                <li>
                  Annual Procurement Plan
                </li>
                <li>
                  Major Programs, Projects And Activities, Beneficiaries, And Status Of Implementation
                </li>
                <li>
                  Annual Financial Reports
                </li>
                <li>
                  Qms Certification
                </li>
                <li>
                  System Of Ranking Delivery Units
                </li>
                <li>
                  Agency Review And Compliance Procedure Of Statements And Financial Disclosures
                </li>
                <li>
                  Freedom Of Information
                </li>
              </ul>
            </Col>

            <Col xs={12} className="mt-4 pt-4">
              <h3 className="header2">Other Good Governance Conditions</h3>
            </Col>
            <Col xs={12} className="mt-3 pb-5">
              <ul>
                <li>
                  Certification Of Compliance
                </li>
                <li>
                  Philgeps Posting
                </li>
                <li>
                  Procurement Monitoring Reports
                </li>
                <li>
                  Arta Compliance
                </li>
                <li>
                  Saln Submission/Filing
                </li>
                <li>
                  Office Of The Board Of Directors
                </li>

              </ul>
            </Col>
          </Row>
        </Container>

      </Container>

    </>
  );
};

export default Transparency;