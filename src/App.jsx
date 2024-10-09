import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Signup />
              </React.Suspense>
            }
          />
          <Route
            path="/signin"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Signin />
              </React.Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </React.Suspense>
            }
          />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;