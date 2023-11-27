import React from 'react';
import LoaderImage from "../../asset/images/loader.svg"

export default () => {
    return (
        <div className="loader">
            <div className="loaderAlign">
                <img width="50px" src={LoaderImage} alt="" /><br />
            </div>
        </div>
    )
}