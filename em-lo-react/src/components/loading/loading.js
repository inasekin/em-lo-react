import React from "react";
import loadingGif from "../../img/gif/loading-arrow";
const Loading = () => {
    return (
        <div className="loading">
            <h4>Data loading....</h4>
            <img src={loadingGif} alt="" />
        </div>
    );
};

export default Loading;