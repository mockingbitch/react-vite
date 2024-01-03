import React from "react";
import Header from "../Components/Header/Header.jsx";

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header />
            { children }
            <footer>Footer</footer>
        </>
    )
}

export default DefaultLayout;