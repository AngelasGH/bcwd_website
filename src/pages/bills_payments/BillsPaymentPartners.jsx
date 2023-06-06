import Banner from "../../components/Banner";
import Breadcrumb from "../../components/Breadcrumb";
import Pagination from "../../components/Pagination";
import { Row, Container, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import gcash from '../../static/svg/gcash.svg';
import maya from '../../static/svg/Maya_logo.svg';
import Paragraph from "../../components/Paragraph";

const BillsPaymentPartners = () => {

  const height = {
    height: "250px"
  };

  return (
    <>
      <Banner title={"Bills Payment Partners"} />
      <Container>
        <Breadcrumb
          paths={[
            { name: "Home", url: "/" },
            { name: "Bills Payment Partners", url: "/billspaymentpartners" },
            // { name: "About us", url: "/news/about" },
          ]}
        />

        {/* <div className="p-5 m-3"> */}
        <Col lg={12} sm={12} xs={12} className="p-5 m-3">
          <Row lg={12} sm={12} xs={12} className="justify-content-start ">
            <Col lg={12} sm={12} xs={12} className="border p-4">
              <h1 className="fs-2">
                Mobile
              </h1>
            </Col>
            <Col lg={12} sm={12} xs={12} className="border border-top-0 border-primary-subtle p-4" style={height}>
              <Row>
                <Col xl={2} lg={3} sm={5} xs={5} >
                  <Image src={gcash}></Image>
                </Col>
                <Col xl={2} lg={3} sm={5} xs={5} >
                  <Image src={maya}></Image>
                </Col>
              </Row>
            </Col>

          </Row>
        </Col>

      </Container>

      <Container>
        <Row>
          <Col className="pb-5 px-5 m-3">
            <Row>
              <Col xs={12}>
                <Paragraph descript="Reminders before paying your water bill:" />
                <li>Examine your bill carefully upon receipt. If no complaint is made within 60 days of receipt, the bill is considered true and correct.</li>
                <li>Always bring your Statement of Account when paying.</li>
                <li>Check payments should be payable to Maynilad Water Services, Inc. </li>
                <li>Do not forget to write your Contract Account Number, Account Name, Service Address, and Contact Number at the back of the check.</li>
                <li>Make sure to pay your bills at any Maynilad-accredited payment channels.</li>
                <li>Before leaving the payment counter of our accredited payment facilities, check the details indicated in the payment stub/machine validation to make sure that the correct payment was posted.</li>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>



      <Pagination />
    </>
  );
};

export default BillsPaymentPartners;