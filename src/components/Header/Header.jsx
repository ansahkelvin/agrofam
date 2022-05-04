import { Col, Row } from "react-bootstrap";
import "./header.css";
import Navigation from "./../NavBar/Navigation";

const Header = () => {
  return (
    <div id="home" className="header">
      <Navigation />
      <div className="container">
        <Row>
          <Col lg={6}>
            <div className="header__contents">
              <h1 className="header__title">
                World Rescue Plan Technical Assistance <br></br> Investment
                Program
              </h1>
              <p className="header__paragraph">
                AgroFarm Solutions has the local expertise to help you take
                advantage of all the opportunities agriculture has to offer.
              </p>
              <Row>
                <Col lg={3}>
                  <button className="header__button">Learn More</button>
                </Col>

                <Col lg={3}>
                  <button className="header__button_reverse">Learn More</button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={6}>
            <div className="header__image">
              <img
                src="https://cdn.dribbble.com/users/3691024/screenshots/14598925/media/d67d902911c913fe83b0f13cb7cdc747.jpg?compress=1&resize=1200x900&vertical=top"
                alt="farm"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
