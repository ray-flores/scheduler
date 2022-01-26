import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from "prop-types";

export default function InterviewerList(props) {

  const { interviewers, value, onChange } = props;

  const parsedInterviewers = interviewers.map((i) => (
    <InterviewerListItem
      key={i.id}
      name={i.name}
      avatar={i.avatar}
      selected={value === i.id}
      setInterviewer={() => onChange(i.id)}
    />
  ));

  return (

    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{ parsedInterviewers }</ul>
    </section>

  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
}