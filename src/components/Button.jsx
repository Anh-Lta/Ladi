import React from "react";
import { Link } from "react-router-dom";
function Button() {
    return (
        <Link to="/">
            <button className="text-black lg:px-8 lg:py-[18px] px-5 py-4 btnBackGround font-medium hover:scale-105 transition delay-300 duration-300 ease-in-out">
                Get Started
            </button>
        </Link>
    );
}

export default Button;
