export default function TripEvents({ events }) {
  return (
    <div className="mt-4">
      <h3 className="font-bold text-lg mb-3">Events</h3>

      {events.map((ev) => (
        <div key={ev.eventId} className="border-b py-3">
          <p className="font-semibold">{ev.eventType}</p>
          <p className="text-sm text-gray-600">
            Time: {ev.timestamp?.toString()}
          </p>
          {ev.details && <p className="text-sm mt-1">Details: {ev.details}</p>}
        </div>
      ))}
    </div>
  );
}
