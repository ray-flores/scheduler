export function getInterviewersForDay(state, day) {
  const result = [];

  const filteredInterviewers = state.days.filter((d) => d.name === day);

  if (filteredInterviewers.length === 0) {
    return result;
  }

  const interviewersArr = filteredInterviewers[0].interviewers;

  for (let interviewerId of interviewersArr) {
    result.push(state.interviewers[interviewerId]);
  }

  return result;
}

export function getAppointmentsForDay(state, day) {
  const result = [];

  const filteredDay = state.days.filter((d) => d.name === day);

  if (filteredDay.length === 0) {
    return result;
  }

  const apptsArr = filteredDay[0].appointments;

  for (let appt of apptsArr) {
    result.push(state.appointments[appt]);
  }

  return result;
}

export function getInterview(state, interview) {
  if (interview !== null) {
    const result = {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer],
    };
    return result;
  }
  return null;
}
