import Banner from "../../components/Banner";
import DonorsCard from "../../components/DonorsCard";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Breadcrumb from "../../components/Breadcrumb";

const DonorUpdates = () => {
  return (
    <div>
      <Banner title={"Donor Updates"} />
      <Container>
        <Breadcrumb
          paths={[
            { name: "Home", url: "/" },
            { name: "Donor Updates", url: "/donorupdates" },
            // { name: "About us", url: "/news/about" },
          ]}
        />




        <Row xl={3} lg={2} md={2} sm={1} xs={1}>
          <Col className="d-flex justify-content-center align-items-center">
            <DonorsCard />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <DonorsCard />
          </Col>
          <Col className="d-flex justify-contesnt-center align-items-center">
            <DonorsCard />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <DonorsCard />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <DonorsCard />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <DonorsCard />
          </Col>


        </Row>

      </Container>
      <br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default DonorUpdates;

