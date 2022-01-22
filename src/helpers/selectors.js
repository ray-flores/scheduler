

export function getAppointmentsForDay(state, day) {

  const result = [];

  const filteredDay = state.days.filter(d => d.name === day);

  if (filteredDay.length === 0) {
    return result;
  }

  const apptsArr = filteredDay[0].appointments;

  for (let appt of apptsArr) {

    result.push(state.appointments[appt]);

  }

  return result;

}