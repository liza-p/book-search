import React from 'react';
import "./Card.css";
import {useBookContext} from "../utils/GlobalState";
import {REMOVE_BOOK} from "../utils/actions";
import {ADD_BOOK} from "../utils/actions";
import API from "../utils/API";

export function CardList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function Card({
    thumbnail,
    title,
    author,
    description,
    href,
    id
}) 

{
    const [state, dispatch]= useBookContext()
    const handleSave = () => {
        const savedBook = {title: title, author: author, description: description, link: href, image:thumbnail };
        API.addBook(savedBook).then(res => {
            dispatch({type: ADD_BOOK, book: res.data});
        })
    }

    const handleDelete = () =>{
        API.deleteBook(id).then(() => {
            dispatch({type: REMOVE_BOOK, _id: id});
        });
    }


    return (
        <li className="list-group-item">
            <div className="card mb-12">

                <div className="row no-gutters">
                    <div className="col-md-4">
                        <h5 className="card-title"> {title}</h5>
                        <p className="card-text">By: {author}</p>
                        <img src={thumbnail} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                            <a type="button" className="btn btn-primary btn-sm float-right ml-1 mr-1" href={href} target="_"> View</a>
                             {id ? 
                              <button type="button" className="btn btn-danger btn-sm float-right ml-1 mr-1"onClick={handleDelete}>Delete</button> :
                              <button type="button" className="btn btn-success btn-sm float-right ml-1 mr-1"onClick={handleSave}>Save</button>}
                            <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </li>
    );
}

// export default Card;
