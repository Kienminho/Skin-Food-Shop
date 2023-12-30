import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { Breadcrumb, Divider, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { HeartIcon } from "lucide-react";
import CardList from "../components/card/card-list";

const ProductDetail = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container mx-auto">
        <div className="w-full p-2 bg-[#F9FBF6] rounded-lg mb-6">
          <Breadcrumb
            items={[
              {
                title: "Home",
              },
              {
                title: <a href="">Application Center</a>,
              },
              {
                title: <a href="">Application List</a>,
              },
              {
                title: "An Application",
              },
            ]}
          />
        </div>
        <div className="p-2 grid grid-cols-3 gap-6">
          <div>
            <img src="" alt="" />
          </div>
          <div className="col-span-2">
            <h1 className="font-bold text-3xl mb-6">
              Kem dưỡng OBAGI 360 0,5% Retinol 28g{" "}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-t-red font-bold text-3xl">35.000 đ</span>
              <span className="text-gray-400">215.000 ₫ </span>
            </div>
            <Divider />
            <div className="flex items-center gap-4 mb-4">
              <div>-1+</div>
              <Button icon={<ShoppingCartOutlined />}>Thêm vào giỏ hàng</Button>
              <Button type="primary" icon={<ShoppingCartOutlined />}>
                Mua ngay
              </Button>
            </div>
            <div className="flex items-center gap-4 mb-4 font-bold text-base">
              <HeartIcon />
              Thêm vào ưa thích
            </div>
            <Divider />
            <div>
              <ul className="flex flex-col gap-4">
                <li>
                  <div className="flex items-center gap-4">
                    <div className="w-[60px] h-[60px] rounded-full bg-primary-color"></div>
                    <div>
                      <p className="font-bold">Giao hàng nhanh</p>
                      <div>
                        Miễn phí giao hàng với đơn hàng trên 1.000.000 đ
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <div className="w-[60px] h-[60px] rounded-full bg-primary-color"></div>
                    <div>
                      <p className="font-bold">Giao hàng nhanh</p>
                      <div>
                        Miễn phí giao hàng với đơn hàng trên 1.000.000 đ
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <div className="w-[60px] h-[60px] rounded-full bg-primary-color"></div>
                    <div>
                      <p className="font-bold">Giao hàng nhanh</p>
                      <div>
                        Miễn phí giao hàng với đơn hàng trên 1.000.000 đ
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-2 bg-[#F9FBF6] rounded-lg mb-4">
          <div className="bg-primary-color p-2 inline-block rounded-full text-white text-sm">
            Mô tả
          </div>
        </div>
        <div className="p-2 bg-[#F9FBF6] rounded-lg mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          nesciunt reiciendis suscipit magnam architecto, possimus deserunt, non
          eveniet aspernatur natus dolor, repudiandae culpa porro. Tempore, ut
          assumenda? Neque, illo quisquam?
        </div>
        <div className="mb-10">
          <h2 className="text-center font-bold text-3xl mb-10">
            SẢN PHẨM TƯƠNG TỰ{" "}
          </h2>
          <CardList items={[1, 24, 5, 6]} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
