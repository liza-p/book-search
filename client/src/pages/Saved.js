import React, { useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Navbar";
import { Container } from "../components/Grid";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import {useBookContext} from "../utils/GlobalState";
import { LOADING, UPDATE_BOOKS, ADD_BOOK, REMOVE_BOOK} from "../utils/actions";
import API from "../utils/API";

const Saved = () => {
    const [state, dispatch] = useBookContext();

    const getSaved = () => {
        dispatch({ type: LOADING});
        dispatch({ type: UPDATE_BOOKS});
    };
// saving a book to the database
    const updateSaved = (book) => {
        API.addBook()
        dispatch({ type: ADD_BOOK}, book)
    }

    const removeSaved = () => {
        dispatch({ 
            type: REMOVE_BOOK,
        })
    }

    useEffect(() => {
        getSaved();
    }, []);

        return (
            <Container fluid>
                <Nav />
                <Jumbotron />
                <Card />
            </Container>
        );

};

export default Saved;