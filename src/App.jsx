import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Layout/Sidebar";
import Topbar from "./components/Layout/Topbar";

import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Vehicles from "./pages/Vehicles/Vehicles.jsx";
import Trips from "./pages/Trips/Trips.jsx";
import TripDetail from "./pages/Trips/TripDetails.jsx";
import MapView from "./pages/MapView/MapView.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />

        <div className="flex-1">
          <Topbar />

          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/vehicles" element={<Vehicles />} />

              {/* Trips Routing */}
              <Route path="/trips" element={<Trips />} />
              <Route path="/trips/:id" element={<TripDetail />} />
              <Route path="/map" element={<MapView />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
