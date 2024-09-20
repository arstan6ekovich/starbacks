import Image from "next/image";
import scss from "./Make.module.scss";
import make from "@/assets/image/make.svg";
import logo from "@/assets/image/block-img.svg";
import block_text_img from "@/assets/image/block_text_image.png";
import { FaPlay } from "react-icons/fa";

const Make = () => {
  return (
    <section id={scss.Make}>
      <div className="container">
        <div className={scss.Make}>
          <div className={scss.block}>
            <div className={scss.images}>
              <Image src={make} alt="image" />
              <div className={scss.logo}>
                <Image src={logo} alt="image" />
              </div>
            </div>
          </div>
          <div className={scss.Make_text}>
            <h1>
              We make <br /> <span>delicious</span>
            </h1>
            <p>
              Only in 2021 we have made more than 100,000 <br /> orders for you,
              your loved ones, all of you, and in <br /> 2022 we are ready to
              destroy the market
            </p>
            <div className={scss.Make_text_block}>
              <Image src={block_text_img} alt="image" />
              <div className={scss.Make_text_buttons}>
                <button>
                  <a href="#">
                    {" "}
                    <FaPlay />
                  </a>{" "}
                  Process
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Make;
