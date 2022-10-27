import React from "react";
import Button from "./Button";

function Try() {
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <div className="lg:px-20 lg:py-12 px-4 py-6 Try">
                <div className="md:flex items-center justify-between">
                    <div className="mb-4 md:mt-0">
                        <h2 className="font-semibold lg:text-4xl text-2xl lg:leading-1.6 mb-6">
                            Let’s try our service now!
                        </h2>
                        <p className="text-white-70 leading-1.6 max-w-[500px]">
                            Everything you need to accept card payments <br />{" "}
                            and grow your business anywhere on the planet.
                        </p>
                    </div>
                    <Button />
                </div>
            </div>
        </div>
    );
}

export default Try;
