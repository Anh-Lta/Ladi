import React from "react";
import FeedbackClients from "./FeedbackClients";
import Trademark from "./Trademark";

function Clients() {
    return (
        <div className="mt-[120px] Clients">
            <div className="lg:grid grid-cols-2 items-center mb-8">
                <h2 className="font-semibold lg:text-4xl text-2xl lg:leading-1.6 mb-6">
                    What people are <br /> saying about us
                </h2>
                <p className="text-white-70 leading-1.6 mb-9 max-w-[500px]">
                    Everything you need to accept card payments <br /> and grow
                    your business anywhere on the planet.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className="md:grid grid-cols-3">
                    <FeedbackClients
                        text="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
                        avatarImg="people01"
                        name="Herman Jensen"
                    />
                    <FeedbackClients
                        text="Money makes your life easier. If you're lucky to have it, you're lucky."
                        avatarImg="people02"
                        name="Steve Mark"
                    />
                    <FeedbackClients
                        text="It is usually people in the money business, finance, and international trade that are really rich."
                        avatarImg="people03"
                        name="Kenn Gallagher"
                    />
                </div>
            </div>
            <div className="md:px-8 md:py-[100px] py-10">
                <Trademark />
            </div>
        </div>
    );
}

export default Clients;
