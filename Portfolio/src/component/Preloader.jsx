import React from "react";
import "../assets/css/preloader.css";

const Preloader = () => {
    return (
        <>
            <div class="loader-wrapper">
                <div class="loader">
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                </div>
            </div>
        </>
    );
};

export default Preloader;