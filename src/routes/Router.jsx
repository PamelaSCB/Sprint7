import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Homepage from "../pages/Homepage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route exact path="/budget" element={<Homepage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
