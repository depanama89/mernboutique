import React from "react";
import Layout from "../../components/layaout/Layout";
import UserMenu from "../../components/layaout/UserMenu";

const Profile = () => {
  return (
    <Layout title={"your profile"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>your profile</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
