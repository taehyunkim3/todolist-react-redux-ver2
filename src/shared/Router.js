import { Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import MainPage from "../pages/MainPage";
import DonePage from '../pages/Donepage';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path=":id" element={<DetailPage />} />
            <Route path="/done" element={<DonePage></DonePage>} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    );
};

export default Router;