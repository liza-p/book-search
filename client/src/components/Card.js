import React from 'react';
import "./Card.css";

export function CardList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function Card({
    thumbnail,
    title,
    author,
    description,
    href
}) {
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
                            <button type="button" class="btn btn-primary btn-sm float-right" src={href} target="#"> View</button>
                            <button type="button" class="btn btn-danger btn-sm float-right"> Save</button>
                            <p className="card-text">Book summary{description}</p>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </li>
    );
}

// export default Card;
