import { ChevronDownIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="container flex justify-center items-center bg-white py-4 px-10">
      <ul className="flex items-center gap-8">
        <li className="text-primary-color font-bold text-xl">
          <a href="#">Trang chủ</a>
        </li>
        <li className="font-bold text-xl">
          <a href="#" className="flex items-center gap-1">
            Sản phẩm <ChevronDownIcon size={18} />
          </a>
        </li>
        <li className="font-bold text-xl">
          <a href="#">Beauty Tips</a>
        </li>
        <li className="font-bold text-xl">
          <a href="#">Chuyện nhà Ori</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
