import React from 'react';
import "./Card.css";

function Card() {
    return(
    <div className="card mb-3" 
    style={{ maxWidth: 540}}>
    <div className="row no-gutters">
        <div className="col-md-4">
        <img src="..." className="card-img" alt="..." /> 
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <button type="button" class="btn btn-primary btn-sm"> Search</button>
            <button type="button" class="btn btn-primary btn-sm"> Saved</button>

            <h5 className="card-title">Book title</h5>
            <p className="card-text">Book summary</p>
        </div>
        </div>
    </div>
    </div>
    );
}

export default Card;