import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import inputSearch from "../components/SearchForm";

const Search = () => {
    return (
      <Container fluid>
          <Navbar></Navbar>
          <Jumbotron>
          </Jumbotron>
          <inputSearch></inputSearch>
          <Card></Card>
      </Container>
    );
  };
  
  export default Search;
  