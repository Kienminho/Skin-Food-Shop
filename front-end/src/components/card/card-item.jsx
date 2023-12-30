import { HeartIcon, ShoppingCartIcon } from "lucide-react";
const CardItem = () => {
  return (
    <div className=" overflow-hidden  shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <a href="#">
          <img
            className="w-full"
            src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
      </div>
      <div className="px-4 py-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-base font-bold text-black truncate block capitalize">
            Designer insight
          </p>
          <HeartIcon strokeWidth={1.3} size={17} />
        </div>
        <div className="grid grid-cols-2">
          <span className="text-base text-t-red font-semibold">35.000 đ</span>
          <span className="text-xs text-gray-400 flex items-center">
            215.000 ₫
          </span>
        </div>
        <button className="text-primary-color text-xs font-semibold flex items-center justify-center gap-4 w-full border border-primary-color py-2 px-4 rounded">
          Thêm vào giỏ hàng
          <ShoppingCartIcon className="text-primary-color" size={24} />
        </button>
      </div>
    </div>
  );
};

export default CardItem;
