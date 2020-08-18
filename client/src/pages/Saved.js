import React from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Navbar";
import { Container } from "../components/Grid";
import {CardList, Card} from "../components/Card";
import { useBookContext } from "../utils/GlobalState";

const Saved = () => {
    const [state, dispatch] = useBookContext();

    return (
        <Container fluid>
            <Nav page="saved" />
            <Jumbotron />
            <CardList>
            {state.books.map(book => {
                return (
                <Card
                    key={book.link}
                    title={book.title}
                    href={book.link}
                    author={book.author}
                    thumbnail={book.image}
                    description={book.description}
                    id={book._id}
                />
                );
            })}
            </CardList>
        </Container>
    );
};

export default Saved;