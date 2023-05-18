import Image from "next/image";

import flower from "../assets/img/flower-skills-1.svg";
import flowerTwo from "../assets/img/flower-skills-2.svg";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__wrapper container">
        <h2>Чему вы научитесь на курсе</h2>
        <div className="skills__items">
          <div className="skills__card skills__card-1">
            <div className="skills__block">
              <h3>Фотографии</h3>
              <p>
                Начнете профессионально редактировать фотографии, публиковать
                контент без потери качества и создавать карточки Вашего товара
                для Instagram и Whatsapp
              </p>
              <button>Подробнее</button>
            </div>
          </div>
          <div className="skills__card skills__card-2">
            <div className="skills__block">
              <h3>Пресеты</h3>
              <p>
                Получите набор пресетов от меня и научитесь их применять,
                создавать собственные, чтобы Ваши фотографии преображались и
                были в одном стиле
              </p>
              <button>Подробнее</button>
            </div>
          </div>
          <div className="skills__card skills__card-3">
            <div className="skills__block">
              <h3>Программы</h3>
              <p>
                Научитесь работать с инструментами и программами, которые
                выведут Ваш контент на качественный другой уровень
              </p>
              <button>Подробнее</button>
            </div>
          </div>
          <Image
            className="skills__flower"
            src={flower}
            alt="flower"
            width={218}
            height={358}
          />
          <Image
            className="skills__flower-two"
            src={flowerTwo}
            alt="flower"
            width={156}
            height={333}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
