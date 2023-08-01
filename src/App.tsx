import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginIn from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import ListOfReport from "./components/listOfreports/listOfReport";
import ShowReport from "./components/showReports/showReport";
import AddOrEditContract from "./components/edditOrAddReports/addOrEditContract";
import NotPage from "./components/404Page/404Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginIn />} />
        <Route path="listOfReport" element={<ListOfReport />} />
        <Route path="showReport/:id" element={<ShowReport />} />
        <Route path="addOrEditReport" element={<AddOrEditContract />} />
        <Route path="dashboardd" element={<Dashboard />} />
        <Route path="*" element={<NotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
