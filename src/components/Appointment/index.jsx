import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import "./styles.scss";
import useVisualMode from "hooks/useVisualMode";
// import { Fragment } from "react";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {

  const { time, interview } = props;

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  const interviewers = []; // << delete in future activity

  return (

    <article className="appointment">
      <Header time={time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && <Form interviewers={interviewers} onCancel={onCancel} onSave={onSave} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          /> 
      )}



    </article>


  );

}