import React from 'react'

function SuccessfullyResetPassword() {
    return (
        <div id="login">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <p style={{ fontSize: "20px", fontFamily: "Roboto Bold", letterSpacing: "1px" }}><strong>CONGRATULATIONS!</strong></p>
                    </div>

                    <div className="col-lg-12 ">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <p style={{ fontSize: "14px", fontFamily: "Roboto Light" }}>You successfully reset your password.</p>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center py-1">
                            <a href="/login"><button className="btn-auth">Login</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessfullyResetPassword