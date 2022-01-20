import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { SearchRoutes } from "./SearchRoutes";
import { Clause } from "../components/pages/Clause";
import { TikTok } from "../components/pages/TikTok";
import { Expert } from "../components/pages/Expert";
import { Page404 } from "../components/pages/Page404";

export const Router: VFC = memo(() => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SearchRoutes/*" element={<SearchRoutes />} />
        <Route path="Clause" element={<Clause />} />
        <Route path="Expert" element={<Expert />} />
        <Route path="TikTok" element={<TikTok />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
});
