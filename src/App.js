import React from "react";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <div className="bg-gray-100 h-screen p-6 sm:p-20">
      <div className="bg-white min-h-full rounded-xl">
        <Signup />
      </div>
    </div>
  );
}

export default App;
