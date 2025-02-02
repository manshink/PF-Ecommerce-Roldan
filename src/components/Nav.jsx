import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaApple } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import cartContext from "../context/cartContext";

const Nav = () => {

    const context = useContext(cartContext);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log("context----->", context);

    return (
        <nav className="relative bg-white text-black shadow-lg">
            <div className="h-[8vh] flex justify-center items-center px-5 lg:px-20">
                <div className="flex justify-between items-center w-full max-w-screen-lg">
                    <div className="text-2xl cursor-pointer">
                        <NavLink to="/">
                            <FaApple />
                        </NavLink>
                    </div>

                    <div className="hidden lg:flex flex-1 items-center justify-center font-medium">
                        <ul className="flex gap-6 text-sm">
                            <NavLink to="/Item" className="cursor-pointer hover:text-gray-600">
                                <li>Detalle</li>
                            </NavLink>
                            <NavLink to="/category/Mac" className="cursor-pointer hover:text-gray-600">
                                <li>Mac</li>
                            </NavLink>
                            <NavLink to="/category/iPad" className="cursor-pointer hover:text-gray-600">
                                <li>iPad</li>
                            </NavLink>
                            <NavLink to="/category/iPhone" className="cursor-pointer hover:text-gray-600">
                                <li>iPhone</li>
                            </NavLink>
                            <NavLink to="/category/Watch" className="cursor-pointer hover:text-gray-600">
                                <li>Watch</li>
                            </NavLink>
                            <NavLink to="/category/Vision" className="cursor-pointer hover:text-gray-600">
                                <li>Vision</li>
                            </NavLink>
                            <NavLink to="/category/AirPods" className="cursor-pointer hover:text-gray-600">
                                <li>AirPods</li>
                            </NavLink>
                            <NavLink to="/Support" className="cursor-pointer hover:text-gray-600">
                                <li>Support</li>
                            </NavLink>
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
    <AiOutlineSearch className="text-xl cursor-pointer hover:text-gray-600" />
    <NavLink to="/cart" className="relative">
        <AiOutlineShoppingCart className="text-xl cursor-pointer hover:text-gray-600" />
        {context.countItemsInCart() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
                {context.countItemsInCart()}
            </span>
        )}
    </NavLink>
</div>
                </div>
                <button
                    className="block lg:hidden px-4 text-2xl"
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
                    <NavLink to="/Store" onClick={handleClick}>
                        <li className="py-3 border-b border-gray-300 hover:bg-gray-200">Store</li>
                    </NavLink>
                    <NavLink to="/Mac" onClick={handleClick}>
                        <li className="py-3 border-b border-gray-300 hover:bg-gray-200">Mac</li>
                    </NavLink>
                    <NavLink to="/iPad" onClick={handleClick}>
                        <li className="py-3 border-b border-gray-300 hover:bg-gray-200">iPad</li>
                    </NavLink>
                    <NavLink to="/iPhone" onClick={handleClick}>
                        <li className="py-3 border-b border-gray-300 hover:bg-gray-200">iPhone</li>
                    </NavLink>
                    <NavLink to="/Watch" onClick={handleClick}>
                        <li className="py-3 border-b border-gray-300 hover:bg-gray-200">Watch</li>
                    </NavLink>
                    <NavLink to="/Vision" onClick={handleClick}>
                        <li className="py-3 border-b border-gray-300 hover:bg-gray-200">Vision</li>
                    </NavLink>
                    <NavLink to="/AirPods" onClick={handleClick}>
                        <li className="py-3 border-b border-gray-300 hover:bg-gray-200">AirPods</li>
                    </NavLink>
                    <NavLink to="/Support" onClick={handleClick}>
                        <li className="py-3 hover:bg-gray-200">Support</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
