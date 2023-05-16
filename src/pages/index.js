import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Skills from "@/components/Skills";
import ForWhom from "@/components/ForWhom";
import CallReques from "@/components/CallReques";

export default function Home() {
  return (
    <>
      <Head>
        <title>MiDesign - авторский курс по созданию контента</title>
        <meta
          name="description"
          content="Редактирование фотографий, обзоры на программы создания контента, пресеты, лайфхаки по сохранению качества фотографий и видео в социальных сетях,
оформление фотографий Вашего товара"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Skills />
      <ForWhom />
      <CallReques />
      <div style={{ height: "1000px" }}></div>
    </>
  );
}
