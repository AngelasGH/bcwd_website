import React from 'react'

function ChangePassword() {
    return (
        <div className="container py-5 px-5 px-md-5">
            <div className="row px-5">
                <div className="col-lg-12">
                    <div className="row col-lg-12 py-3 px-2">
                        <div className="col-lg-12 d-flex justify-content-start mt-3 mb-3">
                            <p style={{ fontSize: "16px", fontFamily: "Roboto Bold", letterSpacing: "1px", color: "#7B7A7A" }}><strong>Change Password</strong></p>
                        </div>
                        <p className="alert alert-warning mt-3" role="alert" style={{ fontFamily: "Roboto Light", fontSize: "small" }}>For your account's security, do not share your password with anyone else</p>
                    </div>
                    <div className="row col-lg-12 py-3 px-1 pb-5">
                        <div className="col-xl-3 col-lg-3">
                            <div className="col-lg-12 myprofile">
                                <p className="pt-4">Current Password </p>
                                <p className="pt-4">New Password</p>
                                <p className="pt-4">Confirm Password</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="col-lg-12 pt-2">
                                <input type="password" className="form-control" id="exampleFormControlInput1" name="password" placeholder="●●●●●●●●●●●●" />
                                <br />
                                <input type="password" className="form-control" id="exampleFormControlInput1" name="password" placeholder="●●●●●●●●●●●●" />
                                <br />
                                <input type="password" className="form-control" id="exampleFormControlInput1" name="password" placeholder="●●●●●●●●●●●●" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="col-lg-12 pt-3">
                                <a style={{ fontSize: "small", fontFamily: "Roboto Light" }} href='/forgot_password'><p><u>Forget your password?</u></p></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-start mt-4 mb-3">
                        <a type="button" disabled>
                            <button className="btn-auth">CONFIRM</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword