"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import scss from "./Addproduct.module.scss";
import {
  useAddFileProductMutation,
  useAddProductMutation,
} from "@/redux/api/todo";

interface TodoType {
  url: string;
  name: string;
  description: string;
  price: number;
}

const AddProduct = () => {
  const { register, handleSubmit } = useForm<TodoType>();
  const [addProductMutation] = useAddProductMutation();
  const [addFileProductMutation] = useAddFileProductMutation();

  const onSubmit: SubmitHandler<TodoType> = async (data) => {
    try {
      const file = data.url[0];
      const formData = new FormData();
      formData.append("file", file);
      const { data: responseFile } = await addFileProductMutation(formData);
      const newData = {
        url: responseFile.url,
        name: data.name,
        description: data.description,
        price: data.price,
      };
      const { data: responseData } = await addProductMutation(newData);
      console.log(responseData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id={scss.AddProduct}>
      <div className="container">
        <div className={scss.AddProduct}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="file"
              placeholder="   Product Url"
              {...register("url", { required: true })}
            />
            <input
              type="text"
              placeholder="   Product Name"
              {...register("name", { required: true })}
            />
            <input
              type="text"
              placeholder="   Product Description"
              {...register("description", { required: true })}
            />
            <input
              type="number"
              placeholder="   Product Price"
              {...register("price", { required: true })}
            />
            <button type="submit"> Hover me</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
