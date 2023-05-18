const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__wrapper container">
        <div className="banner__for-whom">
          <h1>Авторский курс по созданию контента на телефоне</h1>
          <p>
            Редактирование фотографий, обзоры на программы создания контента,
            пресеты, лайфхаки по сохранению качества фотографий и видео в
            социальных сетях, оформление фотографий Вашего товара
          </p>
          <div className="banner__buttons">
            <button className="banner__buttons-buy">Купить</button>
            <button className="banner__buttons-materials">Материалы курса</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
