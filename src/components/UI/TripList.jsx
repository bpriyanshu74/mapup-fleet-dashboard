import { useTripData } from "../../context/TripDataContext";
import { useNavigate } from "react-router-dom";

export default function Trips() {
  const { allTrips, loading } = useTripData();
  const navigate = useNavigate();

  if (loading) return <p>Loading trips...</p>;

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Trips List</h1>

      <ul className="space-y-3">
        {allTrips.map((trip) => (
          <li
            key={trip.trip_id}
            className="p-4 border rounded cursor-pointer hover:bg-gray-100"
            onClick={() => navigate(`/trips/${trip.trip_id}`)}
          >
            {trip.name} — Vehicle: {trip.vehicle_id} — Events:{" "}
            {trip.total_events}
          </li>
        ))}
      </ul>
    </div>
  );
}
