import { IToDo } from "../atoms";

function ToDo({ text }: IToDo) {
  return (
    <li>
      {text} <button>To Do</button>
      <button>Done</button>
      <button>Doing</button>
    </li>
  );
}

export default ToDo;
