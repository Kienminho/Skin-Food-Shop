import { Link, Outlet } from "react-router-dom";
import {
  ShoppingBagIcon,
  TablePropertiesIcon,
  CircleUserIcon,
  CircleUserRoundIcon,
} from "lucide-react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const AdminLayout = () => {
  return (
    <div className="h-screen w-full flex">
      <div className="min-w-[200px] bg-[#F9FBF6] px-4">
        <img className="w-[200px]" src="/images/logo-green.png" alt="Logo" />
        <div>
          <ul className="flex flex-col gap-4">
            <li className="bg-primary-color rounded p-2 cursor-pointer text-white">
              <Link className="flex items-center gap-2" to="/admin/products">
                <ShoppingBagIcon size={16} /> Sản phẩm
              </Link>
            </li>
            <li className="bg-primary-color rounded p-2 cursor-pointer text-white">
              <Link className="flex items-center gap-2">
                <TablePropertiesIcon size={16} /> Danh mục
              </Link>
            </li>
            <li className="bg-primary-color rounded p-2 cursor-pointer text-white">
              <Link className="flex items-center gap-2">
                <CircleUserIcon size={16} /> Khách hàng
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-2 flex-1">
        <div className="flex items-center justify-between">
          <div>
            <Input
              prefix={<SearchOutlined />}
              size="large"
              placeholder="Tìm kiếm"
            />
          </div>

          <div className="  flex items-center gap-2">
            <div className="flex flex-col items-end">
              <div>Hi,</div>
              <div className="font-bold text-secondary-t-black">Tên tui á</div>
            </div>
            <CircleUserRoundIcon size={48} strokeWidth={1.3} stroke="#84BC4E" />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
