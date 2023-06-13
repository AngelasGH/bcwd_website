import React from 'react'
import Paragraph from '../../components/Paragraph';

function Login() {
    return (
        <div id="login">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <p style={{ fontSize: "20px", fontFamily: "Roboto Bold", letterSpacing: "1px" }}><strong>Login</strong></p>
                    </div>

                    <div className="col-lg-12 ">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <p style={{ fontSize: "14px", fontFamily: "Roboto Regular" }}>Fill your credentials to  check your water bill account</p>
                        </div>

                        <div className="col-lg-12 py-2 d-flex justify-content-center">
                            <input type="email" class="form-control" placeholder="juan.delacrush@gmail.com" />
                        </div>
                        <div className="col-lg-12 py-2 d-flex justify-content-center">
                            <input type="password" class="form-control" placeholder="●●●●●●●●●●●●" />
                        </div>
                        <div className="col-xxl-12 col-xl-9 mx-4 col-lg-8 col-md-6 col-sm-6 col-xs-6 d-flex justify-content-end">
                            <div className='col-xxl-8 col-xl-7 col-lg-7 col-md-7 col-sm-10'>
                                <a className="px-2 auth-a" href="/forgot_password">Forgot your password?</a>
                            </div>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center py-4">
                            <a href="{% url 'user_home' %}"><button className="btn-auth">Login</button></a>
                        </div>

                        <div className="col-lg-12 d-flex justify-content-center pt-5">
                            <p style={{ fontSize: "16px", fontFamily: "Roboto Bold" }}>Don’t have an account? <a className="auth-a-a" href="/register">click here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login