import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginIn from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import ShowReport from "./components/showReports/showReport";
import AddOrEditContract from "./components/edditOrAddReports/addOrEditContract";
import NotPage from "./components/404Page/404Page";
import AddContract from "./components/AddContract/AddContract";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginIn />} />
        <Route path="showReport/:id" element={<ShowReport />} />
        <Route path="EditReport/:id" element={<AddOrEditContract />} />
        <Route path="AddContract/" element={<AddOrEditContract/>} />
        <Route path="dashboardd" element={<Dashboard />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
