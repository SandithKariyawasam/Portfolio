import React from "react";
import "../assets/css/preloader.css";

const Preloader = () => {
    return (
        <>
            <div className="loader-wrapper">
                <div className="loaders">
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                </div>
            </div>
        </>
    );
};

export default Preloader;