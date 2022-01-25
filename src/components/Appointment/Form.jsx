import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {

  const { student, interviewers, interviewer, onSave, onCancel } = props;

  const [studentvalue, setStudent] = useState(student || "");
  const [interviewervalue, setInterviewer] = useState(interviewer || null);

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  }

  const cancel = () => {
    reset();
    onCancel();
  }

  const handleOnSave = () => {
    onSave(studentvalue, interviewervalue)
  };


  return (

  <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        value={ studentvalue }
        onChange={(e) => setStudent(e.target.value)}
      />
    </form>
    <InterviewerList 
      interviewers={ interviewers }
      value={ interviewervalue }
      onChange={ setInterviewer }
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={ cancel }>Cancel</Button>
      <Button confirm onClick={ handleOnSave }>Save</Button>
    </section>
  </section>
  </main>

  );

}