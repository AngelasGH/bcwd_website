import Paragraph from '../../components/Paragraph';

function Register() {
    return (
        <div id="login">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <p style={{ fontSize: "20px", fontFamily: "Roboto Bold", letterSpacing: "1px" }}><strong>Register</strong></p>
                    </div>

                    <div className="col-lg-12 ">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <p style={{ fontSize: "14px", fontFamily: "Roboto Regular" }}>Fill in your credentials to  check your water bill account</p>
                        </div>

                        <div className="col-lg-12 py-2 d-flex justify-content-center">
                            <input type="text" class="form-control" placeholder="Juan Delacruz" />
                        </div>
                        <div className="col-lg-12 py-2 d-flex justify-content-center">
                            <input type="email" class="form-control" placeholder="juan.delacruz@gmail.com" />
                        </div>
                        <div className="col-lg-12 py-2 d-flex justify-content-center">
                            <input type="text" class="form-control" placeholder="202-12345-6" />
                        </div>
                        <div className="col-lg-12 py-2 d-flex justify-content-center">
                            <input type="password" class="form-control" placeholder="●●●●●●●●●●●●" />
                        </div>
                        <div className="col-lg-12 py-2 d-flex justify-content-center">
                            <input type="password" class="form-control" placeholder="●●●●●●●●●●●●" />
                        </div>

                        <div className="col-lg-12 d-flex justify-content-center py-4">
                            <a href="{% url 'user_home' %}"><button className="btn-auth">CREATE AN ACCOUNT</button></a>
                        </div>

                        <div className="col-lg-12 d-flex justify-content-center pt-5">
                            <p style={{ fontSize: "16px", fontFamily: "Roboto Bold" }}>Already have an account? <a className="auth-a-a" href="/login">click here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register