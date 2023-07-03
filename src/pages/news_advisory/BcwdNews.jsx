import Banner from "../../components/Banner";
import Cards from "../../components/Cards";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Breadcrumb from "../../components/Breadcrumb";

/** Images */
import img1 from "../../static/img/bcwdnews/1.png";
import img2 from "../../static/img/bcwdnews/2.png";
import img3 from "../../static/img/bcwdnews/3.png";
import img4 from "../../static/img/bcwdnews/4.png";
import img5 from "../../static/img/bcwdnews/5.png";
import img6 from "../../static/img/bcwdnews/6.png";

/** PDFs */
import pdf1 from "../../static/pdfs/bcwdnews/1.pdf";
import pdf2 from "../../static/pdfs/bcwdnews/2.pdf";
import pdf3 from "../../static/pdfs/bcwdnews/3.pdf";
import pdf4 from "../../static/pdfs/bcwdnews/4.pdf";
import pdf5 from "../../static/pdfs/bcwdnews/5.pdf";
import pdf6 from "../../static/pdfs/bcwdnews/6.pdf";

const BcwdNews = () => {
  return (
    <>
      <Banner title={"BCWD News"} />
      <Container >
        <Breadcrumb
          paths={[
            { name: "Home", url: "/" },
            { name: "About us", url: "/news/about" },
          ]}
        />


        <Row xl={3} lg={2} md={2} sm={1} xs={1}>
          <Col className="d-flex justify-content-center align-items-center">
            <Cards image={img1} title={"BCWD WILL BE CLOSED FOR THE HOLY WEEK AND ARAW NG KAGITINGAN"} date={"April 5, 2023"} description={"Please be informed that the Butuan City Water District (BCWD) will be closed on the following schedule in observance of the Holy Week and Araw ng Kagitingan:"} pdfs={pdf1} />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Cards image={img2} title={"Pay Your Bills at any SM Bills Payment Centers and save P300 from SM Store!"} date={"February 28, 2023"} description={"Now you may pay your Butuan City Water District Bills at any SM Bills Payment Centers and save P300 from the SM Store!"} pdfs={pdf2} />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Cards image={img3} title={"BCWD in 49 Years of Service"} date={"April 1, 2023"} description={"Butuan City Water District celebrates 22nd Water Consciousness week and 49 years in service, with the theme: Accelerating Actions towards a Water Secure Community."} pdfs={pdf3} />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Cards image={img4} title={"One MERALCO Foundation and Butuan City WD seal partnership"} date={"September 29, 2022"} description={"One MERALCO Foundation, Inc. (OMF), the social development arm and corporate foundation of the Manila Electric Company (MERALCO), and Butuan City Water District (BCWD), "} pdfs={pdf4} />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Cards image={img5} title={"Water Rate Adjustment Invitation"} date={"October 26, 2022"} description={"Mga bililhong konsumador... ang butuan city water district naga-awhag kaninyo sa pagtambong sa ipahigayon nga panagtigum kabahin sa sugyot nga water rate adjustment"} pdfs={pdf5} />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Cards image={img6} title={"BILLING ADVISORY "} date={"January 24, 2023"} description={"Please be advised that the Butuan City Water District (BCWD) will enforce an adjustment in the provisions stipulated in the Application and Contract for Water Services"} pdfs={pdf6} />
          </Col>

        </Row>

      </Container>


    </>
  );
};

export default BcwdNews;