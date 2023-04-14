import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { NotFound } from "../pages/NotFound";
import { StopWatch } from "../pages/StopWatch";
import { History } from "../pages/History";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StopWatch />} />
          <Route path="/history" element={<History />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
