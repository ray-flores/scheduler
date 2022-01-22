import React from "react";
import DayListItem from "./DayListItem";


export default function DayList(props) {

  const { days, value, onChange } = props;

  //console.log('From DayList', days);

  const parsedDays = days.map(d => <DayListItem 
    key={ d.id } 
    name={ d.name } 
    spots= { d.spots } 
    selected={ value === d.name }
    setDay={ onChange }
    />
  );

  return (

    <ul>
    { parsedDays }
    </ul>

  );
}