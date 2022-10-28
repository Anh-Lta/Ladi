import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";

function Defaultpage({ children }) {
    return (
        <>
            <Header />
            {children}
            <ScrollToTop />

            <Footer />
        </>
    );
}

export default Defaultpage;
