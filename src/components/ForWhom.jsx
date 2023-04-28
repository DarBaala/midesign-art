import Image from "next/image";

import flower from "../assets/img/flower-fw-1.svg";
import girl from "../assets/img/vector-girl.svg";

const ForWhom = () => {
  return (
    <div className="for-whom">
      <div className="for-whom__wrapper container">
        <h2>Для кого этот курс?</h2>
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
                <h3>Lorem, ipsum dolor.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus fugiat eos, magni commodi quaerat maiores saepe,
                  impedit facilis necessitatibus iure, totam nisi mollitia natus
                  doloribus illo sapiente voluptatem ab provident!
                </p>
              </div>
            </div>
            <div className="for-whom__card">
              <div className="for-whom__card-wrapper">
                <h3>Lorem, ipsum dolor.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, excepturi aliquam iure nobis itaque a consectetur rem
                  repellendus iste, aspernatur aperiam esse. Nihil, facere eius.
                </p>
              </div>
            </div>
            <div className="for-whom__card">
              <div className="for-whom__card-wrapper">
                <h3>Lorem, ipsum dolor.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat quam non at alias animi repellendus asperiores
                  consequatur impedit cum, quae, dicta aspernatur voluptatibus,
                  architecto maxime quod eaque illum vel? Cum!
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
