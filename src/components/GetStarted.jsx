import React from "react";
import BtnGetStarted from "./BtnGetStarted";
function GetStarted() {
    return (
        <div className="GetStarted ">
            <div className="md:flex justify-between items-center lg:ml-[136px] md:ml-8 mx-4">
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <div
                        className="px-[10px] py-1 rounded-[10px] w-fit mb-4 "
                        style={{
                            background:
                                "linear-gradient(125.17deg, #272727 0%, #11101D 100%)",
                        }}
                    >
                        <div className="flex justify-between items-center">
                            <img src={"Discount.png"} alt="" />
                            <p className=" text-white-70 lg:text-base text-sm">
                                <span className=" text-white-100">20%</span>{" "}
                                DISCOUNT FOR{" "}
                                <span className=" text-white-100">
                                    1 MONTH{" "}
                                </span>
                                ACCOUNT
                            </p>
                        </div>
                    </div>
                    <div className=" lg:mb-[40px] mb-6">
                        <div className="md:flex md:justify-between items-center">
                            <h1 className="font-semibold lg:text-7xl text-5xl lg:leading-1.4">
                                The Next <br />
                                <span className="gradient-text">
                                    Generation{" "}
                                </span>
                            </h1>
                            <BtnGetStarted />
                        </div>
                        <h1 className="font-semibold lg:text-7xl  text-5xl leading-1.4">
                            Payment Method.
                        </h1>
                    </div>
                    <p className="text-white-70 max-w-[470px]">
                        Our team of experts uses a methodology to identify the
                        credit cards most likely to fit your needs. <br /> We
                        examine annual percentage rates, annual fees.
                    </p>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                >
                    <img
                        src={"robot.png"}
                        alt=""
                        className="relative hover:scale-105 transition delay-300 duration-300 ease-in-out"
                    />
                    <div className="absolute before1 rounded-full"></div>
                    <div className="absolute before2 rounded-full"></div>
                    {/* <div className="absolute before3 rounded-full"></div> */}
                </div>
            </div>
        </div>
    );
}

export default GetStarted;
