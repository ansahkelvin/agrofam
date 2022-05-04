import "./about.css";
import { Container, Col, Row } from "react-bootstrap";
// import image from "./../../assets/tractor.webp";

const AboutUs = () => {
  return (
    <div id="about" className="about">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="about__image">
              <img
                src="https://cdn.dribbble.com/users/1731254/screenshots/15302725/media/cca784b986d2aed982b59499e6ef7393.png?compress=1&resize=1200x900&vertical=top"
                alt="about"
              />
            </div>
          </Col>
          <Col lg={6}>
            <h3 className="about__title">ABOUT AGROFAM </h3>
            <hr className="line" />

            <h3 className="about__subtitle">Area Of Focus</h3>
            <p>
              The Agrofarm will provide grant funding for the initial project
              development costs of a broad range of agriculture infrastructure
              projects spanning the entire value chain from production to
              market. These can emanate from the private or public sector and
              from local or international businesses. The types of projects
              envisioned range from rural feeder roads to agro-processing and
              marketing facilities to out-grower schemes. The emphasis will be
              on projects that contribute to food security and support to
              smallholders.
            </p>
            <h3 className="about__subtitle">Eligible Countries</h3>

            <p>
              The Agrofarm will initially operate in a small subset of countries
              (including Burkina Faso, Côte d’Ivoire, Ethiopia, Ghana,
              Mozambique, Tanzania – current members of the New Alliance for
              Food Security and Nutrition) that have entered into agreement with
              the G8 to refine their policies in order to improve investment
              opportunities and accelerate the implementation of their
              country‐led Comprehensive Africa Agriculture Development Programme
              (CAADP) plans on food security. After the initial pilot phase, the
              AFT will be extended to other countries that will have joined the
              New Alliance.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
