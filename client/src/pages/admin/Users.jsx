import React from "react";
import Layout from "../../components/layaout/Layout";
import AdminMenu from "../../components/layaout/AdminMenu";

const Users = () => {
  return (
    <Layout title={"dashboard -all users"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
