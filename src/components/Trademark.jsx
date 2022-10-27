import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../assets/assets";
function Trademark() {
    return (
        <div className="md:flex md:gap-[40px] lg:gap-[100px] items-center md:justify-center grid gap-6">
            <img src={airbnb} alt="" className="max-h-[40px] max-w-[162px]" />
            <img src={binance} alt="" className="max-h-[40px] max-w-[162px]" />
            <img src={coinbase} alt="" className="max-h-[40px] max-w-[162px]" />
            <img src={dropbox} alt="" className="max-h-[40px] max-w-[162px]" />
        </div>
    );
}

export default Trademark;
