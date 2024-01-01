import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import { Avatar, Button, Dropdown, AutoComplete } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { productsApi } from "../api/products";
import { debounce } from "lodash";
import { useProfile } from "../hooks/user/use-profile";

const isAuthentication = () => {
  const user = localStorage.getItem("skinFoodShopUser");
  return Boolean(user);
};

const items = [
  {
    key: "account",
    label: "Tài khoản",
  },
  {
    key: "management",
    label: "Quản lý",
  },
  {
    key: "logout",
    label: "Sign out",
  },
];

const user = JSON.parse(localStorage.getItem("skinFoodShopUser"));

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [completedOptions, setCompletedOptions] = useState([]);

  const { data } = useProfile();

  const logout = ({ key }) => {
    if (key === "logout") {
      localStorage.removeItem("skinFoodShopUser");
      navigate("/");
    }
    if (key === "account") {
      navigate("/profile");
    }
    if (key === "management") {
      navigate("/admin/products");
    }
  };
  const searchHandler = async (key) => {
    try {
      const response = await productsApi.getProductsByName(key);
      const mapped = response.data.map((item) => ({
        label: item.name,
        value: item._id,
      }));
      setCompletedOptions(mapped);
    } catch (error) {
      console.log(error);
    }
  };

  const onSearch = (value) => {
    setSearch(value);
  };

  const onSelect = (value) => {
    setSearch("");
    navigate(`/products/${value}`);
  };

  useEffect(() => {
    if (!search) return;
    const delayed = debounce(searchHandler, 500);
    delayed(search);
  }, [search]);

  return (
    <div className="container mx-auto flex items-center h-[84px] justify-between px-4 sm:px-6 lg:px-8 border-b border-primary-color">
      <Link to="/">
        <img className="h-[80px]" src="/images/logo.png" alt="Logo" />
      </Link>
      <div className="flex items-center gap-4">
        <AutoComplete
          value={search}
          onChange={onSearch}
          size="large"
          style={{
            width: 200,
          }}
          placeholder="Tìm kiếm"
          options={completedOptions}
          onSelect={onSelect}
        />
        {/* <div className="group relative">
          
          <SearchIcon
            size={20}
            className="absolute left-3 top-1/2 -mt-2.5 text-primary-color pointer-events-none group-focus-within:text-primary-color"
          />
          <input
            className="focus:ring-2 focus:ring-primary-color focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-xl py-2 pl-10 ring-1 ring-primary-color shadow-sm"
            type="text"
            aria-label="search"
            placeholder="Search..."
          />
        </div> */}
        <div className="cursor-pointer h-[48px] w-[48px] min-h-[48px] min-w-[48px] rounded-full bg-primary-color flex items-center justify-center">
          <HeartIcon stroke="white" />
        </div>
        <div className="cursor-pointer h-[48px] w-[48px] min-h-[48px] min-w-[48px] rounded-full bg-primary-color flex items-center justify-center">
          <ShoppingCartIcon stroke="white" onClick={() => navigate("/cart")} />
        </div>
        <div>
          {isAuthentication() ? (
            <div className="  flex items-center gap-2">
              <div className="flex flex-col items-end">
                <div>Hi,</div>
                <div className="font-bold text-secondary-t-black">
                  {data?.data?.name ?? "Vô danh"}
                </div>
              </div>
              <Dropdown menu={{ items, onClick: logout }} trigger={["click"]}>
                <Avatar size="large" src={user?.avatar} />
              </Dropdown>
            </div>
          ) : (
            <Button
              size="large"
              type="primary"
              onClick={() => navigate("/sign-in")}
            >
              Đăng nhập
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
