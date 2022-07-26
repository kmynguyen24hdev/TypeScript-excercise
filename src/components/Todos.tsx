import React, { useContext } from "react";
import { TodosContext } from "../store/todosContext";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// FC: Function component
const Todos: React.FC = (
  props
) => {
  const todosCxt = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCxt.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCxt.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
