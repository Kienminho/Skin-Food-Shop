import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container mx-auto flex items-center justify-center">
        <Result
          status="success"
          title="Successfully Purchased Cloud Server ECS!"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button type="primary" key="buy" onClick={() => navigate("/")}>
              Home
            </Button>,
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutSuccess;
