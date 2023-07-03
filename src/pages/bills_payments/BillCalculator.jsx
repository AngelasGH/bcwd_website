import { Container, Row, Col, Form, Image, Modal } from "react-bootstrap";
import Breadcrumb from "../../components/Breadcrumb";
import Paragraph from '../../components/Paragraph';
import Banner from "../../components/Banner";
import Table from 'react-bootstrap/Table';
import question from "../../static/svg/question.svg";
import { useState } from "react";

import bc_help from '../../static/img/bc_help.jpg';


const BillCalculator = () => {

  const water_rates = {
    "classification": {
      "residential": {
        "size": {
          "1/2": {
            "0-10": "208.65",
            "11-20": "38.35",
            "21-30": "41.75",
            "31-40": "49.00",
            "41-50": "57.55",
            "over 50": "67.55"
          },
          "3/4": {
            "0-10": "333.80",
            "11-20": "38.35",
            "21-30": "41.75",
            "31-40": "49.00",
            "41-50": "57.55",
            "over 50": "67.55"
          },
          "1": {
            "0-10": "667.65",
            "11-20": "38.35",
            "21-30": "41.75",
            "31-40": "49.00",
            "41-50": "57.55",
            "over 50": "67.55"
          },
          "1 1/2": {
            "0-10": "1,669.20",
            "11-20": "38.35",
            "21-30": "41.75",
            "31-40": "49.00",
            "41-50": "57.55",
            "over 50": "67.55"
          },
          "2": {
            "0-10": "4,173.00",
            "11-20": "38.35",
            "21-30": "41.75",
            "31-40": "49.00",
            "41-50": "57.55",
            "over 50": "67.55"
          }
        }
      },

      "commercial": {
        "size": {
          "1/2": {
            "0-10": "365.10",
            "11-20": "67.10",
            "21-30": "73.05",
            "31-40": "85.75",
          },
          "3/4": {
            "0-10": "584.15",
            "11-20": "67.10",
            "21-30": "73.05",
            "31-40": "85.75",

          },
          "1": {
            "0-10": "1,168.35",
            "11-20": "67.10",
            "21-30": "73.05",
            "31-40": "85.75",

          },
          "1 1/2": {
            "0-10": "2,921.10",
            "11-20": "67.10",
            "21-30": "73.05",
            "31-40": "85.75",

          },
          "2": {
            "0-10": "7,302.75",
            "11-20": "67.10",
            "21-30": "73.05",
            "31-40": "85.75",

          }

        }
      },

      "industrial": {
        "size": {
          "1/2": {
            "0-10": "417.30",
            "11-20": "76.70",
            "21-30": "83.45",
            "31-40": "98.00",
            "41-50": "115.10",
            "over 50": "135.10"
          },
          "3/4": {
            "0-10": "667.60",
            "11-20": "76.70",
            "21-30": "83.45",
            "31-40": "98.00",
            "41-50": "115.10",
            "over 50": "135.10"
          },
          "1": {
            "0-10": "1,335.30",
            "11-20": "76.70",
            "21-30": "83.45",
            "31-40": "98.00",
            "41-50": "115.10",
            "over 50": "135.10"
          },
          "1 1/2": {
            "0-10": "3,338.40",
            "11-20": "76.70",
            "21-30": "83.45",
            "31-40": "98.00",
            "41-50": "115.10",
            "over 50": "135.10"
          },
          "2": {
            "0-10": "8,346.00",
            "11-20": "76.70",
            "21-30": "83.45",
            "31-40": "98.00",
            "41-50": "115.10",
            "over 50": "135.10"
          }
        }
      },

      "bulk": {
        "size": {
          "1/2": {
            "0-10": "625.95",
            "11-20": "115.05",
            "21-30": "125.20",
            "31-40": "147.00",
            "41-50": "172.65",
            "over 50": "202.65"
          },
          "3/4": {
            "0-10": "1001.40",
            "11-20": "115.05",
            "21-30": "125.20",
            "31-40": "147.00",
            "41-50": "172.65",
            "over 50": "202.65"
          },
          "1": {
            "0-10": "2,002.95",
            "11-20": "115.05",
            "21-30": "125.20",
            "31-40": "147.00",
            "41-50": "172.65",
            "over 50": "202.65"
          },
          "1 1/2": {
            "0-10": "5,007.60",
            "11-20": "115.05",
            "21-30": "125.20",
            "31-40": "147.00",
            "41-50": "172.65",
            "over 50": "202.65"
          },
          "2": {
            "0-10": "12,519.00",
            "11-20": "115.05",
            "21-30": "125.20",
            "31-40": "147.00",
            "41-50": "172.65",
            "over 50": "202.65"
          }
        }
      },
    }
  }

  const [account_no, setAccountNo] = useState("");
  const [cubicMeter, setCubicMeter] = useState("");
  const [result, setResult] = useState("");

  const handleInputChangeAccount = (e) => {
    setAccountNo(e.target.value);
  }
  const handleInputChangeCubic = (e) => {
    setCubicMeter(e.target.value);
  }

  const calculateBill = (e) => {
    e.preventDefault();
    if (cubicMeter <= 10) {
      setResult(208.65);
    } else if (cubicMeter <= 20) {
      let consumed = cubicMeter % 10;
      let partial = consumed * 38.35;
      let partialBill = partial + 208.65;
      setResult(partialBill);
    }
  }
  /** Modal */
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Banner title={"Bill Calculator"} />
      <Breadcrumb paths={[
        { name: "Home", url: "/" },
        { name: "Bill Calculator", url: "/billcalculator" },
      ]} />

      <Container className="px-4 pb-5">
        <Row lg={12} sm={12} xs={12} md={12} className="mx-4">
          <Col xs={12} className="mt-3">
            <h3 className="header2">As approved by</h3>
            <Paragraph descript="The Local Water Utilities Administration per BOT Resolution No. 179 Series of 2010 and adopted by BCWD per Board Res. No. 053-2008. These rates are still in effect as of January 1, 2020." />
          </Col>

          <Col xs={6} lg={6} sm={6} className="mt-5">
            <h3 className="header2">Water Rates</h3>
            <Col xs={12} sm={12} md={12} className="mt-5">
              <Table bordered responsive>
                <thead>
                  <tr>
                    <th colSpan={2}>Classification</th>
                    <th className="text-center">Commodity Charges based on specified Cubic Meter</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(water_rates.classification).map((classification, index) => (
                    <tr key={index}>
                      <td colSpan={2} className="align-middle">{classification}</td>
                      <td>
                        <Table bordered>
                          <thead>
                            <tr>
                              <th>Size</th>
                              <th>0-10</th>
                              <th>11-20</th>
                              <th>21-30</th>
                              <th>31-40</th>
                              <th>41-50</th>
                              <th>Over 50</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.keys(water_rates.classification[classification].size).map((size, index) => (
                              <tr key={index}>
                                <td>{size}</td>
                                <td>{water_rates.classification[classification].size[size]['0-10']}</td>
                                <td>{water_rates.classification[classification].size[size]['11-20']}</td>
                                <td>{water_rates.classification[classification].size[size]['21-30']}</td>
                                <td>{water_rates.classification[classification].size[size]['31-40']}</td>
                                <td>{water_rates.classification[classification].size[size]['41-50']}</td>
                                <td>{water_rates.classification[classification].size[size]['over 50']}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Col>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <h3 className="header2">Help</h3>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <img src={bc_help} alt="lab doh" />
              </Row>
            </Modal.Body>
          </Modal>

          <Col xs={6} lg={6} sm={6} className="mt-5 mb-5 pb-5">
            <Col xs={12} className="mx-4">
              <h3 className="header2">Bill Calculator<Image className="mx-4 mb-2" src={question} onClick={handleShow} style={{ cursor: 'pointer' }} /></h3>
              <Form className="mt-5" onSubmit={calculateBill}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Control Number</Form.Label>

                  <Form.Control rows='10' type="text" placeholder="123-01234-1" className="input"
                    value={account_no}
                    onChange={handleInputChangeAccount}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Cubic Meter Consumed</Form.Label>
                  <Form.Control type="number" placeholder="e.g. 13" className="input"
                    value={cubicMeter}
                    onChange={handleInputChangeCubic}
                    required />
                </Form.Group>

                <div className="text-center">
                  <button className="mt-3 defaultButton" type="submit">CALCULATE</button>
                </div>
              </Form>

              <Form className="mt-5">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Result</Form.Label>
                  <p className="notice">Calculates current or partial billing only. The result may not be reflected on your actual bill.</p>
                  <Form.Control type="email" placeholder="Partial Billing" className="input" value={result} disabled readOnly />
                </Form.Group>
              </Form>
            </Col>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default BillCalculator;
