import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar"




const Search = () => {
    return (
      <Container fluid>
          <Navbar></Navbar>
          <Jumbotron>
          </Jumbotron>
        {/* <Row>
          <Col size="md-6">
            <CreatePostForm />
          </Col>
          <Col size="md-6 sm-12">
            <PostsList />
          </Col>
        </Row> */}
      </Container>
    );
  };
  
  export default Search;
  