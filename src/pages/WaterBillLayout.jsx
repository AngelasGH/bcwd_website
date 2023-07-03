import { Outlet, Link, useLocation } from "react-router-dom";
import { Row } from "react-bootstrap";

function WaterBillLayout() {
    const location = useLocation();

    return (
        <div style={{ display: "flex" }}>
            <div className="col-xl-2">
                <div
                    className="d-flex flex-column flex-shrink-0 p-3 sticky-top"
                    style={{ width: "290px", minHeight: "100vh" }}
                >

                    <ul className="nav flex-column mb-auto mx-3">
                        {/* Left column */}
                        <div className="col-lg-12 text-start mx-3 my-3">
                            <h3 style={{ color: "#049DD8", fontWeight: "bold", fontSize: "large" }}>My Water Bill</h3>
                        </div>
                        <li className="nav-item" style={{ color: "#049DD8" }}>
                            <a
                                href="/bill/myprofile"
                                className="nav-link water-bill-link"
                                style={{ color: "#7B7A7A", fontFamily: `${location.pathname === '/bill/myprofile' ? 'Roboto Bold' : ""}` }}
                            >
                                My Profile
                            </a>
                        </li>
                        <li>
                            <a
                                href="/bill/mywaterbill"
                                className="nav-link water-bill-link"
                                style={{ color: "#7B7A7A", fontFamily: `${location.pathname === '/bill/mywaterbill' ? 'Roboto Bold' : ""}` }}
                            >
                                My Water Bill
                            </a>
                        </li>
                        <li>
                            <a
                                href="/bill/changepassword"
                                className="nav-link water-bill-link"
                                style={{ color: "#7B7A7A", fontFamily: `${location.pathname === '/bill/changepassword' ? 'Roboto Bold' : ""}` }}
                            >
                                Change Password
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link link-dark">
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-10 bg-light">
                <Outlet />
            </div>
        </div>

    );
}

export default WaterBillLayout;
