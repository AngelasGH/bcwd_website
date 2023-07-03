import Banner from "../../components/Banner";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paragraph from '../../components/Paragraph';
import MyTable from "../../components/MyTable";

import Breadcrumb from "../../components/Breadcrumb";
import { useState } from "react";
const Transparency = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

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
                <li onClick={() => handleCategoryClick("Category 1")}>
                  Dbm Approved Budget And Targets
                  {selectedCategory === "Category 1" && (
                    <ul>
                      <li onClick={() => handleCategoryClick("Category 1")}>
                        Approved Budget
                        {selectedCategory === "Category 1" && (
                          <ul>
                            <li onClick={() => handleCategoryClick("Category 1")}>
                              2019
                              {selectedCategory === "Category 1" && (
                                <ul>
                                  <li><a href="#" target="_blank">2019 Approved Budget</a></li>
                                  <li><a href="#" target="_blank">2019 Re-Aligned Budget</a></li>
                                </ul>
                              )}
                            </li>
                            <li onClick={() => handleCategoryClick("Category 1")}>
                              2020
                              {selectedCategory === "Category 1" && (
                                <ul>
                                  <li><a href="#" target="_blank">2020 Approved Budget</a></li>
                                </ul>
                              )}
                            </li>
                            <li onClick={() => handleCategoryClick("Category 1")}>
                              2021
                              {selectedCategory === "Category 1" && (
                                <ul>
                                  <li><a href="#" target="_blank">2021 Approved Budget</a></li>
                                </ul>
                              )}
                            </li>
                          </ul>
                        )}
                      </li>
                      <li onClick={() => handleCategoryClick("Category 2")}>
                        Targets & Accomplishments
                        {selectedCategory === "Category 2" && (
                          <ul>
                            <li onClick={() => handleCategoryClick("Category 2")}>
                              2019
                              {selectedCategory === "Category 2" && (
                                <ul>
                                  <li><a href="#" target="_blank">2019 MFO</a></li>
                                  <li><a href="#" target="_blank">2019 Form A</a></li>
                                  <li><a href="#" target="_blank">2019 Form A-1</a></li>
                                </ul>
                              )}
                            </li>
                            <li onClick={() => handleCategoryClick("Category 2")}>
                              2020
                              {selectedCategory === "Category 2" && (
                                <ul>
                                  <li><a href="#" target="_blank">2020 Form A And A-1</a></li>
                                  <li><a href="#" target="_blank">2020 Form A With Accomplishments</a></li>
                                  <li><a href="#" target="_blank">2020 Form A-1 With Accomplishments</a></li>
                                </ul>
                              )}
                            </li>
                            <li onClick={() => handleCategoryClick("Category 2")}>
                              2021
                              {selectedCategory === "Category 2" && (
                                <ul>
                                  <li><a href="#" target="_blank">2021 Form A And A-1 With Accomplishments 2021</a></li>
                                </ul>
                              )}
                            </li>
                          </ul>
                        )}
                      </li>
                      <li>COVID-19 Response Measures</li>
                    </ul>
                  )}
                </li>
                <li onClick={() => handleCategoryClick("Category 2")}>
                  Annual Procurement Plan
                  {selectedCategory === "Category 2" && (
                    <ul>
                      <li>2017 APP</li>
                      <li>2018 APP</li>
                      <li>2019 APP</li>
                      <li>2020 APP</li>
                      <li>2021 APP</li>
                      <li>2022 APP</li>
                    </ul>
                  )}
                </li>
                <li onClick={() => handleCategoryClick("Category 3")}>
                  Major Programs, Projects and Activities, Beneficiaries, and Status of Implementation
                  {selectedCategory === "Category 3" && (
                    <ul>
                      <li onClick={() => handleCategoryClick("Category 3")}>
                        2017
                        {selectedCategory === "Category 3" && (
                          <ul>
                            <li><a href="#" target="_blank">2017 Major Projects (As Of Dec.)</a></li>
                          </ul>
                        )}
                      </li>
                      <li onClick={() => handleCategoryClick("Category 3")}>
                        2018
                        {selectedCategory === "Category 3" && (
                          <ul>
                            <li><a href="#" target="_blank">Major Projects (Production) 2018</a></li>
                            <li><a href="#" target="_blank">Major Projects (Engineering) As Of Dec.</a></li>
                          </ul>
                        )}
                      </li>
                      <li onClick={() => handleCategoryClick("Category 3")}>
                        2019
                        {selectedCategory === "Category 3" && (
                          <ul>
                            <li><a href="#" target="_blank">Major Projects (Engineering) 2019</a></li>
                          </ul>
                        )}
                      </li>
                      <li onClick={() => handleCategoryClick("Category 3")}>
                        2020
                        {selectedCategory === "Category 3" && (
                          <ul>
                            <li><a href="#" target="_blank">2020 Major Projects (Engineering)</a></li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>
                <li onClick={() => handleCategoryClick("Category 4")}>
                  Annual Financial Reports
                  {selectedCategory === "Category 4" && (
                    <ul>
                      <li onClick={() => handleCategoryClick("Category 4")}>
                        Annual Reports
                        {selectedCategory === "Category 4" && (
                          <ul>
                            <li><a href="#" target="_blank">2015 Annual Report</a></li>
                            <li><a href="#" target="_blank">2016 Annual Report</a></li>
                            <li><a href="#" target="_blank">2017 Annual Report</a></li>
                            <li><a href="#" target="_blank">2018 Annual Report</a></li>
                            <li><a href="#" target="_blank">2019 Annual Report</a></li>
                            <li><a href="#" target="_blank">2020 Annual Report</a></li>
                            <li><a href="#" target="_blank">2021 Annual Report</a></li>
                          </ul>
                        )}
                      </li>
                      <li><a href="#" target="_blank">2019 Financial Statement (As Of Dec. 2019)</a></li>
                      <li><a href="#" target="_blank">2020 Financial Statement (As Of Dec. 2020)</a></li>
                      <li><a href="#" target="_blank">2021 Financial Statement (As Of Dec. 31, 2021)</a></li>
                    </ul>
                  )}
                </li>
                <li onClick={() => handleCategoryClick("Category 6")}>
                  QMS Certification
                  {selectedCategory === "Category 6" && (
                    <ul>
                      <li><a href="#" target="_blank">BCWD QMS Audit Report (Jan. 21, 2021)</a></li>
                      <li><a href="#" target="_blank">ISO 9001:2015</a></li>
                    </ul>
                  )}
                </li>
                <li onClick={() => handleCategoryClick("Category 7")}>
                  System of Ranking Delivery Units
                  {selectedCategory === "Category 7" && (
                    <ul>
                      <li><a href="#" target="_blank">2019 Mechanics In Ranking</a></li>
                      <li><a href="#" target="_blank">2020 Mechanics In Ranking</a></li>
                      <li><a href="#" target="_blank">2021 Mechanics In Ranking</a></li>
                    </ul>
                  )}
                </li>
                <li onClick={() => handleCategoryClick("Category 8")}>
                  Agency Review and Compliance Procedure of Statements and Financial Disclosures
                  {selectedCategory === "Category 8" && (
                    <ul>
                      <li><a href="#" target="_blank">2020 Compliance Procedures In Filing And Submission Of SALN (No Changes)</a></li>
                      <li><a href="#" target="_blank">2021 Compliance Procedures In Filing And Submission Of SALN (No Changes)</a></li>
                    </ul>
                  )}
                </li>
                <li onClick={() => handleCategoryClick("Category 9")}>
                  Freedom of Information
                  {selectedCategory === "Category 9" && (
                    <ul>
                      <li><a href="#" target="_blank">One-Page FOI Manual</a></li>
                      <li><a href="#" target="_blank">FOI Reports 2021 (As Of Jan. 31, 2022)</a></li>
                      <li><a href="#" target="_blank">BCWD FOI Manual</a></li>
                    </ul>
                  )}
                </li>
              </ul>
            </Col>

            <Col xs={12} className="mt-4 pt-4">
              <h3 className="header2">Other Good Governance Conditions</h3>
            </Col>
            <Col xs={12} className="mt-3 pb-5">
              <ul>
                <li onClick={() => handleCategoryClick("Category 10")}>Certification of Compliance
                  {selectedCategory === "Category 10" && (
                    <ul>
                      <li><a href="#" target="_blank">BCWD Transparency Seal Certification</a></li>
                    </ul>
                  )}
                </li>
                <li onClick={() => handleCategoryClick("Category 11")}>PhilGEPS Posting
                  {selectedCategory === "Category 11" && (
                    <ul>
                      <li><a href="#" target="_blank">2015 Certification of Compliance</a></li>
                      <li><a href="#" target="_blank">2017 Procurement Status</a></li>
                      <li><a href="#" target="_blank">2018 Procurement Monitoring Report</a></li>
                      <li><a href="#" target="_blank">2019 Procurement Monitoring Report as of 12-31-2019</a></li>
                      <li><a href="#" target="_blank">2020 PhilGEPS Posting Status</a></li>
                    </ul>
                  )}
                </li>
                <li onClick={() => handleCategoryClick("Category 12")}>Procurement Monitoring Reports
                  {selectedCategory === "Category 12" && (
                    <ul>
                      <li><a href="#" target="_blank">2016 Summary of Procurement</a></li>
                      <li><a href="#" target="_blank">2017 Procurement Status</a></li>
                      <li><a href="#" target="_blank">2018 Procurement Monitoring Report</a></li>
                      <li><a href="#" target="_blank">2019 Procurement Monitoring Report as of 12-31-2019</a></li>
                      <li><a href="#" target="_blank">2020 PhilGEPS Posting Status</a></li>
                      <li><a href="#" target="_blank">2021 Procurement Monitoring Report</a></li>
                    </ul>
                  )}
                </li>
                <li onClick={() => handleCategoryClick("Category 13")}>ARTA Compliance
                  {selectedCategory === "Category 13" && (
                    <ul>
                      <li><a href="#" target="_blank">2021 CC Certificate of Compliance</a></li>
                      <li><a href="#" target="_blank">2021 CC Compliance Report</a></li>
                      <li><a href="#" target="_blank">2021 CC Transmittal Letter</a></li>
                      <li><a href="#" target="_blank">BCWD Citizen Charter 2021</a></li>
                      <li><a href="#" target="_blank">2022 CC Certificate of Compliance</a></li>
                      <li><a href="#" target="_blank">2022 CC Compliance Report</a></li>
                      <li><a href="#" target="_blank">2022 CC Transmittal Letter</a></li>
                      <li><a href="#" target="_blank">2022 BCWD Citizens Charter</a></li>
                      <li><a href="#" target="_blank">2023 CC Certificate of Compliance</a></li>
                      <li><a href="#" target="_blank">2023 CC Compliance Report</a></li>
                      <li><a href="#" target="_blank">2023 CC Transmittal Letter</a></li>
                      <li><a href="#" target="_blank">2023 BCWD Citizens Charter</a></li>
                    </ul>
                  )}
                </li>
                <li onClick={() => handleCategoryClick("Category 14")}>SALN Submission/Filing
                  {selectedCategory === "Category 14" && (
                    <ul>
                      <li><a href="#" target="_blank">2019 SALN Compliance</a></li>
                      <li><a href="#" target="_blank">2020 SALN Compliance</a></li>
                      <li><a href="#" target="_blank">2020 Compliance Procedures in Filing and Submission of SALN (No Changes)</a></li>
                      <li><a href="#" target="_blank">2021 SALN Review Committee</a></li>
                      <li><a href="#" target="_blank">2021 SALN Compliance</a></li>
                      <li><a href="#" target="_blank">2021 Compliance Procedures in Filing and Submission of SALN (No Changes)</a></li>
                    </ul>
                  )}
                </li>
                <li onClick={() => handleCategoryClick("Category 15")}>Office of the Board of Directors
                  {selectedCategory === "Category 15" && (
                    <ul>
                      <li><a href="#" target="_blank">Board Solicitation for Education Sector</a></li>
                    </ul>
                  )}
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