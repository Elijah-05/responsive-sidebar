import { Routes, Route } from "react-router-dom";
import MasterLayout from "./layout/MasterLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<MasterLayout />}>
          <Route index element={<div>Home</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
