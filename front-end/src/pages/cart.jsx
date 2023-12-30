import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";

import { List, Breadcrumb, Divider, Button, Input } from "antd";
const data = Array.from({
  length: 3,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));

const Cart = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container mx-auto">
        <div>
          <div>
            <Breadcrumb
              separator=">"
              items={[
                {
                  title: "Giỏ hàng",
                },
                {
                  title: "Thanh toán",
                },
              ]}
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-grow ">
              <div className="pl-[310px] px-4 py-4">
                <div className="grid grid-cols-4 w-full">
                  <div className="justify-self-center">Sản phẩm </div>
                  <div className="justify-self-center">Giá </div>
                  <div className="justify-self-center">Số lượng </div>
                  <div className="justify-self-center">Tạm tính </div>
                </div>
              </div>
              <List
                itemLayout="vertical"
                size="large"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item key={item.title}>
                    <div className="flex gap-4">
                      <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      />
                      <div className="grid grid-cols-4 w-full">
                        <div className="justify-self-center">Tên sản phẩm </div>
                        <div className="justify-self-center">249.000 </div>
                        <div className="justify-self-center">- 1 +</div>
                        <div className="justify-self-center">275.000 </div>
                      </div>
                    </div>
                  </List.Item>
                )}
              />
            </div>
            <div className="min-w-[300px]">
              <h3>Thông tin đơn hàng </h3>
              <Divider />
              <ul className="flex flex-col gap-4">
                <li>
                  <div className="flex items-center justify-between">
                    <span>Tạm tính </span>
                    <span>430.000 </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <span>Tạm tính </span>
                    <span>430.000 </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <span>Tạm tính </span>
                    <span>430.000 </span>
                  </div>
                </li>
              </ul>
              <Divider />
              <div>
                <span>TỔNG CỘNG </span>
                <span>480.000 </span>
              </div>
              <div className="flex justify-center">
                <Button type="primary">Tiến hành thanh toán </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-items gap-4">
          <Input placeholder="Nhập mã giảm giá" className="max-w-[230px]" />
          <Button type="primary">Áp dụng</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
