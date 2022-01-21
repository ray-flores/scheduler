import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";


export default function InterviewListItem(props) {

  const { name, avatar, selected, setInterviewer } = props;

  const interviewerListItemClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
  });

  return (
    <li onClick={setInterviewer} className={interviewerListItemClass}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
