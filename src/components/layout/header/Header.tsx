import Link from "next/link";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>StarBucks</h1>
          <Link href="/">Home</Link>
          <Link href="/">Select</Link>
          <Link href="/">Shop</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
