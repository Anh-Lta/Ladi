import React from "react";

function Feature_business({ img, title, text }) {
    return (
        <div className="Feature_business max-w-[470px]">
            <div className=" flex gap-[20px] items-center px-4 py-5">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <p className="text-lg font-semibold mb-2">{title}</p>
                    <p className="text-white-70">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Feature_business;
