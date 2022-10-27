import React, { useEffect } from "react";
import {
    Billing,
    Stat,
    GetStarted,
    Business,
    Clients,
    FindingCard,
} from "../components/indexCpn";
import AOS from "aos";
import "aos/dist/aos.css";
import Defaultpage from "../components/template/Defaultpage";
import Try from "../components/Try";
function MainPage() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <Defaultpage>
            <GetStarted />
            <div className="container mx-auto">
                <Stat />
                <Business />
                <Billing />
                <FindingCard />
                <Clients />
                <Try />
            </div>
        </Defaultpage>
    );
}

export default MainPage;
