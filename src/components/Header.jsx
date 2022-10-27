import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
function Header() {
    const [toggle, setToggle] = useState(false);
    return (
        <section className="header mt-[30px] mb-16 z-[100]">
            <div className="container mx-auto relative">
                <div className="flex items-center justify-between  ">
                    <Link to="/">
                        <div className="flex items-center font-semibold text-lg cursor-pointer">
                            <img src={"logo.png"} alt="" className="mr-1" />
                            Cor<span className="text-mBlue">Ner</span>
                        </div>
                    </Link>
                    <ul className="md:flex lg:text-base gap-14 text-white-70 hidden text-sm">
                        <Link to="/">
                            <li>
                                <a href="" className="hover:text-white-100">
                                    Home
                                </a>
                            </li>
                        </Link>
                        <Link to="/About">
                            <li>
                                <a href="" className="hover:text-white-100">
                                    About us
                                </a>
                            </li>
                        </Link>
                        <Link to="/Features">
                            <li>
                                <a href="" className="hover:text-white-100">
                                    Features
                                </a>
                            </li>
                        </Link>
                        <Link to="/Solution">
                            <li>
                                <a href="" className="hover:text-white-100">
                                    Solution
                                </a>
                            </li>
                        </Link>
                    </ul>
                    <div className="block md:hidden ">
                        <div
                            className="block md:hidden"
                            onClick={() => setToggle(!toggle)}
                        >
                            {toggle ? <RiCloseLine /> : <RiMenu3Fill />}
                        </div>
                    </div>
                </div>
                <div className={`${!toggle ? "hidden" : "block"}  md:hidden`}>
                    <ul className="flex flex-col gap-14 text-white-70  text-sm bg-slate-700 absolute rounded-xl z-50 p-4 mt-4 w-full text-center">
                        <Link to="/">
                            <li>
                                <a href="" className="hover:text-white-100 ">
                                    Home
                                </a>
                            </li>
                        </Link>
                        <Link to="/About">
                            <li>
                                <a href="" className="hover:text-white-100 ">
                                    About us
                                </a>
                            </li>
                        </Link>
                        <Link to="/Features">
                            <li>
                                <a href="" className="hover:text-white-100">
                                    Features
                                </a>
                            </li>
                        </Link>
                        <Link to="/Solution">
                            <li>
                                <a href="" className="hover:text-white-100">
                                    Solution
                                </a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Header;
