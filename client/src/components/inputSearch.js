import React, { useRef } from "react";
import { useBookContext } from "../utils/GlobalState";
import {UPDATE_RESULTS } from "../utils/actions";
import API from '../utils/API';

function inputSearch() {
    const [state, dispatch]= useBookContext()
    const searchQuery = useRef()

    const handleSearch = event => {
        event.preventDefault();

        API.searchBooks(searchQuery.current.value).then(response => {
            searchQuery.current.value = ""
            
            dispatch ({type: UPDATE_RESULTS, results:response.data})

        })
    }

    return (
        <div>
            <form className="container-fluid">
                <div className="form-group row">
                    <input type="text" className="form-control col-11" 
                        ref={searchQuery}
                        placeholder="Enter book title"
                    />
                      <button type="button ml-2" className="btn btn-success" onClick={event => handleSearch(event)}>Search</button>
                </div>
              
            </form>
        </div>
    )
}

export default inputSearch;