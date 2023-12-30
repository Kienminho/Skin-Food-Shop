const CardTipItem = () => {
  return (
    <div className=" overflow-hidden  shadow-md rounded-xl ">
      <div className="relative">
        <a href="#">
          <img
            className="w-full"
            alt="Sunset in the mountains"
            src="/images/tips-img-1.png"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0  opacity-25"></div>
        </a>
      </div>
      <div className="px-4 py-3 flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-[#222529]">
          Thoa kem chống nắng đúng cách
        </h3>
        <p className="text-base text-[#222529]">
          Một đoạn ngắn giới thiệu (trích từ bài viết) sẽ dài khoảng 3 dòng 3
          dòng dd3 dòng 3 dòng như thế này
        </p>
        <a href="#" className="text-base text-primary-color">
          Xem thêm...
        </a>
      </div>
    </div>
  );
};

export default CardTipItem;
