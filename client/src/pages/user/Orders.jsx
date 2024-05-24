import React from "react";
import Layout from "../../components/layaout/Layout";
import UserMenu from "../../components/layaout/UserMenu";

const Orders = () => {
  return (
    <Layout title={"your Orders"}>
      <div className="container-flui p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h2>All Orders</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
