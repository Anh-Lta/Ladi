import React from "react";
import { FooterLinks } from "../constants/index";
import {
    RiTwitterLine,
    RiLinkedinBoxLine,
    RiGitlabLine,
    RiFacebookCircleLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className="container mx-auto">
            <div className="mt-20 lg:flex gap-[130px] pb-6 border-b-[1px]">
                <div className="md:flex md:justify-between md:items-center lg:block">
                    <Link to="/">
                        <div className="flex items-center font-semibold text-[24px] lg:mb-[30px]">
                            <img
                                src={"logo.png"}
                                alt=""
                                className="mr-1 w-12 h-12 object-contain"
                            />
                            Cor<span className="text-mBlue">Ner</span>
                        </div>
                    </Link>
                    <p className="text-white-70 md:ml-4 my-4 md:mt-0">
                        A new way to make the payments <br />
                        easy, reliable and secure.
                    </p>
                </div>
                <div className="md:grid md:grid-cols-3 gap-[130px] md:mt-10 lg:mt-0">
                    {FooterLinks.map((FooterLink) => (
                        <div key={FooterLink.title} className="mb-8 md:mb-0">
                            <p className="md:text-lg font-medium mb-6">
                                {FooterLink.title}
                            </p>
                            <ul>
                                {FooterLink.links.map((link) => (
                                    <li
                                        key={link.name}
                                        className="text-white-70 mb-3 md:text-base text-sm cursor-pointer"
                                    >
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-6 md:flex justify-between items-center">
                <p className="text-white-60  mb-4">
                    Copyright Ⓒ 2022 CorNer. All Rights Reserved.
                </p>
                <div className="flex gap-6 items-center ">
                    <RiFacebookCircleLine className="text-xl cursor-pointer" />
                    <RiGitlabLine className="text-xl cursor-pointer" />
                    <RiLinkedinBoxLine className="text-xl cursor-pointer" />
                    <RiTwitterLine className="text-xl cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
