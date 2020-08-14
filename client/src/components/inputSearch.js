import React from "react";


function inputSearch() {
    return (
        <div className="card">
            <div className="card-body">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
                    </div>
                <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </div>
            </div>
        </div>
    )
}

export default inputSearch;