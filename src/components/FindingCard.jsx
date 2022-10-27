import React from "react";
import Button from "./Button";
import { card } from "../assets/assets";
function FindingCard() {
    return (
        <div className="mt-[120px]">
            <div className="md:flex justify-between items-center gap-[72px]">
                <div data-aos="fade-up-right" data-aos-offset="300">
                    <div className="max-w-[570px]">
                        <h2 className="font-semibold lg:text-4xl text-2xl lg:leading-1.6 mb-6">
                            Find a better card deal in few easy steps.
                        </h2>
                        <p className="text-white-70 leading-1.6 mb-9 max-w-[500px]">
                            Arcu tortor, purus in mattis at sed integer
                            faucibus. Aliquet quis aliquet eget mauris tortor.ç
                            Aliquet <br />
                            ultrices ac, ametau.
                        </p>
                        <Button />
                    </div>
                </div>
                <img
                    src={card}
                    alt=""
                    className="max-h-[450px] lg:max-w-[516px] md:max-w-[50%] hover:scale-105 transition delay-300 duration-300 ease-in-out mt-8 md:mt-0"
                />
            </div>
        </div>
    );
}

export default FindingCard;
