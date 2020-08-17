import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import {CardList , Card} from "../components/Card";
import InputSearch from "../components/inputSearch";
import { useBookContext } from "../utils/GlobalState";

const Search = () => {
  const [state, dispatch]= useBookContext()
    return (
      <Container fluid>
          <Navbar />
          <Jumbotron />
          <InputSearch />
          <CardList>
                {state.results.map(book => {
                  return (
                    <Card
                      key={book.link}
                      title={book.title}
                      href={book.link}
                      author={book.author}
                      thumbnail={book.image}
                      description={book.description}
                      isSaved={false}
                    />
                  );
                })}
              </CardList>
      </Container>
    );
  };
  
  export default Search;
  