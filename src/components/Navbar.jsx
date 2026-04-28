"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navlink from "./Navlink";


const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="border-b px-2">
            <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center">
                    <Image
                        src={"/logo.png"}
                        alt="logo"
                        loading="eager"
                        width={30}
                        height={30}
                        className="object-cover h-auto w-auto"
                    />
                    <h3 className="font-black text-lg">pixgen.</h3>
                </div>

                <ul className="flex items-center gap-5 text-sm">

                    <li>
                        <Navlink href={"/"}>Home</Navlink>
                    </li>
                    <li>
                        <Navlink href={"/all-photos"}>All Photos</Navlink>
                    </li>
                    <li>
                        <Navlink href={"/pricing"}>Pricing</Navlink>
                    </li>
                    <li>
                        <Navlink href={"/profile"}>Profile</Navlink>
                    </li>


                </ul>

                <div className="flex gap-4">
                    <ul className="flex items-center gap-4  text-sm">
                        <li>
                            <Link href={"/signup"}>SignUp</Link>
                        </li>
                        <li>
                            <Link href={"/signin"}>SignIn</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;