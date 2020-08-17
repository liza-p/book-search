import React from 'react';
import "./Card.css";
import {useBookContext} from "../utils/GlobalState";
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
    href
}) 

{
    const handleSave = () => {
        console.log("save clicked");
        const savedBook = {title: title, author: author, description: description, link: href, image:thumbnail};
        console.log(savedBook);
        API.addBook(savedBook).then(res => {
            console.log("res.data = " + res.data);
        })
    }


    return (
        <li className="list-group-item">
            <div className="card mb-12">

                <div className="row no-gutters">
                    <div className="col-md-4">
                        <h5 className="card-title">Book Title: {title}</h5>
                        <p className="card-text">Book Author: {author}</p>
                        <img src={thumbnail} className="card-img" alt="..." />
                        {/* <Thumbnail src={thumbnail || "https://placehold.it/300x300"} /> */}
                    </div>
                    <div className="col-md-8">
                        {/* <div className="card-body"> */}
                            <a type="button" className="btn btn-primary btn-sm float-right" href={href} target="_"> View</a>
                             <button type="button" className="btn btn-danger btn-sm float-right"onClick={handleSave}> Save</button>
                            <p className="card-text">Book summary{description}</p>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </li>
    );
}

// export default Card;
