import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/home.jsx";
import News from "../../pages/news/news.jsx";
import Notifications from "../../pages/notifications/notifications.jsx";
import PersonalInfo from "../../pages/personal-info/personal-info.jsx";
import Settings from "../../pages/settings/settings.jsx";
import RegisterProject from "../../pages/utilities/dang-ky-do-an/dang-ky-do-an.jsx";
import SubmitFileProject from "../../pages/utilities/nop-do-an/nop-do-an.jsx";

function AppRoutes() {
    return <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tin-tuc" element={<News />}></Route>
        <Route path="/thong-bao" element={<Notifications />}></Route>
        <Route path="/thong-tin-ca-nhan" element={<PersonalInfo />}></Route>
        <Route path="/cai-dat" element={<Settings />}></Route>
        <Route path="/tien-ich/dang-ky-do-an" element={<RegisterProject />}></Route>
        <Route path="/tien-ich/nop-do-an" element={<SubmitFileProject />}></Route>
    </Routes>
}

export default AppRoutes;