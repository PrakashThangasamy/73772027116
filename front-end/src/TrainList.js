import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrainsList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('http://104.211.219.98/train/schedules', {
          headers: {
            Authorization: 'Bearer your-access-token',
          },
        });
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <ul>
        {trains.map((train) => (
          <li key={train.id}>
            <h2>{train.name}</h2>
            <p>Departure Time: {train.departureTime}</p>
            <p>Seat Availability: {train.seatAvailability}</p>
            <p>Price: {train.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainsList;
