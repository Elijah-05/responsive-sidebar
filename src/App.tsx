import { Routes, Route } from "react-router-dom";
import MasterLayout from "./layout/MasterLayout";
import ThemePage from "./pages/theme_page/ThemePage";
import { useAppSelector } from "./hooks/type_hooks";

const App = () => {
  const theme = useAppSelector(({ theme }) => theme);

  return (
    <div className={`min-h-screen ${theme.main_bg}`}>
      <Routes>
        <Route path="/*" element={<MasterLayout />}>
          <Route index element={<div>Dashboard</div>} />
          <Route path="message" element={<div>Message</div>} />
          <Route path="message/new" element={<div>New Message</div>} />
          <Route path="notification" element={<div>Notification</div>} />
          <Route path="statistics" element={<div>Statistics</div>} />
          <Route path="wallet" element={<div>Wallet</div>} />
          <Route path="settings" element={<div>Settings</div>} />
          <Route path="theme" element={<ThemePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
