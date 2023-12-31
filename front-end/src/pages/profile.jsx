import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { Breadcrumb, Button } from "antd";

const Profile = () => {
  return (
    <div>
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
        <div className="max-w-[70%] mx-auto mb-6">
          <p className="font-bold text-5xl mb-10">Thông tin tài khoản </p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-base text-gray-400">Họ và tên</span>
            <span className="text-base font-bold">Trời ơi cứu tui </span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-base text-gray-400">Số điện thoại </span>
            <span className="text-base font-bold">1234567890</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-base text-gray-400">Giới tính </span>
            <span className="text-base font-bold">Nữ </span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="text-base text-gray-400">
              <div>Ngày sinh (ngày/tháng/năm)</div>
              <div className="text-sm">
                Hãy cập nhật ngày sinh để Ori gửi cho bạn 1 phần quà đặc biệt
                nhé
              </div>
            </div>
            <span className="text-base font-bold">08/06/2002</span>
          </div>
          <Button>Cập nhật </Button>
        </div>
        <div className="max-w-[70%] mx-auto mb-10">
          <p className="font-bold text-5xl mb-10">Thông tin tài khoản </p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-base text-gray-400">Email</span>
            <span className="text-base font-bold">ulatroi@gmail.com</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-base text-gray-400">Mật khẩu </span>
            <span className="text-base font-bold">........</span>
          </div>

          <Button>Cập nhật </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
