import { Card, Button, Container, Col, Row } from "react-bootstrap";
import "./blog.css";

const Blog = () => {
  return (
    <div id="blog" className="blog bg-light">
      <h1 className="heading">Blog</h1>
      <p className="blog__paragraph">
        The AgroFarm builds on previous G8 and G20 commitments by supporting
        financially sound, environmentally sustainable, and socially beneficial
        food security projects. As a project preparation facility, the projects
        the Agrofarm supports form a pipeline of bankable food security projects that
        support Africa's agriculture transformation agenda. The Agrofarm provides
        grant funds for project development costs such as feasibility studies,
        market research, financial modeling, business plan development, and
        environmental and social impact studies. The Agrofarm increases the number of
        investment-ready agriculture infrastructure projects and public-private
        partnerships by defraying front-end project development costs and risks
        that commercial developers or other project sponsors are unable to
        shoulder alone. A modest amount of targeted donor funding can unlock
        hundreds of millions of dollars in concessional and commercial financing
        for agriculture infrastructure needs in rural Africa.
      </p>
      <Container>
        <Row>
          <Col lg={4}>
            <Card className="blog__card">
              <Card.Img
                className="blog__image"
                src="https://images.unsplash.com/photo-1491514104444-e033f313a5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="canada"
              ></Card.Img>
              <Card.Title className="blog__title">
                Canada Fund for Local Initiatives — Community Projects in South
                Africa
              </Card.Title>
              <Card.Body className="blog__body">
                The Canada Fund for Local Initiatives invites proposals that
                meet the needs of local communities in South Africa. The
                priorities under this call include women’s economic rights,
                decent jobs and entrepreneurship, and investing in the poorest
                and most vulnerable (which may include agriculture or
                aquaculture projects), as well as environment, climate action
              </Card.Body>
              <Button className="blog__btn" variant="success">
                Read More
              </Button>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="blog__card">
              <Card.Img
                className="blog__image"
                src="https://images.unsplash.com/photo-1475084124271-aebaf8a67166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="canada"
              ></Card.Img>
              <Card.Title className="blog__title">
              U. S. Department of Agriculture — Food for Progress Program
              </Card.Title>
              <Card.Body className="blog__body">
                The Food for Progress Program provides for the donation of U.S.
                agricultural commodities to developing countries committed to
                expanding free enterprise in the agricultural sector. The
                objective is to improve agricultural productivity and to expand
                trade of agricultural products. The Program has prioritized the
                following areas: the Cacao sector, the Coffee sector, the Spices
                sector, Sanitary and Phytosanitary Standards, the Trade
                Facilitation Agreement, and Climate Smart Agriculture.
              </Card.Body>
              <Button className="blog__btn" variant="success">
                Read More
              </Button>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="blog__card">
              <Card.Img
                className="blog__image"
                src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80"
                alt="canada"
              ></Card.Img>
              <Card.Title className="blog__title">
                Do IFAD-supported projects reduce the risk of conflict? What the
                evidence says
              </Card.Title>
              <Card.Body className="blog__body">
                We used GIS to assess the impact of IFAD-supported projects on
                the likelihood of conflict in fragile contexts. Our results
                suggest that the presence of IFAD interventions may prevent
                conflicts from arising and reduce the overall number of
                conflicts.
              </Card.Body>
              <Button className="blog__btn" variant="success">
                Read More
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
