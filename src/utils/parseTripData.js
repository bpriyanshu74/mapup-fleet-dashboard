import trip1 from "../generated-data/trip_1_cross_country.json";
import trip2 from "../generated-data/trip_2_urban_dense.json";
import trip3 from "../generated-data/trip_3_mountain_cancelled.json";
import trip4 from "../generated-data/trip_4_southern_technical.json";
import trip5 from "../generated-data/trip_5_regional_logistics.json";

const allTripsData = [trip1, trip2, trip3, trip4, trip5];

export function parseAllTrips() {
  const tripsMap = {};

  allTripsData.forEach((tripArray) => {
    tripArray.forEach((event) => {
      const id = event.trip_id;

      if (!tripsMap[id]) {
        tripsMap[id] = {
          trip_id: id,
          vehicle_id: event.vehicle_id,
          name: id,
          events: [],
          planned_distance_km: event.planned_distance_km || 0,
          estimated_duration_hours: event.estimated_duration_hours || 0,
        };
      }

      tripsMap[id].events.push(event);
    });
  });

  Object.values(tripsMap).forEach((trip) => {
    trip.total_events = trip.events.length;
  });

  return Object.values(tripsMap);
}
