import Image from "next/image";

import flower from "../assets/img/flower-fw-1.svg";
import girl from "../assets/img/vector-girl.svg";

const ForWhom = () => {
  return (
    <div className="for-whom">
      <div className="for-whom__wrapper container">
        <h2>Кому будет полезен курс</h2>
        <div className="for-whom__bottom">
          <Image
            className="for-whom__girl"
            src={girl}
            alt="girl"
            width={453}
            height={453}
          />
          <Image
            className="for-whom__flower"
            src={flower}
            alt="flower"
            width={204}
            height={341}
          />
          <div className="for-whom__items">
            <div className="for-whom__card">
              <div className="for-whom__card-wrapper">
                <h3>Предпринимателям</h3>
                <p>
                  Идеально подходит для тех, кто ведет коммерческую деятельность
                  в социальных сетей. Раскроете потенциал вашего смартфона и
                  научиться использовать различные инструменты и эффекты
                  редактирования.
                </p>
              </div>
            </div>
            <div className="for-whom__card">
              <div className="for-whom__card-wrapper">
                <h3>Блогерам и маркетологам</h3>
                <p>
                  Рекомендуется для блогеров и маркетологов. Начнете создавать
                  профессиональный и креативный контент для продвижения.
                  Повысите свою эффективность и эффективность своего контента.
                </p>
              </div>
            </div>
            <div className="for-whom__card">
              <div className="for-whom__card-wrapper">
                <h3>Творческим людям</h3>
                <p>
                  Если занимаетесь самовыражением через визуальные средства,
                  также найдете пользу в этом курсе, он предоставляет не только
                  практические навыки редактирования, но и вдохновение и
                  творческие идеи
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForWhom;

// напиши тетрис на js
