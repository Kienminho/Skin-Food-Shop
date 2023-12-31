import { Button, Checkbox, Form, Input, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const SignIn = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container mx-auto">
        <div className="p-2 rounded bg-[#F9FBF6] mb-6">
          <Breadcrumb
            items={[
              {
                title: "Trang chủ ",
              },
              {
                title: <a href="">Tài khoản của tôi </a>,
              },
            ]}
          />
        </div>
        <div className="grid grid-cols-2 gap-6 mb-10">
          <div>
            <div className="min-w-[400px]">
              <h1 className="text-4xl font-bold mb-10">Đăng nhập</h1>
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                autoComplete="off"
                layout="vertical"
                size="large"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <div className="flex items-center justify-between my-10">
                  <Form.Item noStyle name="remember" valuePropName="checked">
                    <Checkbox>Ghi nhớ</Checkbox>
                  </Form.Item>
                  <Link>Quên mật khẩu?</Link>
                </div>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="w-full">
                    Đăng nhập
                  </Button>
                </Form.Item>
                <div className="flex items-center gap-6">
                  <Button className="w-full">Đăng nhập với Google</Button>
                  <Button className="w-full">Đăng nhập bằng Facebook </Button>
                </div>
              </Form>
            </div>
          </div>
          <div>
            <div className="min-w-[400px]">
              <h1 className="text-4xl font-bold mb-10">Đăng ký</h1>
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                autoComplete="off"
                layout="vertical"
                size="large"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="w-full">
                    ĐĂNG KÝ
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
