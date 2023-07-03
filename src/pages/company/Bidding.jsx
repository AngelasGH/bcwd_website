import Banner from "../../components/Banner";
import DonorsCard from "../../components/DonorsCard";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Breadcrumb from "../../components/Breadcrumb";

/** Images */
import img from "../../static/img/biddingcover.png";

/** PDFs */
import pdf1 from "../../static/pdfs/bidding/1.pdf";
import pdf2 from "../../static/pdfs/bidding/2.pdf";
import pdf3 from "../../static/pdfs/bidding/3.pdf";
import pdf4 from "../../static/pdfs/bidding/4.pdf";
import pdf5 from "../../static/pdfs/bidding/5.pdf";
import pdf6 from "../../static/pdfs/bidding/6.pdf";


const Bidding = () => {

  return (
    <>
      <Banner title={"Bidding"} />
      <Container>
        <Breadcrumb
          paths={[
            { name: "Home", url: "/" },
            { name: "Bidding", url: "/bidding" },
            // { name: "About us", url: "/news/about" },
          ]}
        />

        <Row xl={3} lg={2} md={2} sm={1} xs={1}>
          <Col className="d-flex justify-content-center align-items-center">
            <DonorsCard image={img} pdfs={pdf1} />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <DonorsCard image={img} pdfs={pdf2} />
          </Col>
          <Col className="d-flex justify-contesnt-center align-items-center">
            <DonorsCard image={img} pdfs={pdf3} />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <DonorsCard image={img} pdfs={pdf4} />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <DonorsCard image={img} pdfs={pdf5} />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <DonorsCard image={img} pdfs={pdf6} />
          </Col>


        </Row>

      </Container>
      <br /><br /><br /><br /><br /><br />

    </>
  );
};

export default Bidding;


