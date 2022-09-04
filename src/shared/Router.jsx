import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "../pages/LogInPage";
import SignUp from "../pages/SignUp";
import DlyTodo from "../pages/DlyTodo";
import Kakao from "./Kakao";
import Category from "../pages/Category";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dlytodo" element={<DlyTodo />} />
        <Route path="/kakao" element={<Kakao />} />
        <Route path="/categ" element={<Category/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
