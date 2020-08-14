import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Navbar";
import { Container } from "../components/Grid";
import Card from "../components/Card";

const Saved = () => {
    return (
        <Container fluid>
            <Nav />
            <Jumbotron />
            <Card />
        </Container>
    )
}

export default Saved;