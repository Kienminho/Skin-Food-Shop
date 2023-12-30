import { Select, Button, Table } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "3",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "4",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Tên danh mục",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Số lượng sản phẩm",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Trạng thái",
    dataIndex: "address",
    key: "address",
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

const Categories = () => {
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
        <Button type="primary" icon={<PlusOutlined />}>
          Thêm
        </Button>
      </div>
      <div>
        <Table rowSelection={{}} dataSource={dataSource} columns={columns} />;
      </div>
    </div>
  );
};

export default Categories;
