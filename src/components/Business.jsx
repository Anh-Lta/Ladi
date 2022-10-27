import React from "react";
import Button from "./Button";
import Feature_business from "./Feature_business";

function Business() {
    return (
        <div className="lg:flex justify-between items-center gap-[70px]">
            <div data-aos="fade-up-right" data-aos-offset="300">
                <div>
                    <h2 className="uppercase text-2xl lg:leading-1.6 lg:text-4xl font-semibold lg:mb-6 mb-4">
                        You do the business, <br /> we’ll handle the money.
                    </h2>
                    <p className=" lg:text-lg text-white-70 leading-1.7 lg:mb-12 mb-7">
                        With the right credit card, you can improve your
                        financial life <br /> by building credit, earning
                        rewards and saving money. <br />
                        But with hundreds of credit cards on the market.
                    </p>
                    <Button />
                </div>
            </div>
            <div data-aos="fade-up-left" data-aos-offset="300">
                <div className="flex flex-col gap-[20px] md:mt-6 lg:mt-0">
                    <div className="flex justify-center">
                        <Feature_business
                            img={"star.png"}
                            title="Rewards"
                            text="The best credit cards offer some tantalizing combinations of promotions and prizes"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Feature_business
                            img={"protect.png"}
                            title="100% Secured"
                            text="We take proactive steps make sure your information and transactions are secure."
                        />
                    </div>
                    <div className="flex justify-center">
                        <Feature_business
                            img={"send.png"}
                            title="Balance Transfer"
                            text="A balance transfer credit card can save you a lot of money in interest charges."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Business;
