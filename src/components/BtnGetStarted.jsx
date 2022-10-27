import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
function BtnGetStarted() {
    return (
        <div className="flex justify-center md:block my-4 md:my-0">
            <div className="p-[2px] text-center btnStarted cursor-pointer hover:scale-105 transition delay-300 duration-300 ease-in-out">
                <div className="flex justify-center items-center w-full h-full bg-[#00040f] rounded-full">
                    <div className=" gradient-text ">
                        <div className="flex gap-2 items-center">
                            <p> Get</p> <RiArrowRightUpLine />
                        </div>
                        <p>Started</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BtnGetStarted;
