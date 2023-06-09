import connection from '../static/svg/connection.svg';
import Header1 from './Header1';
import facebook from '../static/svg/facebook.svg';
import twitter from '../static/svg/twitter.svg';
import youtube from '../static/svg/youtube.svg';
import linkedin from '../static/svg/linkedin.svg';

const ConnectWithUs = () => {
  return (
    <div className="bg-light py-2">
      <div className="container-fluid">
        <div className="row position-relative">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: '100%', height: '100%' }}
          >
            <img
              className="img-fluid connection"
              src={connection}
              alt="hey"

            />
            <span className="details_AU justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
              <div className="col-12 text-center">
                <Header1 header="CONNECT WITH US" className="fs-4" />
              </div>
              <div className="col-12 d-flex justify-content-center">
                <a href="https://www.facebook.com/profile.php?id=100064300855367">
                  <img
                    className="m-2"
                    src={facebook}
                    alt="fb"
                    width="40"
                    height="40"
                  />
                </a>
                <img
                  className="m-2"
                  src={twitter}
                  alt="tweet"
                  width="40"
                  height="40"
                />
                <img
                  className="m-2"
                  src={youtube}
                  alt="yt"
                  width="40"
                  height="40"
                />
                <img
                  className="m-2"
                  src={linkedin}
                  alt="li"
                  width="40"
                  height="40"
                />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;