import React from "react";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";

function Dashboard() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div>
        <AppBar />

        <div className="m-8">
          <Balance />
          <Users />
        </div>
      </div>
    </React.Suspense>
  );
}

export default Dashboard;