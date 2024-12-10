import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <nav className="relative bg-white text-black shadow-lg">
            <div className="h-[8vh] flex justify-center items-center px-5 lg:px-20">
                <div className="flex justify-between items-center w-full max-w-screen-lg">
                    <div className="text-2xl cursor-pointer">
                        <Link to="Home" smooth={true} spy={true}>
                        <FaApple />
                        </Link>
                    </div>

                    <div className="hidden lg:flex flex-1 items-center justify-center font-medium">
                        <ul className="flex gap-6 text-sm">
                            <Link spy={true} smooth={true} to="Store">
                                <li className="cursor-pointer hover:text-gray-600">Store</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Mac">
                                <li className="cursor-pointer hover:text-gray-600">Mac</li>
                            </Link>
                            <Link spy={true} smooth={true} to="iPad">
                                <li className="cursor-pointer hover:text-gray-600">iPad</li>
                            </Link>
                            <Link spy={true} smooth={true} to="iPhone">
                                <li className="cursor-pointer hover:text-gray-600">iPhone</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Watch">
                                <li className="cursor-pointer hover:text-gray-600">Watch</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Vision">
                                <li className="cursor-pointer hover:text-gray-600">Vision</li>
                            </Link>
                            <Link spy={true} smooth={true} to="AirPods">
                                <li className="cursor-pointer hover:text-gray-600">AirPods</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Support">
                                <li className="cursor-pointer hover:text-gray-600">Support</li>
                            </Link>
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <AiOutlineSearch className="text-xl cursor-pointer hover:text-gray-600" />
                        <AiOutlineShoppingCart className="text-xl cursor-pointer hover:text-gray-600" />0
                    </div>
                </div>
                <button
                    className="block lg:hidden text-2xl"
                    onClick={handleClick}
                >
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>
            </div>

            <div
                className={`lg:hidden ${
                    click ? "block" : "hidden"
                } absolute top-[8vh] w-full left-0 bg-gray-100 text-black`}
            >
                <ul className="text-left text-base p-5">
                    <Link spy={true} smooth={true} to="Store">
                        <li className="py-3 border-b border-gray-300 hover:bg-gray-200">Store</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Mac">
                        <li className="py-3 border-b border-gray-300 hover:bg-gray-200">Mac</li>
                    </Link>
                    <Link spy={true} smooth={true} to="iPad">
                        <li className="py-3 border-b border-gray-300 hover:bg-gray-200">iPad</li>
                    </Link>
                    <Link spy={true} smooth={true} to="iPhone">
                        <li className="py-3 border-b border-gray-300 hover:bg-gray-200">iPhone</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Watch">
                        <li className="py-3 border-b border-gray-300 hover:bg-gray-200">Watch</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Vision">
                        <li className="py-3 border-b border-gray-300 hover:bg-gray-200">Vision</li>
                    </Link>
                    <Link spy={true} smooth={true} to="AirPods">
                        <li className="py-3 border-b border-gray-300 hover:bg-gray-200">AirPods</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Support">
                        <li className="py-3 hover:bg-gray-200">Support</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
