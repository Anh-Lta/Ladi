import React from "react";
import { bill, apple, google } from "../assets/assets";
function Billing() {
    return (
        <div className="mt-[120px] Billing">
            <div className="md:flex justify-between items-center gap-6">
                <img
                    src={bill}
                    alt=""
                    className="lg:max-w-[530px] max-h-[456px] z-10 md:max-w-[50%] hover:scale-105 transition delay-300 duration-300 ease-in-out"
                />

                <div data-aos="fade-up-left" data-aos-offset="300">
                    <div className="max-w-[470px]">
                        <h2 className="font-semibold lg:text-4xl text-2xl lg:leading-1.6 mb-6">
                            Easily control your billing & invoicing.
                        </h2>
                        <p className="text-white-70 leading-1.6 mb-12">
                            Elit enim sed massa etiam. Mauris eu adipiscing
                            ultrices ametodio aenean neque. Fusce ipsum orci
                            rhoncus aliporttitor integer platea placerat.
                        </p>
                        <div className="flex gap-8">
                            <img
                                src={apple}
                                alt=""
                                className="cursor-pointer hover:scale-105"
                            />
                            <img
                                src={google}
                                alt=""
                                className="cursor-pointer hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billing;
