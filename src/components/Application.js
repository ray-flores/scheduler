import React from "react";
import DayList from "./DayList";
import "components/Application.scss";
import "components/Appointment";
import Appointment from "./Appointment";
import useApplicationData from "hooks/useApplicationData";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";


export default function Application(props) {

  const { state, setDay, bookInterview, cancelInterview } = useApplicationData();

  const interviewers = getInterviewersForDay(state, state.day)

  const dailyAppointments = getAppointmentsForDay(state, state.day)

  const parsedAppointments = dailyAppointments.map(a => {
    const interview = getInterview(state, a.interview);
    return <Appointment
      key={a.id}
      id={a.id}
      interview={interview}
      interviewers={interviewers}
      bookInterview={bookInterview}
      cancelInterview={cancelInterview}
    />
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {parsedAppointments}
        <Appointment
          key="last"
          time="5pm" />
      </section>
    </main>
  );
}