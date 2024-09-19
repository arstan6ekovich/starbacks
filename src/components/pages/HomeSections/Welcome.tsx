import scss from "./Welcome.module.scss";
import coffeImg from "../../../assets/image/coffeImg.png";
import sale from "../../../assets/image/sale.svg";
import shadowWhite from "../../../assets/image/shadowWhite.png";
import shadowGreen2 from "../../../assets/image/shadowGreen2.png";
import shadowGreen from "../../../assets/image/shadowGreen.png";
import Image from "next/image";

const Welcome = () => {
  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.welcomeText}>
            <Image alt="" src={shadowGreen} />

            <h1>
              New Cafe by <span> StarBucks </span>
            </h1>
            <p>
              Have time to buy the most harmonious drinks in the new Starbucks
              coffee and don't forget about the discount!
            </p>
            <div className={scss.welcomeTextButton}>
              <button>Select a coffee </button>
              <button>More</button>
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
            <Image alt="" src={coffeImg} />
            <div className={scss.welcomeImageSale}></div>
            <Image alt="" src={sale} />
            <h2>45%</h2>
          </div>
          <Image alt="" src={shadowGreen} />
          <Image alt="" src={shadowGreen2} />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
