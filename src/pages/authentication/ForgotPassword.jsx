import React from 'react'

function ForgotPassword() {
    return (
        <div id="login">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <p style={{ fontSize: "16px", fontFamily: "Roboto Bold", letterSpacing: "1px" }}><strong>RESET YOUR PASSWORD</strong></p>
                    </div>

                    <div className="col-lg-12 ">
                        <div className="col-lg-12 py-2 d-flex justify-content-center">
                            <input type="email" class="form-control" placeholder="juan.delacrush@gmail.com" />
                        </div>

                        <div className="col-lg-12 d-flex justify-content-center py-4">
                            <a href="/verification_code"><button className="btn-auth">Find Email</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword