import { Routes, Route } from "react-router-dom";
import MasterLayout from "./layout/MasterLayout";

const App = () => {
  return (
    <div className={`min-h-screen bg-slate-600`}>
      <Routes>
        <Route path="/*" element={<MasterLayout />}>
          <Route index element={<div>Dashboard</div>} />
          <Route path="message" element={<div>Message</div>} />
          <Route path="notification" element={<div>Notification</div>} />
          <Route path="statistics" element={<div>Statistics</div>} />
          <Route path="wallet" element={<div>Wallet</div>} />
          <Route path="settings" element={<div>Settings</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
