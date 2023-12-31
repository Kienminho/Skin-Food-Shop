import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import {
  Row,
  Col,
  Input,
  Select,
  Space,
  Radio,
  Button,
  Form,
  Divider,
} from "antd";

const Checkout = () => {
  const [form] = Form.useForm();
  return (
    <div>
      <Header />
      <Navbar />
      <Form form={form} size="large">
        <div className="container mx-auto">
          <div className="flex gap-8">
            <div className="flex-grow">
              <p className="font-bold text-3xl mb-6">Hi, Jessica</p>
              <p className="font-bold text-3xl mb-6">Thông tin vận chuyển</p>
              <Row gutter={[32, 16]}>
                <Col span={12}>
                  <Input placeholder="Họ và tên" />
                </Col>
                <Col span={12}>
                  <Input placeholder="Số điện thoại" />
                </Col>
                <Col span={24}>
                  <Input placeholder="Email" />
                </Col>
                <Col span={24}>
                  <Input placeholder="Địa chỉ" />
                </Col>
                <Col span={8}>
                  <Select className="w-full" placeholder="Chọn tỉnh thành" />
                </Col>
                <Col span={8}>
                  <Select className="w-full" placeholder="Chọn quận huyện" />
                </Col>
                <Col span={8}>
                  <Select className="w-full" placeholder="Chọn phường xã" />
                </Col>
                <Col span={24}>
                  <Input.TextArea placeholder="Ghi chú thêm (Ví dụ: giao hàng giờ hành chính)" />
                </Col>
              </Row>
              <p className="font-bold text-3xl my-6">Hình thức thanh toán</p>
              <Radio.Group className="w-full mb-4">
                <Space className="w-full" direction="vertical">
                  <div className="p-4 border border-primary-color rounded-md w-full">
                    <Radio value={1}>
                      <p>COD</p>
                      <p>Thanh toán khi nhận hàng</p>
                    </Radio>
                  </div>
                  <div className="p-4 border border-primary-color rounded-md w-full">
                    <Radio value={2}>Thanh toán MoMo</Radio>
                  </div>
                  <div className="p-4 border border-primary-color rounded-md w-full">
                    <Radio value={3}>
                      Thẻ ATM/Thẻ tín dụng (Credit card/Thẻ ghi nợ (Debit card)
                    </Radio>
                  </div>
                </Space>
              </Radio.Group>
              <div className="my-6">
                Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn
                có thể trả lại sản phẩm. TÌm hiểu thêm Tại đây
              </div>
              <Button size="large" className="w-full mb-6" type="primary">
                Thanh toán xxx (VNPAY)
              </Button>
            </div>
            <div className="min-w-[400px]">
              <h1 className="font-bold text-3xl mb-6">Giỏ hàng</h1>
              <div className="flex flex-col gap-4 mb-6">
                {[1, 2, 3].map((item) => {
                  return (
                    <div key={item} className="flex items-center gap-4">
                      <img
                        className="w-[130px] h-[130px]"
                        src="/images/anua.png"
                        alt="Logo"
                      />
                      <div>
                        <p className="font-semibold text-lg">Tên sản phẩm</p>
                        <div className="text-base">Biến thể</div>
                        <div className="text-lg font-bold">215.000 ₫ </div>
                        <div className="text-sm text-gray-400 line-through">
                          215.000 ₫{" "}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between gap-6">
                <Input placeholder="Nhập mã giảm giá" />
                <Button type="primary">Áp dụng</Button>
              </div>
              <Divider />
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-xl">Tạm tính</span>
                <span className="font-semibold text-base">500.000đ</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-xl">Giảm giá</span>
                <span className="font-semibold text-base">0</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-xl">Phí giao hàng</span>
                <span className="font-semibold text-base">500.000đ</span>
              </div>
              <Divider />
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-xl">Tổng</span>
                <span className="font-semibold text-base">520.000đ</span>
              </div>
            </div>
          </div>
        </div>
      </Form>
      <Footer />
    </div>
  );
};

export default Checkout;
