import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
  "CATEGORY" = "CATEGORY",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export interface ICategory {
  cate: string;
  addCategory: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});
export const addCategoryState = atom<Categories>({
  key: "addCategory",
  default: Categories.CATEGORY,
});

const { persistAtom } = recoilPersist({
  key: "todoLocal",
  storage: localStorage,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
export const categoriesState = atom<ICategory[]>({
  key: "toCategory",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
