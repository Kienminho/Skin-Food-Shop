import CardList from "../components/card/card-list";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import { Pagination, Radio, Space } from "antd";
import { useProductsByCategory } from "../hooks/use-products-by-category";
import { useSearchParams } from "react-router-dom";
import { useCategories } from "../hooks/use-categories";

const priceOptions = [
  {
    label: "Dưới 500.000₫ ",
    value: "minPrice=5000000",
  },
  {
    label: "500.000₫ - 1.000.000₫ ",
    value: "minPrice=500000&maxPrice=1000000",
  },
  {
    label: "1.000.000₫ - 1.500.000₫ ",
    value: "minPrice=1000000&maxPrice=1500000",
  },
  {
    label: "1.500.000₫ - 2.000.000₫ ",
    value: "minPrice=1500000&maxPrice=2000000",
  },
  {
    label: "Trên 2.000.000₫",
    value: "minPrice=2000000",
  },
];

const ItemByCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading } = useProductsByCategory();
  const { data: { data: categories = [] } = {}, isCategoryLoading } =
    useCategories();

  const options = categories.map((item) => ({
    label: item.name,
    value: item.name,
  }));

  const onCategoryChange = (e) => {
    searchParams.set("category", e.target.value);
    setSearchParams(searchParams);
  };
  const onPriceChange = (e) => {
    searchParams.set("price", e.target.value);
    setSearchParams(searchParams);
  };

  if (isLoading || isCategoryLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <div className="container mx-auto mt-10 mb-10">
        <div className="flex items-start gap-8">
          <div className="bg-[#84BC4E0D] py-6 px-4 min-w-[300px]">
            <h3 className="text-xl mb-4 font-bold">Danh mục sản phẩm</h3>
            <Radio.Group
              onChange={onCategoryChange}
              value={searchParams.get("category") ?? "SkinCare"}
            >
              <Space direction="vertical">
                {options.map((item) => {
                  return (
                    <Radio key={item.value} value={item.value}>
                      <span className="text-lg font-normal">{item.label}</span>
                    </Radio>
                  );
                })}
              </Space>
            </Radio.Group>

            <h3 className="text-xl mb-4 mt-4 font-bold">GIÁ SẢN PHẨM </h3>
            <Radio.Group
              onChange={onPriceChange}
              value={searchParams.get("price") ?? "minPrice=5000000"}
            >
              <Space direction="vertical">
                {priceOptions.map((item) => {
                  return (
                    <Radio key={item.value} value={item.value}>
                      <span className="text-lg font-normal">{item.label}</span>
                    </Radio>
                  );
                })}
              </Space>
            </Radio.Group>
          </div>
          <div className="col-span-2 bg-[#84BC4E0D] p-8 w-full">
            <CardList items={data?.data ?? []} />

            <div className="w-full h-full flex items-center justify-center p-8">
              {Boolean(data?.data?.length) && (
                <Pagination
                  size="large"
                  pageSize={10}
                  defaultCurrent={1}
                  total={data.totalItems}
                  showSizeChanger={false}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ItemByCategory;
