import Image from "next/image";
import bike from "./assets/bike.png";
import pictureOne from "./assets/Rectangle23.jpg";
import pictureTwo from "./assets/Rectangle24.jpg";
import pictureThree from "./assets/Rectangle25.jpg";
import pictureFour from "./assets/640-960.png";
import pictureFive from "./assets/Group 26.png";
import pictureSix from "./assets/image 198.png";
import pictureSeven from "./assets/Rectangle 23.png";
import pictureEight from "./assets/Rectangle 24.png";
import pictureNine from "./assets/Rectangle 25.png";
import pictureTen from "./assets/Rectangle 26.png";
import pictureApp from "./assets/app.png";
import picturePhone from "./assets/phone.png";
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
      <section className="pb-11 flex flex-col gap-6 relative">
        <h2 className="px-[40px] text-[30px] leading-[35px] text-white max-w-lg font-semibold">
          Мощная батарея и экономичный расход заряда позволяют преодолевать
          расстояния до 45 км
        </h2>
        <div className="px-[40px] flex flex-col gap-4">
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
        <div className="px-[40px] flex flex-col gap-4">
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
        <div className="px-[40px] flex flex-col gap-4">
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
        <div className="flex flex-col gap-4 relative left-0 right-0 justify-between ">
          <svg
            className="m-[20px] relative z-10"
            width="47"
            height="30"
            viewBox="0 0 47 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.6684 0C45.9338 0 46.1538 0.216872 46.1538 0.484118V29.5187C46.1538 29.7817 45.9338 30 45.6684 30H39.4147C39.1465 30 38.9292 29.7817 38.9292 29.5187V0.484118C38.9292 0.216872 39.1465 0 39.4147 0H45.6684ZM18.5328 0C23.2502 0 28.1822 0.219673 30.6138 2.69624C33.0069 5.13354 33.2651 9.98553 33.2748 14.6974L33.2751 29.5187C33.2751 29.7817 33.0578 30 32.7896 30H26.5387C26.2705 30 26.0518 29.7817 26.0518 29.5187V14.4424C26.0449 11.8105 25.8964 9.10592 24.5623 7.74451C23.4139 6.57339 21.2711 6.30474 19.043 6.24878H7.71019C7.44337 6.24878 7.22606 6.46705 7.22606 6.7301V29.5187C7.22606 29.7817 7.00601 30 6.7392 30H0.482743C0.215926 30 0 29.7817 0 29.5187V0.484118C0 0.216872 0.215926 0 0.482743 0H18.5328ZM19.9329 11.5629C20.1983 11.5629 20.4143 11.7798 20.4143 12.0442V29.5187C20.4143 29.7817 20.1983 30 19.9329 30H13.3642C13.0947 30 12.8774 29.7817 12.8774 29.5187V12.0442C12.8774 11.7798 13.0947 11.5629 13.3642 11.5629H19.9329Z"
              fill="#F1F1F1"
            />
          </svg>
          <h3 className="px-[20px] text-[#ffffff] text-[25px] relative z-10 ">
            Высокая скорость передвижения
          </h3>
          <p className="px-[20px] text-white max-w-xl relative z-10">
            Двигатель мощностью до 600 Вт позволяет развивать скорость до 25
            км/ч.
          </p>
          <Image
            className="min-w-svh w-full relative bottom-0 left-0 right-0 top-0"
            src={pictureFour}
            alt="pictureOne"
          />
        </div>
        <h2 className=" px-[40px] text-[30px] my-[30px] leading-[35px] text-white max-w-lg font-semibold">
          Лаконичный современный дизайн, в котором нет ничего лишнего
        </h2>
        <div className="px-[40px] flex flex-col gap-4">
          <Image
            className="w-full rounded-2xl mx-auto"
            src={pictureFive}
            alt="pictureOne"
          />
        </div>
        <div className="px-[40px] flex flex-col gap-4">
          <h3 className="text-[#ffffff] text-[16px]">Минималистичный дизайн</h3>
          <p className="text-white max-w-xl text-[12px]">
            Рама, компоненты и аксессуары скутера выдержаны в едином стиле, где
            удобство пользователя выходит на первое место. Одного прикосновения
            достаточно, чтобы запустить самокат.
          </p>
          <Image
            className="w-full rounded-2xl mx-auto"
            src={pictureSix}
            alt="pictureOne"
          />
        </div>
        <div className="px-[40px] flex flex-col gap-4">
          <h3 className="text-[#ffffff] text-[16px]">
            Удобная панель управления
          </h3>
          <p className="text-white max-w-xl text-[12px]">
            Удобно расположенные элементы управления. Отображение 8 типов данных
            в реальном времени: скорость, режим, заряд аккумулятора, состояние
            блокировки и другая информация.
          </p>
        </div>
        <h2 className="px-[40px] text-[30px] leading-[35px] my-[30px] text-white max-w-lg font-semibold">
          Заботится о вашей безопасности
        </h2>
        <div className="px-[40px] flex flex-col gap-4">
          <h3 className="text-[#FF4C0D] text-[16px]">Яркие ходовые огни</h3>
          <p className="text-white max-w-xl text-[12px]">
            Продуманный угол рассеивания света позволяет сохранять хорошую
            видимость, не ослепляя других участников движения.
          </p>
          <Image
            className="w-full rounded-2xl mx-auto"
            src={pictureSeven}
            alt="pictureOne"
          />
        </div>
        <div className="px-[40px] flex flex-col gap-4">
          <h3 className="text-[#FF4C0D] text-[16px]">
            Двойная тормозная система
          </h3>
          <p className="text-white max-w-xl text-[12px]">
            При нажатии наручку тормоза системы переднего и заднего колеса
            активируются последовательно, сокращая тормозной путь и обеспечивая
            безопасную и плавную остановку.
          </p>
          <Image
            className="w-full rounded-2xl mx-auto"
            src={pictureEight}
            alt="pictureOne"
          />
        </div>
        <div className="px-[40px] flex flex-col gap-4">
          <h3 className="text-[#FF4C0D] text-[16px]">Яркая задняя фара</h3>
          <p className="text-white max-w-xl text-[12px]">
            При включении ходовых огней задняя фара включается автоматически.
            При нажатии на ручку тормоза она начинает мигать, предупреждая
            других участников движения.
          </p>
          <Image
            className="w-full rounded-2xl mx-auto"
            src={pictureNine}
            alt="pictureOne"
          />
        </div>
        <div className="px-[40px] flex flex-col gap-4">
          <h3 className="text-[#FF4C0D] text-[16px]">
            Отражатели спереди, сбоку и сзади
          </h3>
          <p className="text-white max-w-xl text-[12px]">
            Улучшенные отражатели, размещенные с четырех сторон, делают вашу
            поездку в темное время суток безопаснее.
          </p>
          <Image
            className="w-full rounded-2xl mx-auto"
            src={pictureTen}
            alt="pictureOne"
          />
        </div>
        <h2 className="px-[40px] text-[30px] leading-[35px] mt-[30px] text-[#FF4C0D] max-w-lg font-semibold">
          Мобильное приложение Mi Home
        </h2>
        <p className=" px-[40px] text-white max-w-xl text-[12px]">
          Подключите самокат к мобильному приложению Mi Home и используйте его
          для блокировки и разблокировки самоката, а так же просмотра основных
          данных: пробег, скорость, уровень заряда аккумулятора.
        </p>
        <Image
            className="mx-auto"
            src={pictureApp}
            alt="pictureOne"
          />
          <Image
            className="mx-auto"
            src={picturePhone}
            alt="pictureOne"
          />
      </section>
    </main>
  );
}
