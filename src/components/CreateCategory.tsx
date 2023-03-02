import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoriesState } from "../atoms";

interface IAdd {
  toCategory: string;
}

function CreateCategory() {
  const setData = useSetRecoilState(categoriesState);
  const { register, setValue, handleSubmit } = useForm<IAdd>();
  const onValid = ({ toCategory }: IAdd) => {
    setData((prevCategories) => [
      { title: toCategory, id: Date.now() },
      ...prevCategories,
    ]);
    setValue("toCategory", "");
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register("toCategory")} placeholder="write your category" />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
