import { Container, Row, Col } from "react-bootstrap";
import logo from "./../../assets/logo.png";
import logo1 from "./../../assets/afdb-logo-en_0.jpeg";
import logo2 from "./../../assets/agra_primary_logo.png";
import logo3 from "./../../assets/ncat-attra-header-logo.png";
import logo4 from "./../../assets/logo-mofa.png";
import logo5 from "./../../assets/customLogo.jpeg";

import "./sponsors.css";

const Sponsors = () => {
  return (
    <div className="sponsors bg-light">
      <Container>
        <Row>
          <Col lg={2}>
            <div className="sponsors__image">
              <img src={logo1} alt={logo1} />
            </div>
          </Col>
          <Col lg={2}>
            <div className="sponsors__image">
              <img src={logo2} alt={logo2} />
            </div>
          </Col>
          <Col lg={2}>
            <div className="sponsors__image">
              <img src={logo3} alt={logo3} />
            </div>
          </Col>
          <Col lg={2}>
            <div className="sponsors__image">
              <img src={logo4} alt={logo4} />
            </div>
          </Col>
          <Col lg={2}>
            <div className="sponsors__image">
              <img src={logo5} alt={logo5} />
            </div>
          </Col>
          <Col lg={2}>
            <div className="sponsors__image">
              <img src={logo} alt={logo} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sponsors;
