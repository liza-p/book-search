import React, { useRef, useState} from "react";
import { useBookContext } from "../utils/GlobalState";
import {UPDATE_RESULTS } from "../utils/actions";
import API from '../utils/API';

function inputSearch() {
    const [state, dispatch]= useBookContext()
    const searchQuery = useRef()

    const handleSearch = event => {
        event.preventDefault();
        console.log("calling handleSearch");

        API.searchBooks(searchQuery.current.value).then(response => {
            searchQuery.current.value = ""
            
            dispatch ({type: UPDATE_RESULTS, results:response.data})

        })
    }

    return (
        <div className="ml-2">
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" 
                        ref={searchQuery}
                        placeholder="Search by title here!"
                    />
                </div>
                <button type="button ml-2" className="btn btn-success" onClick={event => handleSearch(event)}>Search</button>
            </form>
        </div>
    )
}

export default inputSearch;