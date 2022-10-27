import React from "react";
import { quotes, people01, people02, people03 } from "../assets/assets";
function FeedbackClients({ text, avatarImg, name }) {
    return (
        <div className="max-w-[370px]">
            <div className="lg:px-8 lg:py-10 FeedbackClients p-4">
                <img
                    src={quotes}
                    alt=""
                    className="lg:max-w-[42px] lg:max-h-[27px] lg:mb-[40px] max-w-[32px] h-[32px] mb-[20px]"
                />
                <p className="md:text-lg mb-4 md:mb-[30px] md:h-[128px]">
                    {text}
                </p>
                <div className="flex gap-4">
                    {avatarImg === "people01" && (
                        <img
                            src={people01}
                            alt=""
                            className="max-w-[48px] max-h-[48px]"
                        />
                    )}
                    {avatarImg === "people02" && (
                        <img
                            src={people02}
                            alt=""
                            className="max-w-[48px] max-h-[48px]"
                        />
                    )}
                    {avatarImg === "people03" && (
                        <img
                            src={people03}
                            alt=""
                            className="max-w-[48px] max-h-[48px]"
                        />
                    )}
                    <div>
                        <p className="lg:text-[20px] ">{name}</p>
                        <p className="text-white-60 lg:text-base text-sm">
                            Founder & Leader
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedbackClients;
