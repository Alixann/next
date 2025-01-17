import React from "react";

const Header = () => {
  return (
    <header className="p-[40px] flex justify-between">
      <div className="wrapper-logo-nav flex gap-[80px] items-center">
        <div className="logo">
          <svg
            width="60"
            height="39"
            viewBox="0 0 60 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.3689 0C59.7139 0 60 0.281934 60 0.629353V38.3743C60 38.7162 59.7139 39 59.3689 39H51.2391C50.8904 39 50.6079 38.7162 50.6079 38.3743V0.629353C50.6079 0.281934 50.8904 0 51.2391 0H59.3689ZM24.0926 0C30.2253 0 36.6369 0.285574 39.798 3.50511C42.909 6.6736 43.2446 12.9812 43.2573 19.1066L43.2576 38.3743C43.2576 38.7162 42.9752 39 42.6265 39H34.5003C34.1516 39 33.8673 38.7162 33.8673 38.3743V18.7751C33.8584 15.3537 33.6653 11.8377 31.931 10.0679C30.4381 8.5454 27.6524 8.19617 24.7559 8.12341H10.0232C9.67639 8.12341 9.39388 8.40716 9.39388 8.74912V38.3743C9.39388 38.7162 9.10782 39 8.76095 39H0.627567C0.280704 39 0 38.7162 0 38.3743V0.629353C0 0.281934 0.280704 0 0.627567 0H24.0926ZM25.9128 15.0318C26.2578 15.0318 26.5385 15.3137 26.5385 15.6575V38.3743C26.5385 38.7162 26.2578 39 25.9128 39H17.3735C17.0231 39 16.7406 38.7162 16.7406 38.3743V15.6575C16.7406 15.3137 17.0231 15.0318 17.3735 15.0318H25.9128Z"
              fill="#F1F1F1"
            />
          </svg>
        </div>

        {/* <nav className="header-nav">
          <ul className="header-nav-list text-white flex gap-[40px] cursor-pointer">
            <li className="header-list-item">О продукте</li>
            <li className="header-list-item">Внешний вид</li>
            <li className="header-list-item">Безопасность</li>
            <li className="header-list-item">Отзывы</li>
            <li className="header-list-item">FAQ</li>
          </ul>
        </nav> */}
      </div>
      {/* <div className="button-nav text-black bg-white py-3 px-6 rounded-full cursor-pointer">
        Купить
      </div> */}
      <button className="burger w-[54px] h-[54px] bg-white rounded-full flex justify-center items-center flex-col gap-1">
        <span className="w-6 h-1 bg-black rounded-md "></span>
        <span className="w-6 h-1 bg-black rounded-md "></span>
        <span className="w-6 h-1 bg-black rounded-md "></span>
      </button>
    </header>
  );
};

export default Header;
