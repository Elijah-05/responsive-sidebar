import { Routes, Route } from "react-router-dom";
import MasterLayout from "./layout/MasterLayout";
import ThemePage from "./pages/theme_page/ThemePage";
import { useAppSelector } from "./hooks/type_hooks";

const App = () => {
  const theme = useAppSelector(({ theme: { theme } }) => theme);

  return (
    <div className={`min-h-screen ${theme.background}`}>
      <Routes>
        <Route path="/*" element={<MasterLayout />}>
          <Route
            index
            element={
              <div className={`${theme.text_color} text-3xl font-semibold`}>
                Dashboard
              </div>
            }
          />
          <Route
            path="message"
            element={
              <div className={`${theme.text_color} text-3xl font-semibold`}>
                Message
              </div>
            }
          />
          <Route
            path="message/new"
            element={
              <div className={`${theme.text_color} text-3xl font-semibold`}>
                New Message
              </div>
            }
          />
          <Route
            path="notification"
            element={
              <div className={`${theme.text_color} text-3xl font-semibold`}>
                Notification
              </div>
            }
          />
          <Route
            path="statistics"
            element={
              <div className={`${theme.text_color} text-3xl font-semibold`}>
                Statistics
              </div>
            }
          />
          <Route
            path="wallet"
            element={
              <div className={`${theme.text_color} text-3xl font-semibold`}>
                Wallet
              </div>
            }
          />
          <Route
            path="settings"
            element={
              <div className={`${theme.text_color} text-3xl font-semibold`}>
                Settings
              </div>
            }
          />
          <Route path="theme" element={<ThemePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
