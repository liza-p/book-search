import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Navbar";
import { Container } from "../components/Grid";

const Saved = () => {
    return (
        <Container fluid>
            <Nav></Nav>
            <Jumbotron></Jumbotron>
            <Card></Card>
        </Container>
    )
}

export default Saved;