import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Fleet Dashboard</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-gray-300">
          Dashboard
        </Link>
        <Link to="/vehicles" className="hover:text-gray-300">
          Vehicles
        </Link>
        <Link to="/trips" className="hover:text-gray-300">
          Trips
        </Link>
        <Link to="/map" className="hover:text-gray-300">
          Map View
        </Link>
      </nav>
    </div>
  );
}
