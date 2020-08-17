import React, { useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Navbar";
import { Container } from "../components/Grid";
import {CardList, Card} from "../components/Card";
import { Link } from "react-router-dom";
import {useBookContext} from "../utils/GlobalState";
import { LOADING, UPDATE_BOOKS, REMOVE_BOOK} from "../utils/actions";
import API from "../utils/API";

const Saved = () => {
    const [state, dispatch] = useBookContext();

    const getSaved = () => {
        dispatch({ type: LOADING})
        API.getBooks()
            .then(res => {
                dispatch({ type: UPDATE_BOOKS, books: res.data});
                });
    };

    const removeSaved = (id) => {
        dispatch({ 
            type: REMOVE_BOOK,
            _id: id
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