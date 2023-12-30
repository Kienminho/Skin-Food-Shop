import { HeartIcon, ShoppingCartIcon, SearchIcon } from "lucide-react";
import { Avatar } from "antd";

const Header = () => {
  return (
    <div className="container mx-auto flex items-center h-[84px] justify-between px-4 sm:px-6 lg:px-8 border-b border-primary-color">
      <img className="h-[80px]" src="/images/logo.png" alt="Logo" />
      <div className="flex items-center gap-4">
        <div className="group relative">
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
        </div>
        <div className="cursor-pointer h-[48px] w-[48px] min-h-[48px] min-w-[48px] rounded-full bg-primary-color flex items-center justify-center">
          <HeartIcon stroke="white" />
        </div>
        <div className="cursor-pointer h-[48px] w-[48px] min-h-[48px] min-w-[48px] rounded-full bg-primary-color flex items-center justify-center">
          <ShoppingCartIcon stroke="white" />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <div>Hi,</div>
            <div className="font-bold text-secondary-t-black">Tên tui á</div>
          </div>
          <Avatar
            size="large"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
