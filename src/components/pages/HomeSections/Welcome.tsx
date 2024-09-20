import Image from "next/image";
import scss from "./Welcome.module.scss";
import welcome from "@/assets/image/welcome.svg";
import img1 from "@/assets/image/img1.svg";
import img2 from "@/assets/image/img2.svg";
import img3 from "@/assets/image/img3.svg";
import block_img from "@/assets/image/block-img.svg";

const Welcome = () => {
  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.welcomeText}>
            <h1>
              New Cafe <br /> by <span> StarBucks </span>
            </h1>
            <p>
              Have time to buy the most harmonious drinks in the <br /> new
              Starbucks coffee and don't forget about the discount!
            </p>
            <div className={scss.welcomeTextButton}>
              <button className={scss.green}>Select a coffee </button>
              <button className={scss.black}>More</button>
            </div>
            <div className={scss.welcomeTextUsers}>
              <div className={scss.welcomeTextUsersPremium}>
                <h1>
                  9k<span>+</span>
                </h1>
                <h6>
                  Premium <br /> Users
                </h6>
              </div>
              <div className={scss.welcomeTextUsersHappy}>
                <h1>
                  2k <span>+</span>
                </h1>
                <h6>
                  Happy <br /> Customer
                </h6>
              </div>
              <div className={scss.welcomeTextUsersAwards}>
                <h1>
                  28 <span>+</span>
                </h1>
                <h6>
                  Awards <br /> Winning
                </h6>
              </div>
            </div>
          </div>
          <div className={scss.welcomeImage}>
            <Image width={400} src={welcome} alt="image" />
          </div>
        </div>
        <div className={scss.blocks}>
          <Image className={scss.block_image} src={block_img} alt="img" />
          <div className={scss.block}>
            <div className={scss.block_img}>
              <Image src={img1} alt="img" />
            </div>
            <h2>Tasty</h2>
            <h4>
              We have the most <br /> delicious coffee
            </h4>
          </div>
          <div className={scss.block}>
            <div className={scss.block_img}>
              <Image src={img2} alt="img" />
            </div>{" "}
            <h2>Fast</h2>
            <h4>
              Our cafe will serve <br /> you quickly
            </h4>
          </div>
          <div className={scss.block}>
            <div className={scss.block_img}>
              <Image src={img3} alt="img" />
            </div>{" "}
            <h2>Available</h2>
            <h4>
              Cafe will serveat the <br /> most pleasant prices
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
