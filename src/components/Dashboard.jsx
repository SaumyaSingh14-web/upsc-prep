import React from "react";
import Button from "./Button";
import TestPage from "./TestPage";

function Dashboard() {
  return (
    <div>
      <div>
        <TestPage />
      </div>
      <div>
        <div
          className="fixed right-16 bottom-20"
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            window.location.href = "/login";
          }}
        >
          <Button btn="Logout" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;