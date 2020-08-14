import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import InputSearch from "../components/inputSearch";

const Search = () => {
    return (
      <Container fluid>
          <Navbar />
          <Jumbotron />
          <InputSearch />
          <Card />
      </Container>
    );
  };
  
  export default Search;
  