import { Row, Container, Col, Form, Button,FormControl } from "react-bootstrap";
import "./funding.styles.css";

const Funding = () => {
  return (
    <div className="funding">
      <div className="container">
        <h1 className="funding__title text-center"> How to get Funding</h1>
        <Container>
          <Row>
            <Col lg={8}>
                <h3>Funding Eligibilty</h3>
              <p className="funding_text">
                Determining whether you are eligible to apply for and receive
                AGRA funding is critical. If you are not eligible for a specific
                funding opportunity, you would waste time and money completing
                the application process when you cannot actually receive the
                grant. When considering eligibility, the first step is to know
                what type of organization you represent (refer to categories
                listed below). AGRA makes awards only to those organizations
                that have been determined to possess the operational capability,
                technical expertise, adequate internal controls and experience
                to implement AGRA transformative agenda. AGRA's aim is to invest
                in projects that have measurable impact and can create
                meaningful, transformative change in the agriculture sector in
                Africa.
              </p>
              <h6>Enter your email to proceed</h6>
              <Col lg={6}>
              <Form className="d-flex">
              <FormControl
                type="email"
                placeholder="email"
                className="me-2"
                aria-label="Search"
              />
              <Button type="submit" variant="outline-success">Submit</Button>
            </Form>
              </Col>
            
            </Col>
            <Col lg={4}>
              <div className="funding__image">
                <img
                  src="https://images.unsplash.com/photo-1593510987760-2d895bc8109d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="funding"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Funding;
