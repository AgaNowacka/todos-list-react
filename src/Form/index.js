import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled.js";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();

    if (trimmedNewTaskContent === "") {
      return;
    }

    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
    inputRef.current.focus();
  };


  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input 
          ref={inputRef}
          value={newTaskContent} 
          onChange={(event) => setNewTaskContent(event.target.value)} 
          placeholder="Co jest do zrobienia?" />
      <Button>Dodaj zadanie </Button>
    </StyledForm>
  );
};

export default Form;