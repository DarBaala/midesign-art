import Link from "next/link";
import Image from "next/image";

import flower from "../assets/img/flower-header-1.svg";
import flowerTwo from "../assets/img/flower-header-2.svg";

const Header = () => {
  return (
    <header className="header">
      <div
        className="header__wrapper container
      "
      >
        <div className="header__logo">
          <Link href="/">MiDesign</Link>
          <Image
            className="header__flower-two"
            src={flowerTwo}
            alt="flower"
            width={40}
            height={60}
          />
        </div>
        <nav className="header__nav">
          <Link href="">Фотографии</Link>
          <Link href="">Пресеты</Link>
          <Link href="">Программы</Link>
          <Link href="">Обо мне</Link>
          <Link href="">Контакты</Link>
        </nav>
        <div className="header__consulate">
          <button>Получить консультацию</button>
          <Image
            className="header__flower"
            src={flower}
            alt="flower"
            width={65}
            height={94}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
