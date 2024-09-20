"use client";

import { useForm } from "react-hook-form";
import scss from "./Addproduct.module.scss";

interface TodoType {
  url: string;
  name: string;
  description: string;
  price: number;
}

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  return (
    <section id={scss.AddProdcut}>
      <div className="container">
        <div className={scss.AddProduct}>
          <form>
            <input type="text" placeholder="   Product Url" />
            <input type="text" placeholder="   Product Name" />
            <input type="text" placeholder="   Product Description" />
            <input type="text" placeholder="   Product Price" />
            <button type="submit"> Hover me</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
