const Categories = () => {
  return (
    <div className="container flex flex-col items-center mx-auto bg-secondary-color mt-4 ">
      <div className="p-6">
        <h2 className="text-primary-color text-5xl text-center mb-6">
          Young Beauty - Young Society
        </h2>
        <div className="flex items-center gap-8 justify-between ">
          <div className="flex flex-col items-center gap-2">
            <div className="h-[10rem] w-[10rem] min-h-[10rem] min-w-[10rem] bg-gray-300 rounded-full" />
            <p className="font-bold text-2xl text-primary-color">Skin Care</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-[10rem] w-[10rem] min-h-[10rem] min-w-[10rem] bg-gray-300 rounded-full" />
            <p className="font-bold text-2xl text-primary-color">Body Care</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-[10rem] w-[10rem] min-h-[10rem] min-w-[10rem] bg-gray-300 rounded-full" />
            <p className="font-bold text-2xl text-primary-color">Hair Care</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
