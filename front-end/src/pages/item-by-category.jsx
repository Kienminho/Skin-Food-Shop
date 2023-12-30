import CardList from "../components/card/card-list";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import { Pagination, Checkbox } from "antd";
const categoryOptions = [
  {
    label: <span className="text-lg font-normal">Skincare</span>,
    value: "Apple",
  },
  {
    label: <span className="text-lg font-normal">Bodycare</span>,
    value: "Pear",
  },
  {
    label: <span className="text-lg font-normal">Haircare</span>,
    value: "Orange",
  },
];

const priceOptions = [
  {
    label: <span className="text-lg font-normal">Dưới 500.000₫ </span>,
    value: "Apple",
  },
  {
    label: <span className="text-lg font-normal">500.000₫ - 1.000.000₫ </span>,
    value: "Apple",
  },
  {
    label: (
      <span className="text-lg font-normal">1.000.000₫ - 1.500.000₫ </span>
    ),
    value: "Apple",
  },
  {
    label: (
      <span className="text-lg font-normal">1.500.000₫ - 2.000.000₫ </span>
    ),
    value: "Apple",
  },
  {
    label: <span className="text-lg font-normal">Trên 2.000.000₫</span>,
    value: "Apple",
  },
];

const ItemByCategory = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <div className="container mx-auto mt-10 mb-10">
        <div className="flex items-start gap-8">
          <div className="bg-[#84BC4E0D] py-6 px-4 min-w-[300px]">
            <h3 className="text-xl mb-4 font-bold">Danh mục sản phẩm</h3>
            <Checkbox.Group
              style={{ flexDirection: "column", gap: 10 }}
              options={categoryOptions}
              defaultValue={["Apple"]}
            />
            <h3 className="text-xl mb-4 mt-4 font-bold">GIÁ SẢN PHẨM </h3>
            <Checkbox.Group
              style={{ flexDirection: "column", gap: 10 }}
              options={priceOptions}
              defaultValue={["Apple"]}
            />
          </div>
          <div className="col-span-2 bg-[#84BC4E0D] p-8">
            <CardList
              items={[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
              ]}
            />
            <div className="w-full flex items-center justify-center p-8">
              <Pagination
                size="large"
                pageSize={10}
                defaultCurrent={6}
                total={500}
                showSizeChanger={false}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ItemByCategory;
