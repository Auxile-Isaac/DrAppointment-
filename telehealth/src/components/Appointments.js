import React from 'react';
import Typography from '@mui/material/Typography';
import { ScheduleMeeting } from 'react-schedule-meeting';

export default function Example() {
  // this generates basic available timeslots for the next 6 days
  const availableTimeslots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((id) => {
    return {
      id,
      startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
      endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
    };
  });

  return (
    <div className = "appointments">
      <div>
        <Typography component="h1" variant="h5">SCHEDULE YOUR APPOINTMENTS WITH OUR BEST DOCTORS...</Typography>
      </div>
      <div>
        <ScheduleMeeting
          borderRadius={10}
          primaryColor="#3f5b85"
          eventDurationInMinutes={30}
          availableTimeslots={availableTimeslots}
          onStartTimeSelect={console.log}
        />
      </div>
    </div>
  );
}
