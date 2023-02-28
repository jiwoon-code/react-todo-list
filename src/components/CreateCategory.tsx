import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState, addCategoryState } from "../atoms";

interface ICa {
  toCategory: string;
}

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<ICa>();
  const setCategories = useSetRecoilState(categoriesState);
  const addCategory = useRecoilValue(addCategoryState);
  const handleValid = ({ toCategory }: ICa) => {
    setCategories((prev) => [{ cate: toCategory, addCategory }, ...prev]);
    setValue("toCategory", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toCategory", {})}
        placeholder="Write your category"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
