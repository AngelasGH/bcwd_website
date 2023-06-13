import React from 'react'

function NewPassword() {
    return (
        <div id="login">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <p style={{ fontSize: "16px", fontFamily: "Roboto Bold", letterSpacing: "1px" }}><strong>NEW PASSWORD</strong></p>
                    </div>

                    <div className="col-lg-12 ">
                        <div className="col-lg-12 py-2 d-flex justify-content-center">
                            <input type="password" class="form-control" placeholder="●●●●●●●●●●●●" />
                        </div>
                        <div className="col-lg-12 py-2 d-flex justify-content-center">
                            <input type="password" class="form-control" placeholder="●●●●●●●●●●●●" />
                        </div>

                        <div className="col-lg-12 d-flex justify-content-center py-4">
                            <a href="/successfully_reset_password"><button className="btn-auth">RESET PASSWORD</button></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPassword