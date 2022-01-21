import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

  const { name, spots, selected, setDay } = props;

  const  dayClass = classNames('day-list__item', {
  'day-list__item--selected': selected,
  'day-list__item--full': spots === 0
});

  const handleClick = () => {
    setDay(name);
  }

  const formatSpots = (spots) => {
    if (spots > 1) {
      return `${spots} spots remaining`;
    } 
    if (spots === 1) {
      return '1 spot remaining';
    }
    if (spots === 0) {
      return 'no spots remaining';
    }
  } 

  return (
    <li onClick={handleClick} className={dayClass}>
      <h2 className="text--regular">{name}</h2> 
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}

