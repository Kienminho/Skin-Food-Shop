import { ChevronDownIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-center items-center bg-white py-4 px-10">
      <ul className="flex items-center gap-8">
        <li className="text-primary-color font-bold text-xl">
          <Link to="/">Trang chủ</Link>
        </li>
        <li className="font-bold text-xl">
          <Link to="/products" className="flex items-center gap-1">
            Sản phẩm <ChevronDownIcon size={18} />
          </Link>
        </li>
        <li className="font-bold text-xl">
          <Link to="/tips">Beauty Tips</Link>
        </li>
        <li className="font-bold text-xl">
          <Link to="/blogs">Chuyện nhà Ori</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
