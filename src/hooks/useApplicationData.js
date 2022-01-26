import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => {
    console.log(day)
    setState({ ...state, day })
  };

  // useEffect(() => {
  //   Promise.all([
  //     axios.get("/api/days"),
  //     axios.get("/api/appointments"),
  //     axios.get("/api/interviewers"),
  //   ])
  //     .then((all) => {
  //       setState((prev) => ({
  //         ...prev,
  //         days: all[0].data,
  //         appointments: all[1].data,
  //         interviewers: all[2].data,
  //       }));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const getSpotsForDay = (day) => {
      return day.appointments.length - day.appointments.reduce((count, id) => (appointments[id].interview ? count + 1 : count), 0)
    }
    const days = state.days.map((day) => {
      return day.appointments.includes(id) ?
      {...day,
      spots: getSpotsForDay(day) } : day
    }) 

    return axios.put(`/api/appointments/${id}`, { id, interview })
      .then(() => {
        setState((prev) => ({...prev, appointments, days}))
        // setState({
        //   ...state,
        //   appointments,
        //   days: days
        // })
      })
  };


  // if appt cancelled incr spots by 1
  function updateSpots(action) {
    const days = [...state.days];

    const modifier = action === 'book' ? -1 : 1;

    for (let day in days) {
      if(days[day].name === state.day) {
        days[day].spots += modifier;
      }
    } 
    return days;
    // const days = state.days.map(day => {
    //   if (day.name === state.day) {
    //     day.spots = day.appointments.filter(id => {
    //       return state.appointments[id].interview === null
    //     }).length;
    //   }
    //   return day;
    // });
    // return days
    // {
    //   ...state,
    //   days: [...days]
    // }
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = updateSpots("cancel");

    return axios
      .delete(`http://localhost:8001/api/appointments/${id}`)
      .then(() => {
        setState({
          ...state,
          appointments,
          days,
        });
      });
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }

}
