import React from "react";
import DayListItem from "./DayListItem";


export default function DayList(props) {

  const { days, value, onChange } = props;

  //console.log('From DayList', days);

  const parsedDays = days.map((day) => (
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={value === day.name}
      setDay={onChange}
    />
  ));

  return (

    <ul>
    { parsedDays }
    </ul>

  );
}