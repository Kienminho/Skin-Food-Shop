import { Form, Row, Col, Input, Divider, Radio, Button } from "antd";
import { ArrowLeftSquareIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  return (
    <div>
      <div className="flex items-center gap-4 mb-10 mt-5">
        <ArrowLeftSquareIcon
          className="cursor-pointer"
          strokeWidth={1}
          size={36}
          onClick={() => navigate(-1)}
        />
        <span className="font-bold text-2xl">Thêm sản phẩm mới</span>
      </div>
      <Form form={form} layout="vertical" size="large">
        <div className="flex gap-6 mb-10">
          <div className="border border-primary-color rounded p-4">
            <Row gutter={[28, 0]}>
              <Col span={24}>
                <Form.Item label="Tên sản phẩm" name="name">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Danh mục" name="name">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Giá" name="name">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Dung tích" name="name">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="SKU" name="name">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Số lượng" name="name">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Mô tả" name="name">
                  <Input.TextArea />
                </Form.Item>
              </Col>
            </Row>
          </div>
          <div className="min-w-[30%] border border-primary-color rounded p-4">
            <p>Trạng thái sản phẩm</p>
            <Divider />
            <Form.Item label="Trạng thái" name="status">
              <Radio.Group>
                <Radio value={1}>Cho phép</Radio>
                <Radio value={2}>Không cho phép</Radio>
              </Radio.Group>
            </Form.Item>
            <Divider />
            <Form.Item label="Hiển thị" name="isShow">
              <Radio.Group>
                <Radio value={1}>Hiển thị</Radio>
                <Radio value={2}>Không hiển thị</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button>Huỷ</Button>
          <Button htmlType="submit" type="primary">
            Lưu
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateProduct;
