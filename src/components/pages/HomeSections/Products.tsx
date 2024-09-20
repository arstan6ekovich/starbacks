import Image from "next/image";
import scss from "./Products.module.scss";
import coffe from "@/assets/image/coffe.svg";
const Products = () => {
  return (
    <section id={scss.Products}>
      <div className="container">
        <div className={scss.Products}>
          <h1>
            New Our <br />
            <span>Products</span>
          </h1>
          <p>
            Have time to buy the most harmonious drinks <br /> in the new
            Starbucks coffee and don't forget <br /> about the discount!
            Starbucks coffee and <br />
            don't forget about the discount!
          </p>
        </div>
        <div className={scss.cards}>
          <div className={scss.card}>
            <div className={scss.card_bals}>
              <div className={scss.bals_img}>
                <Image src={coffe} alt="img" />
              </div>
            </div>
            <div className={scss.coffe_text}>
              <h2>Fast</h2>
              <p>
                Our cafe will serve <br /> you quickly
              </p>
              <h4>
                7,45$ <span>330 ml</span>
              </h4>
              <button>Buy Product</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
