import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 const Search=({search})=> {
    return (
        <form className="mb-3" onSubmit={search}>
        <div className="input-group mb-3 w-75 m-auto">
            <input
                type="text"
                name="title"
                className="form-control  "
                placeholder="Search..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                required
            />
            <div className="input-group-append">
                <button
                    className="btn btn-primary text-light "
                    type="submit"
                    id="button-addon2"
                >
                    Search
                </button>
            </div>
        </div>
        </form>
    );
}

export default Search;
