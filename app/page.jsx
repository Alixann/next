import Image from "next/image";
import bike from "./assets/bike.png";
import pictureOne from "./assets/Rectangle23.jpg";
import pictureTwo from "./assets/Rectangle24.jpg";
import pictureThree from "./assets/Rectangle25.jpg";

export default function Home() {
  return (
    <main>
      <section className="px-[40px] pb-20 flex flex-col gap-6 relative ">
        <h1 className="text-[40px] text-[#FF4C0D] leading-[30px] z-10 max-w-lg font-semibold">
          Стильный электросамокат с мощным аккумулятором
        </h1>
        <p className="text-white text-xl z-10 max-w-80">
          Улучшенная производительность для дальних путешествий. Работает так же
          просто, как и выглядит.
        </p>
        <Image
          className=" relative -order-1 object-cover z-0 overflow-y-visible -right-10 -top-40 h-60 sm:absяolute sm:-right-60 sm:-top-56"
          src={bike}
          alt="bike"
        />
        <button className="flex items-center rounded-[108px] border-[3px] border-white font-bold z-10 w-fit">
          <span className="rounded-[65px] bg-white px-5 py-3">Белый</span>
          <span className="text-white px-5 py-3">Черный</span>
        </button>
      </section>
      <section className="px-[40px] pb-11 flex flex-col gap-6 relative">
        <h2 className="text-[30px] leading-[35px] text-white max-w-lg font-semibold">
          Мощная батарея и экономичный расход заряда позволяют преодолевать
          расстояния до 45 км
        </h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-[#FF4C0D] text-xl">Три режима скорости</h3>
          <p className="text-white max-w-xl">
            Три режима езды позволяют почуствовать себя комфортно в любой
            ситуации. Режим «S» увеличитвает скорость, если опаздываете на
            работу. Во время прогулки по парку активируйте режим «D». Включите
            режим «Пешеход», когда двигаетесь по оживлённой улице.
          </p>
          <Image
            className="w-full rounded-2xl mx-auto"
            src={pictureOne}
            alt="pictureOne"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[#FF4C0D] text-xl">
            Система восстановления энергии
          </h3>
          <p className="text-white max-w-xl">
            Во время торможения и движения по инерции система преобразовывает
            кинетическую энергию в электрическую, позволяя увеличить общий запас
            хода самоката.
          </p>
          <Image
            className="w-full rounded-2xl mx-auto"
            src={pictureTwo}
            alt="pictureOne"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[#FF4C0D] text-xl">Мощная батарея</h3>
          <p className="text-white max-w-xl">
            Самокат оснащен аккумулятором емкостью 12 800 мАч. Это позволяет
            преодолевать расстояния до 45 км без подзарядки.
          </p>
          <Image
            className="w-full rounded-2xl mx-auto"
            src={pictureThree}
            alt="pictureOne"
          />
        </div>
      </section>
    </main>
  );
}
