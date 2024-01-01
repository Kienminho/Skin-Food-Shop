/* eslint-disable react/prop-types */
import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

import { formatPriceVND } from "../../pages/product-detail";
import { useAddProductCart } from "../../hooks/cart/use-add-product-cart";

const CardItem = ({ item } = {}) => {
  const [messageApi, context] = message.useMessage();
  const navigate = useNavigate();

  const { mutate: addProductToCart } = useAddProductCart();

  const addToCart = (e) => {
    e.stopPropagation();
    addProductToCart(
      {
        productId: item._id,
        quantity: 1,
      },
      {
        onSuccess() {
          messageApi.success("Thêm sản phẩm vào giỏ hàng thành công");
        },
        onError() {
          messageApi.error("Thêm sản phẩm vào giỏ hàng thất bại");
        },
      }
    );
  };

  return (
    <div
      className=" overflow-hidden cursor-pointer shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl max-w-[250px]"
      onClick={() => navigate(`/products/${item?._id}`)}
    >
      {context}
      <div className="relative">
        <a>
          <img
            className="w-full"
            src={item?.image}
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
      </div>
      <div className="px-4 py-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-base font-bold text-black truncate block capitalize ">
            {item?.name}
          </p>
          <HeartIcon
            strokeWidth={1.3}
            size={17}
            className="min-w-[17px] min-h-[17px]"
          />
        </div>
        <div className="grid grid-cols-2">
          <span className="text-base text-t-red font-semibold">
            {formatPriceVND(item?.price)}
          </span>
          {/* <span className="text-xs text-gray-400 flex items-center">
            {formatPriceVND(item?.price)}
          </span> */}
        </div>
        <button
          onClick={addToCart}
          className="text-primary-color text-xs font-semibold flex items-center justify-center gap-4 w-full border border-primary-color py-2 px-4 rounded"
        >
          Thêm vào giỏ hàng
          <ShoppingCartIcon className="text-primary-color" size={24} />
        </button>
      </div>
    </div>
  );
};

export default CardItem;
