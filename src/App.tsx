import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "./hooks/type_hooks";
import MasterLayout from "./layout/MasterLayout";
import ThemePage from "./pages/theme_page/ThemePage";
import Page from "./pages/Page";

const App = () => {
  const theme = useAppSelector(({ theme: { theme } }) => theme);

  return (
    <div className={` ${theme.background}`}>
      <Routes>
        <Route path="/*" element={<MasterLayout />}>
          <Route index element={<Page name="Dashboard" />} />
          <Route path="message" element={<Page name="Message" />} />
          <Route path="message/new" element={<Page name="New Message" />} />
          <Route path="notification" element={<Page name="Notifications" />} />
          <Route path="statistics" element={<Page name="Statistics" />} />
          <Route path="wallet" element={<Page name="Wallet" />} />
          <Route path="settings" element={<Page name="Settings" />} />
          <Route path="theme" element={<ThemePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
