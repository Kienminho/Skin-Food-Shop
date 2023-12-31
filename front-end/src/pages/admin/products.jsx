import { Select, Button, Table } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useProducts } from "../../hooks/use-products";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "Tên sản phẩm",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Thương hiệu",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "SKU",
    dataIndex: "productCode",
    key: "productCode",
  },
  {
    title: "Danh mục",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Giá",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Có sẵn",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "action",
    width: 50,
    render: () => {
      return (
        <div className="flex items-center justify-between gap-4">
          <EditOutlined style={{ fontSize: 20 }} />
          <DeleteOutlined style={{ fontSize: 20 }} />
        </div>
      );
    },
  },
];

const Products = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useProducts();

  console.log("data", data);

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-6">
        <Select
          defaultValue="sort"
          style={{
            width: 120,
          }}
          options={[
            {
              value: "sort",
              label: "Sắp xếp",
            },
          ]}
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigate("/admin/products/create")}
        >
          Thêm
        </Button>
      </div>
      <div>
        <Table
          loading={isLoading}
          rowSelection={{}}
          dataSource={data?.data ?? []}
          columns={columns}
          rowKey="_id"
        />
      </div>
    </div>
  );
};

export default Products;
