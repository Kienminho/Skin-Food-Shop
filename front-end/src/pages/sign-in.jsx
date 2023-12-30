import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

const SignIn = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="flex h-screen">
      <div className="min-w-[30%] border-r bg-[#F9FBF6] flex items-center justify-center">
        <img src="/images/logo-green.png" alt="logo" className="h-32" />
      </div>
      <div className="flex-grow grid place-items-center h-full">
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
            onFinish={onFinish}
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

            <Button className="w-full">Đăng nhập với Google</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
