import { Table } from "react-bootstrap"

function MyWaterBill() {
    return (
        <div className="container py-5 px-5 px-md-5">
            <div className="row px-5">
                <div className="col-lg-12 d-flex justify-content-start mt-3 mb-3">
                    <p style={{ fontSize: "16px", fontFamily: "Roboto Bold", letterSpacing: "1px", color: "#7B7A7A" }}><strong>My Water Bill</strong></p>
                </div>
                <div className="col-lg-12 d-flex justify-content-start mt-3 mb-3">
                    <Table striped bordered hover className="custom-table" style={{ border: "hidden" }}>
                        <thead>
                            <tr>
                                <th className="col-lg-3" style={{ border: "hidden", padding: "15px" }}>Billing Date</th>
                                <th className="col-lg-3" style={{ border: "hidden", padding: "15px" }}>Due Date</th>
                                <th className="col-lg-3" style={{ border: "hidden", padding: "15x" }}>Meter Name</th>
                                <th className="col-lg-3" style={{ border: "hidden", padding: "15px" }}>Meter Number</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>07/15/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>08/05/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>WaterCo</td>
                                <td style={{ border: "hidden", padding: "15px" }}>246813579</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>08/22/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>09/12/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>AquaCorp</td>
                                <td style={{ border: "hidden", padding: "15px" }}>135792468</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>09/29/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>10/20/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>FlowWater</td>
                                <td style={{ border: "hidden", padding: "15px" }}>864209753</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>10/17/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>11/06/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>AquaStream</td>
                                <td style={{ border: "hidden", padding: "15px" }}>975310824</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>11/24/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>12/15/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>WaterWorks</td>
                                <td>408257193</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>12/31/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>01/20/2024</td>
                                <td style={{ border: "hidden", padding: "15px" }}>AquaFlow</td>
                                <td style={{ border: "hidden", padding: "15px" }}>219475386</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>01/31/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>01/20/2024</td>
                                <td style={{ border: "hidden", padding: "15px" }}>EVER</td>
                                <td style={{ border: "hidden", padding: "15px" }}>219475386</td>
                            </tr>
                        </tbody>
                    </Table>

                </div>
                <div className="col-lg-12 d-flex justify-content-start mt-3 mb-3">
                    <Table striped bordered hover style={{ border: "hidden" }}>
                        <thead>
                            <tr style={{ border: "hidden", padding: "15px" }}>
                                <th className="col-lg-3" style={{ border: "hidden", padding: "15px" }}>Reading Date</th>
                                <th className="col-lg-3" style={{ border: "hidden", padding: "15px" }}>Present Reading</th>
                                <th className="col-lg-3" style={{ border: "hidden", padding: "15px" }}>Previous Reading</th>
                                <th className="col-lg-3" style={{ border: "hidden", padding: "15px" }}>Cubic Meter Consumed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>07/14/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>293</td>
                                <td style={{ border: "hidden", padding: "15px" }}>281</td>
                                <td style={{ border: "hidden", padding: "15px" }}>12</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>08/21/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>437</td>
                                <td style={{ border: "hidden", padding: "15px" }}>421</td>
                                <td style={{ border: "hidden", padding: "15px" }}>16</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>09/28/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>522</td>
                                <td style={{ border: "hidden", padding: "15px" }}>504</td>
                                <td style={{ border: "hidden", padding: "15px" }}>18</td>
                            </tr>
                            <tr style={{ border: "hidden", padding: "15px" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>10/16/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>391</td>
                                <td style={{ border: "hidden", padding: "15px" }}>376</td>
                                <td style={{ border: "hidden", padding: "15px" }}>15</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>11/23/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>289</td>
                                <td style={{ border: "hidden", padding: "15px" }}>278</td>
                                <td style={{ border: "hidden", padding: "15px" }}>11</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>12/30/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>478</td>
                                <td style={{ border: "hidden", padding: "15px" }}>462</td>
                                <td style={{ border: "hidden", padding: "15px" }}>16</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>01/31/2023</td>
                                <td style={{ border: "hidden", padding: "15px" }}>478</td>
                                <td style={{ border: "hidden", padding: "15px" }}>462</td>
                                <td style={{ border: "hidden", padding: "15px" }}>16</td>
                            </tr>
                        </tbody>
                    </Table>


                </div>

                <div className="col-lg-12 d-flex justify-content-start mt-3 mb-3">
                    <Table striped bordered hover style={{ border: "hidden" }}>
                        <thead>
                            <tr>
                                <th className="col-lg-3" style={{ border: "hidden", padding: "15px" }}>Current Billing</th>
                                <th className="col-lg-3" style={{ border: "hidden", padding: "15px" }}>Overpayment/Arrears</th>
                                <th className="col-lg-3" style={{ border: "hidden", padding: "15px" }}>Maintenance Fee</th>
                                <th className="col-lg-3" style={{ border: "hidden", padding: "15px" }}>Total Amount Due</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>323.70</td>
                                <td style={{ border: "hidden", padding: "15px" }}>- 0.30</td>
                                <td style={{ border: "hidden", padding: "15px" }}>10.00</td>
                                <td style={{ border: "hidden", padding: "15px" }}>333.40</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>250.80</td>
                                <td style={{ border: "hidden", padding: "15px" }}>- 2.50</td>
                                <td style={{ border: "hidden", padding: "15px" }}>10.00</td>
                                <td style={{ border: "hidden", padding: "15px" }}>258.30</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>180.50</td>
                                <td style={{ border: "hidden", padding: "15px" }}>- 1.20</td>
                                <td style={{ border: "hidden", padding: "15px" }}>10.00</td>
                                <td style={{ border: "hidden", padding: "15px" }}>189.30</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>400.00</td>
                                <td style={{ border: "hidden", padding: "15px" }}>0.00</td>
                                <td style={{ border: "hidden", padding: "15px" }}>10.00</td>
                                <td style={{ border: "hidden", padding: "15px" }}>410.00</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>150.20</td>
                                <td style={{ border: "hidden", padding: "15px" }}>- 3.50</td>
                                <td style={{ border: "hidden", padding: "15px" }}>10.00</td>
                                <td style={{ border: "hidden", padding: "15px" }}>156.70</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>275.60</td>
                                <td style={{ border: "hidden", padding: "15px" }}>- 1.80</td>
                                <td style={{ border: "hidden", padding: "15px" }}>10.00</td>
                                <td style={{ border: "hidden", padding: "15px" }}>284.40</td>
                            </tr>
                            <tr style={{ border: "hidden" }}>
                                <td style={{ border: "hidden", padding: "15px" }}>195.30</td>
                                <td style={{ border: "hidden", padding: "15px" }}>0.00</td>
                                <td style={{ border: "hidden", padding: "15px" }}>10.00</td>
                                <td style={{ border: "hidden", padding: "15px" }}>205.30</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
                <div className="col-lg-12 d-flex justify-content-start mt-5 mb-3">
                    <p style={{ fontSize: "16px", fontFamily: "Roboto Bold", letterSpacing: "1px", color: "#7B7A7A" }}><strong>Current Amount Due: P 333.40</strong></p>
                </div>
            </div>
        </div>
    )
}

export default MyWaterBill