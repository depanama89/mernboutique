import React from "react";
import Layout from "../../components/layaout/Layout";
import UserMenu from "../../components/layaout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Dashboard -Ecommerce App"}>
      <div className="dashboard">
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <div className="card w-75 p-3">
                <h3>{auth?.user?.username}</h3>
                <h3>{auth?.user?.email}</h3>
                <h3>{auth?.user?.address}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
