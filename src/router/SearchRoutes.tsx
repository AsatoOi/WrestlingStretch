import { memo, VFC } from "react";
import { Routes, Route } from "react-router-dom";
import { Search } from "../components/pages/Search";
import { TechniquePara } from "../components/pages/TechniquePara";
import { Page404 } from "../components/pages/Page404";
export const SearchRoutes: VFC = memo(() => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path=":Part" element={<TechniquePara />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
});
