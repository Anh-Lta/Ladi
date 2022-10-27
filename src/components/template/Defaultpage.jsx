import React from "react";
import Footer from "../Footer";
import Header from "../Header";

function Defaultpage({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Defaultpage;
