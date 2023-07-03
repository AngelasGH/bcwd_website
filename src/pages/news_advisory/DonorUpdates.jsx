import Banner from "../../components/Banner";
import DonorsCard from "../../components/DonorsCard";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Breadcrumb from "../../components/Breadcrumb";

/** Images */
import img1 from "../../static/img/donorupdates/1.png";
import img2 from "../../static/img/donorupdates/2.png";
import img3 from "../../static/img/donorupdates/3.png";
import img4 from "../../static/img/donorupdates/4.png";
import img5 from "../../static/img/donorupdates/5.png";
import img6 from "../../static/img/donorupdates/6.png";

/** PDFs */
import pdf1 from "../../static/pdfs/donorupdates/1.pdf";
import pdf2 from "../../static/pdfs/donorupdates/2.pdf";
import pdf3 from "../../static/pdfs/donorupdates/3.pdf";
import pdf4 from "../../static/pdfs/donorupdates/4.pdf";
import pdf5 from "../../static/pdfs/donorupdates/5.pdf";
import pdf6 from "../../static/pdfs/donorupdates/6.pdf";

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
            <DonorsCard image={img1} pdfs={pdf1} />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <DonorsCard image={img2} pdfs={pdf2} />
          </Col>
          <Col className="d-flex justify-contesnt-center align-items-center">
            <DonorsCard image={img3} pdfs={pdf3} />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <DonorsCard image={img4} pdfs={pdf4} />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <DonorsCard image={img5} pdfs={pdf5} />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <DonorsCard image={img6} pdfs={pdf6} />
          </Col>


        </Row>

      </Container>
      <br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default DonorUpdates;

