import Banner from "../../components/Banner";
import Cards from "../../components/Cards";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Breadcrumb from "../../components/Breadcrumb";

const BcwdNews = () => {
  return (
    <>
      <Banner title={"BCWD News"} />
      <Container >
        <Breadcrumb
          paths={[
            { name: "Home", url: "/" },
            { name: "BCWD News", url: "/news" },
            // { name: "About us", url: "/news/about" },
          ]}
        />




        <Row xl={3} lg={2} md={2} sm={1} xs={1}>
          <Col className="d-flex justify-content-center align-items-center">
            <Cards />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Cards />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Cards />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Cards />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Cards />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Cards />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Cards />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Cards />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Cards />
          </Col>
        </Row>

      </Container>


    </>
  );
};

export default BcwdNews;