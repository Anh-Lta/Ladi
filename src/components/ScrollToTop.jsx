import React, { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";
function ScrollToTop() {
    const ScrollTopPage = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const [ScrollTop, setScrollTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY >= 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            {ScrollTop && (
                <button
                    onClick={ScrollTopPage}
                    className="fixed bottom-8 right-8 ScrollTop p-4 hover:scale-105"
                >
                    <RiArrowUpLine className="text-black" />
                </button>
            )}
        </div>
    );
}

export default ScrollToTop;
