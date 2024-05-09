import { Routes, Route } from "react-router-dom";
import MasterLayout from "./layout/MasterLayout";

const App = () => {
  return (
    <div className={`min-h-screen bg-slate-600`}>
      <Routes>
        <Route path="/*" element={<MasterLayout />}>
          <Route index element={<div>Home</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
