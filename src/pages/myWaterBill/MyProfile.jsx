import React from 'react'
import Juan from '../../static/img/person/Juan.png'

function MyProfile() {
    return (
        <div className="container py-5 px-5 px-md-5">
            <div className="row px-5">
                <div className="col-lg-12 d-flex justify-content-start mt-3 mb-3">
                    <p style={{ fontSize: "16px", fontFamily: "Roboto Bold", letterSpacing: "1px", color: "#7B7A7A" }}><strong>My Profile</strong></p>
                </div>

                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                    <div className="row py-2 px-1 pb-5 myprofile">
                        <p>First Name</p>
                        <p>Middle Name</p>
                        <p>Email Address</p>
                        <p>Phone Number</p>
                        <p>Gender</p>
                        <p>Date of Birth</p>
                    </div>

                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div className="row py-2 px-1 myprofile">
                        <p>Juan</p>
                        <p>Dela Crush</p>
                        <p>
                            juandelacrush@gmail.com <u>Change</u>
                        </p>
                        <p>*********04 <u>Change</u></p>
                        <p>
                            <span className="bullet">◉</span> Male{" "}
                            <span className="bullet">○</span> Female{" "}
                            <span className="bullet">○</span> Other
                        </p>
                        <p>20/12/1999</p>
                    </div>
                </div>

                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-3">
                    <div className="row col-xl-12 col-lg-12 col-md-12 col-sm-12 py-2 px-1 d-flex justify-content-center align-items-center">
                        <img className="img-fluid rounded-circle py-2 px-3 mt-2" style={{ width: "200px", height: "140px" }} src={Juan} />
                        <br />
                        <button className="btn-payment py-2 px-3 pb-3">Select Image</button>
                        <br />
                        <p className="px-3" style={{ fontSize: "12px" }}>File size: maximum 1 MB</p>
                        <p className="px-3" style={{ fontSize: "12px" }}>File extension: .JPEG, .PNG</p>
                    </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-start mt-4 mb-3">
                    <a type="button" disabled>
                        <button className="btn-auth">EDIT</button>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default MyProfile