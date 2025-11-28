import { createContext, useContext, useEffect, useState } from "react";
import { parseAllTrips } from "../utils/parseTripData";

const TripDataContext = createContext(null);

export const TripDataProvider = ({ children }) => {
  const [allTrips, setAllTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parsedTrips = parseAllTrips();
    setAllTrips(parsedTrips);
    setLoading(false);
  }, []);

  const getTripById = (tripId) => allTrips.find((t) => t.trip_id === tripId);

  return (
    <TripDataContext.Provider value={{ allTrips, loading, getTripById }}>
      {children}
    </TripDataContext.Provider>
  );
};

export const useTripData = () => {
  const context = useContext(TripDataContext);
  if (!context)
    throw new Error("useTripData must be used inside <TripDataProvider>");
  return context;
};
