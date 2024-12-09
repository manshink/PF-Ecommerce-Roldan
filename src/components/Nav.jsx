import { Link } from "react-scroll";

const Nav = () => {
    const content = <>
    <div className="">
        <ul>
            <Link to="Home">
                <li>Home</li>
            </Link>
            <Link to="Store">
                <li>Store</li>
            </Link>
            <Link to="Mac">
                <li>Mac</li>
            </Link>
            <Link to="Ipad">
                <li>iPad</li>
            </Link>
            <Link to="Iphone">
                <li>iPhone</li>
            </Link>
            <Link to="Support">
                <li>Support</li>
            </Link>
        </ul>
    </div>
    </>
    
    return (
        <nav>
            <div className="h-[10vh] flex justify-between z-50 text-black lg:py-5 px-20 py-4">
                <div className="flex items-center flex-1">
                    <span className="text-3x1 font-bold">Logo</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal">
                    <div className="flex-1">
                        <ul className="flex gap-8  mr-16 text-[18px]">
                            <Link to="Home">
                                <li>Home</li>
                            </Link>
                            <Link to="Store">
                                <li>Store</li>
                            </Link>
                            <Link to="Mac">
                                <li>Mac</li>
                            </Link>
                            <Link to="Ipad">
                                <li>iPad</li>
                            </Link>
                            <Link to="Iphone">
                                <li>iPhone</li>
                            </Link>
                            <Link to="Support">
                                <li>Support</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;