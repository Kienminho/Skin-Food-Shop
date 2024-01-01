/* eslint-disable react/prop-types */
import { Modal, Form, Input, DatePicker } from "antd";

const UpdateProfileModal = ({ open, setOpen, onSubmit, profile }) => {
  const [form] = Form.useForm();
  const handleOk = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
    });
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal
      title="Thông tin tài khoản "
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        layout="vertical"
        size="large"
        initialValues={{ name: profile.name, phone: profile.phone }}
      >
        <Form.Item label="Họ và tên" name="name">
          <Input placeholder="Họ và tên" />
        </Form.Item>
        <Form.Item label="Ngày sinh" name="birthday">
          <DatePicker placeholder="ngày sinh" className="w-full" />
        </Form.Item>
        <Form.Item label="Số điện thoại" name="phone">
          <Input placeholder="Số điện thoại" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateProfileModal;
