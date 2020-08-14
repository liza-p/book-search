import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron"


const Home = () => {
    return (
      <Container fluid>
          <Jumbotron>
              Is this working? 
          </Jumbotron>
        <Row>
          <Col size="md-6">
            <CreatePostForm />
          </Col>
          <Col size="md-6 sm-12">
            <PostsList />
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Home;
  