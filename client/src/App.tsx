import React, { useEffect, useState } from "react";
import "./style/global.scss";
import css from "./App.module.scss";
import { NavLink, Route, Routes } from "react-router-dom";

import Main from "components/main/Main";
import Download from "components/download/Download";
import Layout from "components/layout/Layout";
import Articles from "components/acticles/Articles";
import Chat from "components/chat/Chat";
import User from "components/user/User";
import Products from "components/products/Products";
import Cities from "components/chat/city/Cities";
import LayoutScreen from "components/common/layoutScreen/LayoutScreen";

export default function App() {
  return (
    <LayoutScreen>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/" element={<Layout />}>
          <Route path="download" element={<Download />} />
          <Route path="articles" element={<Articles />} />
          <Route path="chat" element={<Chat />} />
          <Route path="profile" element={<User />} />
          <Route path="products" element={<Products />} />
          <Route path="chat/cities" element={<Cities />} />
        </Route>
      </Routes>
    </LayoutScreen>
  );
}
