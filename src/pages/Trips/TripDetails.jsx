import { useParams } from "react-router-dom";
import { useTripData } from "../../context/TripDataContext";
import { useState, useEffect } from "react";

export default function TripDetails() {
  const { id } = useParams();
  const { getTripById } = useTripData();
  const trip = getTripById(id);

  const [visibleEvents, setVisibleEvents] = useState([]);
  const [chunk, setChunk] = useState(100); // number of events per batch

  useEffect(() => {
    if (trip) {
      setVisibleEvents(trip.events.slice(0, chunk));
    }
  }, [trip, chunk]);

  const loadMore = () => {
    setChunk((prev) => prev + 100);
  };

  if (!trip) return <p className="text-red-500">Trip not found</p>;

  return (
    <div>
      <p>
        <strong>Trip ID: </strong>
        {trip.name}
      </p>
      <p>
        <strong>Vehicle Number:</strong> {trip.vehicle_id}
      </p>
      <p>
        <strong>Total Events:</strong> {trip.events.length}
      </p>

      <div
        className="mt-4 border rounded overflow-auto"
        style={{ maxHeight: "600px" }}
      >
        {visibleEvents.map((event, idx) => (
          <div
            key={idx}
            className={`p-2 border rounded m-1 ${
              event.event_type === "trip_completed"
                ? "bg-green-100"
                : event.event_type === "trip_started"
                ? "bg-green-200"
                : event.event_type === "trip_cancelled"
                ? "bg-red-100"
                : "bg-gray-50"
            }`}
          >
            <p>
              <strong>Event Type:</strong> {event.event_type}
            </p>
            <p>
              <strong>Timestamp:</strong>{" "}
              {new Date(event.timestamp).toLocaleString()}
            </p>
            <p>
              <strong>Location:</strong> {event.location?.lat},{" "}
              {event.location?.lng}
            </p>
            {event.movement && (
              <p>
                <strong>Speed:</strong> {event.movement?.speed_kmh ?? "N/A"}{" "}
                km/h
              </p>
            )}
            <p>
              <strong>Accuracy:</strong>{" "}
              {event.location?.accuracy_meters ?? "N/A"} m
            </p>
            <p>
              <strong>Altitude:</strong>{" "}
              {event.location?.altitude_meters ?? "N/A"} m
            </p>
          </div>
        ))}
        {visibleEvents.length < trip.events.length && (
          <button
            className="w-full py-2 text-center bg-gray-900 text-white rounded mt-2 cursor-pointer"
            onClick={loadMore}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
