import React, { useState } from "react";
import Defaultpage from "../components/template/Defaultpage";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";
import { Abouts } from "../constants";
function About() {
    const [active, setActive] = useState(false);
    const toggle = (index) => {
        if (active === index) {
            return setActive(null);
        }
        setActive(index);
    };
    return (
        <Defaultpage>
            <div className="container mx-auto">
                {Abouts.map((about, index) => (
                    <div className="mb-8 p-4 AboutFeature">
                        <div
                            key={index}
                            onClick={() => toggle(index)}
                            className="flex items-center cursor-pointer"
                        >
                            {active === index ? (
                                <RiSubtractFill />
                            ) : (
                                <RiAddFill />
                            )}
                            <p className="ml-2 md:text-xl font-semibold">
                                {about.title}
                            </p>
                        </div>
                        {active === index ? (
                            <p className="text-white-70 mt-4 md:text-base text-sm">
                                {about.text}
                            </p>
                        ) : null}
                    </div>
                ))}
            </div>
        </Defaultpage>
    );
}

export default About;
