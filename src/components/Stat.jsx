import React from "react";

function Stat() {
    return (
        <div className="mt-20 Stat lg:mb-[120px] mb-[60px]">
            <div className="md:flex items-center justify-between grid gap-4 md:gap-0">
                <div className="lg:flex items-center lg:gap-[24px] md:text-center">
                    <p className="font-semibold lg:text-[40px] text-[24px]">
                        3800+
                    </p>
                    <p className="gradient-text lg:text-[20px] text-[16px] uppercase">
                        User Active
                    </p>
                </div>
                <div className="lg:flex items-center Stat-border lg:gap-[24px] md:text-center">
                    <p className="font-semibold lg:text-[40px] text-[24px]">
                        230+
                    </p>
                    <p className="gradient-text lg:text-[20px] text-[16px] uppercase">
                        TRUSTED BY COMPANY
                    </p>
                </div>
                <div className="lg:flex items-center lg:gap-[24px] md:text-center">
                    <p className="font-semibold lg:text-[40px] text-[24px]">
                        $230M+
                    </p>
                    <p className="gradient-text lg:text-[20px] text-[16px] uppercase">
                        TRANSACTION
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Stat;
