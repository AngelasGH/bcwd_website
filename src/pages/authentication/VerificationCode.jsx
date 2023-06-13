import React from 'react'

function VerificationCode() {
    return (

        <div id="login">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <p style={{ fontSize: "16px", fontFamily: "Roboto Bold", letterSpacing: "1px" }}><strong>ENTER VERIFICATION CODE</strong></p>
                    </div>

                    <div className="col-lg-12 ">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <p style={{ fontSize: "14px", fontFamily: "Roboto Regular" }}>We’ve sent you an email!</p>
                        </div>
                        <div className="col-lg-12 py-2 d-flex justify-content-center">
                            <input type="password" class="form-control" placeholder="●●●●●●" />
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center py-2">
                            <a href="/new_password"><button className="btn-auth">VERIFY</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerificationCode