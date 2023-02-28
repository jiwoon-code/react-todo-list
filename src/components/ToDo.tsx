import React from "react";
import { useSetRecoilState } from "recoil";
import {
  IToDo,
  toDoState,
  Categories,
  ICategory,
  categoriesState,
} from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const deleteTodo = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
    function Category({ cate, addCategory }: ICategory) {
      const setCategories = useSetRecoilState(categoriesState);
      const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
          currentTarget: { name },
        } = event;
        setCategories((prev) => {
          const categoryIndex = prev.findIndex((toCategory) => toCategory.cate);
          const newCategory = { cate, addCategory: name as any };
          return [...prev.slice(0, categoryIndex), newCategory];
        });
      };
    }
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      {category !== Categories.CATEGORY && (
        <button name={Categories.CATEGORY} onClick={onClick}>
          {text}
        </button>
      )}
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default ToDo;
