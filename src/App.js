import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import AppEditor from "./pages/AppEditor";
import MyApp from "./pages/MyApp";
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="app">
          <Route index element={<MyApp />} />
          <Route path="editor" element={<AppEditor />} />
          <Route path="runs" element={<div>Lần chạy</div>} />
          <Route path="mission" element={<div>Nhiệm vụ</div>} />
        </Route>
      </Route>
    </Routes>
  ); 
};
export default App;
