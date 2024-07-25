import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import "./navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const changeLang = (e) => {
    i18n.changeLanguage(e);
  };
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-[#22b3c1] text-gray-600 body-font sticky top-0 z-30 md:relative">
      <div className="main-container w-full max-w-7xl mx-auto flex lg:py-[15px] md:py-[10px] px-2 items-center">
        <Link
          to="/"
          className="my-auto mt-2 block title-font font-medium items-center text-gray-900 mb-4 md:mr-auto"
        >
          <svg
            width="159"
            height="41"
            viewBox="0 0 159 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_489)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.2405 37.0523C24.9738 37.6765 24.7996 38.5236 25.1944 39.0534C26.0635 40.2204 31.5324 37.2264 32.297 36.1964C29.234 37.6084 29.1003 36.3471 30.153 35.008C30.1975 34.9512 30.2447 34.8951 30.2943 34.839C29.9189 35.0241 29.5365 35.2095 29.1443 35.3985C27.7883 35.9841 26.5053 36.5449 25.2405 37.0523Z"
                fill="#18354A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.8737 21.9406C14.0966 20.04 16.579 17.105 18.8622 14.9887C16.2982 16.1289 14.0956 16.6181 11.6458 17.1424C10.575 17.3717 9.45795 17.6289 8.33774 17.7542C7.73576 18.5101 7.24007 19.2007 6.69181 19.9813C6.0336 20.9188 5.51208 21.8496 4.92957 22.8081C5.21127 22.8395 5.49398 22.8586 5.77499 22.8687C7.37014 22.9257 8.92688 22.7864 10.4459 22.492C11.2598 22.3269 12.0691 22.1427 12.8737 21.9406Z"
                fill="#18354A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.007 30.8993C24.003 29.2573 26.3306 26.5365 28.5781 24.4633C28.2088 24.6383 27.8577 24.8039 27.5307 24.9591C24.3125 26.5141 20.5421 27.9449 16.8661 29.0003C15.7801 30.4553 15.0779 31.7662 14.4951 33.3355C16.3868 33.0085 18.3183 32.4802 20.05 31.9191C21.0676 31.587 22.0408 31.2558 23.007 30.8993Z"
                fill="#18354A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7503 38.9497C14.617 39.7262 15.4801 40.2204 16.643 40.4648C18.533 40.8622 20.5516 40.8644 22.3305 40.613C20.9929 40.742 19.4487 39.6117 19.6665 38.3388C19.4421 38.3896 19.216 38.4375 18.9878 38.4829C17.3326 38.8109 15.4984 39.003 13.7503 38.9497Z"
                fill="#18354A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.37374 33.9713C6.96769 33.2031 7.39409 30.9032 8.04321 30.0525C7.73417 30.0628 7.42531 30.0652 7.11828 30.0587C5.78086 30.0306 4.22904 29.8269 2.83397 29.1598C2.75713 29.7266 2.92948 30.873 3.1735 31.451C3.48275 31.8371 3.91539 32.4181 5.06866 33.088C5.78433 33.5033 6.56371 33.7862 7.37374 33.9713Z"
                fill="#18354A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.879 2.84863C25.1684 2.93581 22.4174 4.74452 21.565 5.36173C20.243 6.31863 18.5139 7.5909 17.2864 8.75116C19.7793 7.45582 24.9299 4.29951 25.879 2.84863Z"
                fill="#18354A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36.3813 11.0163C34.9478 11.2888 33.0221 12.7396 32.2847 13.2661C31.4574 13.8569 29.132 15.5817 28.42 16.3077C31.2019 14.6459 35.3219 11.9398 36.3813 11.0163Z"
                fill="#18354A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.3597 22.5612L39.35 22.3483C38.4915 22.9034 37.9355 23.3085 37.0808 23.9454C36.7329 24.2048 36.2084 24.5672 35.7167 24.9364C37.0335 24.1335 38.2912 23.322 39.3597 22.5612Z"
                fill="#18354A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.83383 29.1597C5.7757 30.5663 9.7304 30.0743 12.8596 29.3938C17.6057 28.3622 22.9214 26.4981 27.2419 24.4106C30.619 22.8079 36.5411 20.1008 38.9431 17.2839C38.4997 14.9411 37.6447 12.9992 36.3812 11.0163C35.0263 12.1971 28.6675 16.293 26.5007 17.3929C21.4204 19.9714 16.0405 22.0064 10.4459 23.141C8.92684 23.4354 7.3701 23.5747 5.77494 23.5177C4.59635 23.4754 3.38726 23.2751 2.35203 22.6736C1.17955 21.9921 0.786806 20.8799 0.821729 18.4739C0.0140715 21.0195 0.197711 27.5058 2.83383 29.1597Z"
                fill="#18354A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.988 38.4829C22.4614 37.7948 25.4767 36.4487 28.9796 34.9355C31.1124 33.9083 32.959 32.9804 34.9425 31.6798C35.5909 31.2544 37.0767 30.267 37.5611 29.5665C38.4145 27.8967 39.3641 24.3356 39.36 22.5612C35.0289 25.6453 27.5871 29.5609 25.7082 30.3743C23.7944 31.2028 21.9868 31.8441 20.012 32.4887C17.7071 33.2356 15.0481 33.924 12.6 34.1574C10.1346 34.3924 7.29394 34.3795 5.06868 33.088C3.91538 32.4181 3.48277 31.8371 3.17352 31.4511C3.7312 32.8937 5.83551 35.3117 7.39389 36.5042C8.3554 37.2397 9.4518 38.0619 10.623 38.4564C11.2938 38.6826 11.8689 38.7967 12.433 38.8592C14.5506 39.0926 16.9104 38.8948 18.988 38.4829Z"
                fill="#18354A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.3404 16.5315C13.8092 16.0032 16.0269 15.5105 18.6165 14.3513C21.3546 13.0769 28.9009 9.39275 31.4424 5.69868C29.5079 4.24299 27.7117 3.53067 25.8792 2.84863C24.8212 4.46578 18.5431 8.20199 16.544 9.11824C14.0662 10.2542 11.4502 11.1653 9.18426 11.4224C3.95323 12.0883 5.88884 7.2857 9.64128 5.65598C7.78471 6.06926 5.28863 7.49704 3.76273 9.56271C1.76746 12.2637 1.26295 15.7873 4.31879 16.8432C6.59397 17.6294 9.07103 17.0174 11.3404 16.5315Z"
                fill="#18354A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.08375 3.67511C8.85601 3.58659 8.69312 3.46116 8.61629 3.28574L8.55634 3.14974L8.70173 3.0506C8.97766 2.86093 9.23725 2.83109 9.61574 2.78734L16.3719 2.0009C16.6542 1.96761 16.9602 1.92076 17.2498 1.85144C17.5266 1.7852 17.7839 1.69894 17.9808 1.58538L20.1346 0.342501C20.4503 0.160153 20.8031 0.0500162 21.1812 0.0135718C21.5501 -0.0221111 21.9422 0.0124297 22.3462 0.118844L22.4971 0.158736L22.4781 0.302716C22.4543 0.48316 22.3808 0.707307 22.243 0.921383C22.13 1.09719 21.9732 1.26723 21.7649 1.40258L19.2535 3.03803C18.7573 3.36124 18.6938 3.53521 18.5784 3.85167C18.5466 3.939 18.5117 4.03516 18.4735 4.12785C18.3781 4.35985 18.271 4.61468 18.1661 4.86399C17.8181 5.69083 17.4893 6.47248 17.1942 7.40674L17.1288 7.61427L16.9069 7.56712C16.8934 7.56422 16.8676 7.56131 16.8407 7.55797C16.5916 7.5288 16.2412 7.4877 16.1789 6.83L16.0529 5.50561C16.0507 5.48318 16.0496 5.44439 16.0481 5.40386L16.0482 5.40298C16.0457 5.32385 16.0425 5.22936 16.0145 5.16985C15.9917 5.12103 15.9074 5.10882 15.6567 5.22252C15.0774 5.48498 14.6515 5.68001 14.2106 5.88161C13.4448 6.21254 10.9191 6.76531 9.19354 6.72561C9.37848 6.66095 9.55563 6.59529 9.72275 6.52953L8.97734 6.20377L9.37574 6.01871L10.1541 5.6796L9.01134 5.20129C8.85125 5.12166 8.95492 5.01253 9.09198 4.96665L10.4227 4.49136C10.4719 4.47386 10.5288 4.46925 10.5773 4.47452L12.9982 4.67734L14.0574 4.13709C14.0237 4.11772 13.8568 4.03159 13.7949 4.01973C13.4358 3.95098 10.2659 3.86633 9.83333 3.83659C9.54109 3.80392 9.28544 3.75349 9.08375 3.67511Z"
                fill="#18354A"
              />
              <path
                d="M154.273 9.83464C155.176 10.1749 155.976 10.6854 156.674 11.3654C158.072 12.7266 158.771 14.8968 158.771 17.8757V28.0483H154.478V18.0873C154.478 17.2477 154.389 16.5117 154.213 15.8801C154.039 15.2577 153.78 14.7349 153.435 14.3122C153.094 13.8949 152.673 13.5814 152.173 13.3723C151.666 13.1607 151.074 13.0547 150.398 13.0547C149.676 13.0547 149.034 13.1794 148.473 13.4279C147.914 13.6754 147.431 14.047 147.024 14.5423C146.615 15.0414 146.307 15.6377 146.101 16.3299C145.893 17.0286 145.788 17.8262 145.788 18.7224V28.0483H141.53V9.53751H145.257L145.63 11.6196C146.27 10.9138 147.017 10.3706 147.872 9.98984C148.867 9.54713 150.002 9.32586 151.279 9.32586C152.376 9.32586 153.374 9.4955 154.273 9.83464Z"
                fill="#18354A"
              />
              <path
                d="M126.864 27.9672C126.043 27.7719 125.274 27.4777 124.556 27.0854C123.835 26.6922 123.198 26.2179 122.643 25.6629C122.088 25.1079 121.614 24.4703 121.22 23.7505C120.828 23.0324 120.534 22.2593 120.339 21.4322C120.144 20.6067 120.046 19.7268 120.046 18.7929C120.046 17.8701 120.144 16.9987 120.339 16.1792C120.534 15.3586 120.828 14.5889 121.22 13.8706C121.613 13.1522 122.087 12.5132 122.643 11.9546C123.198 11.3958 123.836 10.9171 124.554 10.5188C125.271 10.1212 126.041 9.82272 126.863 9.62396C127.685 9.42543 128.557 9.32586 129.478 9.32586C130.399 9.32586 131.271 9.42543 132.092 9.62396C132.914 9.82272 133.684 10.1212 134.402 10.5188C135.12 10.9173 135.757 11.3958 136.312 11.9546C136.868 12.5132 137.342 13.1522 137.735 13.8706C138.127 14.5889 138.421 15.3586 138.617 16.1792C138.812 16.9987 138.909 17.8701 138.909 18.7929C138.909 19.7268 138.812 20.6069 138.617 21.4322C138.421 22.2595 138.127 23.0324 137.735 23.7505C137.342 24.4688 136.868 25.1062 136.312 25.662C135.756 26.2189 135.118 26.6932 134.4 27.0854C132.967 27.8682 131.326 28.2599 129.478 28.2599C128.555 28.2599 127.683 28.1623 126.864 27.9672ZM131.555 24.1667C132.167 23.9011 132.706 23.5014 133.172 22.9676C134.111 21.8932 134.581 20.5015 134.581 18.7929C134.581 17.9348 134.463 17.1574 134.227 16.4613C133.992 15.7684 133.641 15.1539 133.172 14.6182C132.706 14.0846 132.167 13.6846 131.555 13.4191C130.94 13.1528 130.248 13.0195 129.478 13.0195C128.708 13.0195 128.017 13.1528 127.406 13.4193C126.796 13.6848 126.261 14.0846 125.801 14.6174C125.338 15.1535 124.991 15.768 124.759 16.4603C124.526 17.1563 124.41 17.9338 124.41 18.7929C124.41 19.6519 124.526 20.4295 124.759 21.1254C124.991 21.8176 125.338 22.4324 125.801 22.9683C126.261 23.5015 126.796 23.9009 127.406 24.1667C128.017 24.433 128.708 24.5664 129.478 24.5664C130.248 24.5664 130.94 24.433 131.555 24.1667Z"
                fill="#18354A"
              />
              <path
                d="M113.552 9.82328C114.388 10.1556 115.128 10.6536 115.773 11.3168C116.421 11.9833 116.907 12.8472 117.229 13.9082C117.547 14.9573 117.707 16.1976 117.707 17.6286V28.0483H113.449V17.6641C113.449 16.8942 113.372 16.2192 113.218 15.6394C113.067 15.0688 112.842 14.5895 112.543 14.2021C111.954 13.4374 111.072 13.0547 109.898 13.0547C109.27 13.0547 108.711 13.1643 108.221 13.3831C107.732 13.6013 107.307 13.929 106.948 14.366C106.218 15.2529 105.853 16.4819 105.853 18.0521V28.0483H101.56V17.6641C101.56 16.8834 101.481 16.2013 101.325 15.6182C101.172 15.0457 100.942 14.5683 100.639 14.187C100.339 13.8108 99.9691 13.5285 99.531 13.3407C99.0867 13.1501 98.5672 13.0547 97.9737 13.0547C97.359 13.0547 96.8096 13.168 96.3264 13.3944C95.8445 13.6203 95.4225 13.961 95.0617 14.4164C94.6978 14.8758 94.424 15.4151 94.2411 16.0336C94.0566 16.6585 93.9642 17.3667 93.9642 18.1578V28.0483H89.7062V9.53751H93.4331L93.8037 11.6074C94.4026 10.9198 95.0898 10.3873 95.8647 10.0101C96.7762 9.56678 97.8078 9.33876 98.9599 9.32684L98.9615 9.32586C99.6121 9.32586 100.227 9.39597 100.804 9.53578C101.384 9.67597 101.923 9.88642 102.422 10.1662C102.926 10.4485 103.371 10.805 103.758 11.2348C104.062 11.5718 104.329 11.9546 104.56 12.3831C104.835 11.9819 105.144 11.6172 105.483 11.2895C105.914 10.8739 106.397 10.5169 106.932 10.2192C107.468 9.92071 108.058 9.69675 108.701 9.54808C109.342 9.40001 110.035 9.32586 110.78 9.32586C111.794 9.32586 112.719 9.49185 113.552 9.82328Z"
                fill="#18354A"
              />
              <path
                d="M86.3461 24.2841H87.3108V28.0483H85.076C84.4689 28.0483 83.9422 27.9832 83.4969 27.8534C83.038 27.7195 82.6661 27.5168 82.382 27.2453C82.0981 26.9743 81.8853 26.6425 81.744 26.2502C81.668 26.0396 81.6128 25.8126 81.5784 25.5688C80.9473 26.3831 80.2043 27.0132 79.3496 27.4584C78.3233 27.9926 77.1393 28.2599 75.7977 28.2599C74.7673 28.2599 73.8351 28.139 73.0015 27.8973C72.1629 27.6545 71.4265 27.289 70.7929 26.8016C70.1529 26.3094 69.6723 25.7234 69.3512 25.0444C69.0311 24.3669 68.8709 23.5999 68.8709 22.744C68.8709 21.7831 69.0425 20.93 69.3859 20.1855C69.73 19.438 70.2469 18.8029 70.9357 18.2801C71.6182 17.7623 72.453 17.3744 73.4399 17.1172C74.4182 16.862 75.5454 16.7345 76.8208 16.7345H81.1479V15.8649C81.1479 15.3896 81.0665 14.9683 80.9038 14.6018C80.7414 14.2373 80.4976 13.9219 80.1727 13.6567C79.8431 13.3877 79.4483 13.1851 78.9894 13.0495C78.5233 12.9119 77.9884 12.8431 77.3853 12.8431C76.8508 12.8431 76.3654 12.9009 75.9295 13.016C75.4981 13.13 75.113 13.3008 74.7752 13.5277C74.4415 13.7522 74.175 14.013 73.9767 14.3089C73.7802 14.6024 73.649 14.9342 73.584 15.3036L73.5512 15.489H69.3765L69.402 15.2423C69.4992 14.3055 69.7556 13.4723 70.1706 12.7428C70.5863 12.012 71.1612 11.3867 71.8945 10.8672C72.6227 10.3515 73.4607 9.96499 74.4081 9.70852C75.3505 9.45353 76.402 9.32586 77.5616 9.32586C78.7942 9.32586 79.8886 9.47049 80.8448 9.75895C81.8096 10.0501 82.6337 10.4886 83.3165 11.0734C84.0028 11.6617 84.5175 12.3786 84.8603 13.223C85.2003 14.0617 85.3706 15.0247 85.3706 16.1117V23.2381C85.3706 23.6024 85.45 23.8692 85.6093 24.0374C85.7645 24.2017 86.0105 24.2841 86.3461 24.2841ZM81.1485 20.4156L81.1479 20.0047H76.6445C76.0743 20.0047 75.5719 20.0598 75.1376 20.1697C74.7121 20.2774 74.352 20.4376 74.0584 20.6496C73.7723 20.8563 73.5578 21.1114 73.4156 21.4141C73.2715 21.7211 73.1992 22.0823 73.1992 22.4971C73.1992 22.8522 73.2667 23.1699 73.4011 23.4498C73.5367 23.7305 73.7404 23.9778 74.0123 24.1911C74.2902 24.4082 74.6188 24.5716 74.9991 24.6808C75.3852 24.7929 75.828 24.8486 76.3269 24.8486C77.0898 24.8486 77.767 24.7467 78.3577 24.5433C78.9415 24.3423 79.442 24.0415 79.8589 23.6414C80.2768 23.2404 80.5931 22.7721 80.8073 22.2375C81.023 21.6991 81.1372 21.0919 81.1485 20.4156Z"
                fill="#18354A"
              />
              <path
                d="M51.2037 13.1129V9.53745H66.4333V12.558L56.5993 24.2489H66.8922V28.0482H50.7805V25.0276L60.6145 13.3368H51.2037V13.1129Z"
                fill="#18354A"
              />
              <path
                d="M116.637 33.4834V40.4153H117.707V33.4834H116.637Z"
                fill="#18354A"
              />
              <path
                d="M111.116 36.5187C110.909 36.9114 110.805 37.3687 110.805 37.89C110.805 38.4053 110.912 38.8573 111.126 39.2468C111.341 39.6363 111.645 39.9381 112.038 40.1529C112.43 40.3673 112.891 40.4746 113.419 40.4746C114.026 40.4746 114.533 40.3096 114.939 39.9797C115.345 39.6492 115.594 39.2269 115.687 38.7122H114.617C114.545 38.9957 114.396 39.2156 114.171 39.3704C113.947 39.5256 113.67 39.6032 113.339 39.6032C112.924 39.6032 112.59 39.4745 112.339 39.2171C112.089 38.9595 111.95 38.6097 111.924 38.1672V38.1079H115.746C115.766 37.9692 115.776 37.8342 115.776 37.702C115.769 37.2135 115.659 36.7877 115.444 36.4247C115.23 36.0614 114.936 35.7807 114.563 35.5826C114.19 35.3849 113.759 35.2856 113.27 35.2856C112.789 35.2856 112.361 35.3928 111.988 35.6076C111.615 35.822 111.325 36.1257 111.116 36.5187ZM114.686 37.3258H111.963C112.003 36.9691 112.15 36.6837 112.404 36.4692C112.658 36.2544 112.96 36.1472 113.31 36.1472C113.686 36.1472 113.998 36.2513 114.246 36.4591C114.493 36.6669 114.64 36.9558 114.686 37.3258Z"
                fill="#18354A"
              />
              <path
                d="M105.596 35.3452L107.467 40.4153H108.775L110.646 35.3452H109.517L108.141 39.2663L106.745 35.3452H105.596Z"
                fill="#18354A"
              />
              <path
                d="M105.675 39.4843H105.467C105.243 39.4843 105.13 39.3657 105.13 39.1279V37.1277C105.13 36.5335 104.946 36.0781 104.576 35.7612C104.206 35.4442 103.681 35.2856 103.001 35.2856C102.361 35.2856 101.842 35.4259 101.447 35.7066C101.05 35.987 100.826 36.3818 100.773 36.8899H101.823C101.862 36.6654 101.983 36.4856 102.184 36.35C102.386 36.215 102.641 36.1472 102.952 36.1472C103.301 36.1472 103.576 36.2282 103.774 36.3897C103.972 36.5515 104.071 36.7745 104.071 37.058V37.3652H102.793C102.087 37.3652 101.549 37.5055 101.179 37.7859C100.81 38.0666 100.624 38.4678 100.624 38.9891C100.624 39.4515 100.796 39.8145 101.139 40.0785C101.483 40.3427 101.938 40.4746 102.506 40.4746C103.239 40.4746 103.797 40.1844 104.179 39.6032C104.179 39.8675 104.252 40.0687 104.398 40.2071C104.543 40.3459 104.78 40.4153 105.11 40.4153H105.675V39.4843ZM104.071 38.1574V38.3356C104.064 38.7318 103.937 39.0487 103.689 39.2865C103.442 39.524 103.097 39.6429 102.655 39.6429C102.364 39.6429 102.135 39.577 101.966 39.4448C101.798 39.3127 101.714 39.1377 101.714 38.92C101.714 38.6693 101.803 38.4795 101.981 38.3508C102.159 38.2218 102.414 38.1574 102.744 38.1574H104.071Z"
                fill="#18354A"
              />
              <path
                d="M100.337 35.3452H100.1C99.7105 35.3452 99.3998 35.413 99.169 35.5479C98.9381 35.6832 98.7498 35.87 98.6047 36.1078L98.4855 35.3452H97.5353V40.4153H98.6047V37.8701C98.6047 37.428 98.7038 37.0631 98.9015 36.7761C99.0999 36.4887 99.42 36.3452 99.8622 36.3452H100.337V35.3452Z"
                fill="#18354A"
              />
              <path
                d="M94.2811 36.2859V39.0386C94.2811 39.5073 94.3918 39.8539 94.6129 40.0784C94.834 40.303 95.1856 40.4153 95.6675 40.4153H96.6973V39.4745H95.8855C95.694 39.4745 95.5584 39.4332 95.4792 39.3505C95.4004 39.2682 95.3607 39.1279 95.3607 38.9298V36.2859H96.5787V35.3452H95.3607V33.9291H94.2811V35.3452H93.3996V36.2859H94.2811Z"
                fill="#18354A"
              />
              <path
                d="M86.7564 38.7415H85.7263C85.7396 39.283 85.9559 39.7069 86.3751 40.0141C86.7942 40.3213 87.3436 40.4746 88.0236 40.4746C88.4263 40.4746 88.7897 40.4102 89.1129 40.2816C89.4365 40.1526 89.6907 39.9681 89.8755 39.7271C90.0607 39.4862 90.1527 39.207 90.1527 38.8901C90.1527 38.5337 90.0638 38.2514 89.8856 38.0436C89.7074 37.8354 89.4696 37.6837 89.1725 37.5882C88.8754 37.4923 88.509 37.4213 88.0731 37.375C87.7498 37.3355 87.5152 37.3009 87.3701 37.2712C87.225 37.2416 87.1042 37.1886 87.0087 37.1126C86.9131 37.0369 86.8652 36.923 86.8652 36.771C86.8652 36.5666 86.9611 36.4045 87.1525 36.2859C87.3436 36.167 87.5947 36.1078 87.905 36.1078C88.2153 36.1078 88.4727 36.1819 88.6774 36.3304C88.8821 36.479 88.9975 36.6688 89.024 36.8997H90.0638C90.031 36.385 89.8146 35.9854 89.4151 35.7015C89.0158 35.4177 88.496 35.2758 87.8555 35.2758C87.466 35.2758 87.1178 35.3417 86.8106 35.4738C86.5037 35.606 86.2628 35.7924 86.0877 36.0333C85.913 36.2743 85.8253 36.5499 85.8253 36.8603C85.8253 37.1902 85.913 37.4526 86.0877 37.6475C86.2628 37.8424 86.4936 37.9843 86.781 38.0732C87.0683 38.1622 87.4329 38.2334 87.8753 38.2861C88.1986 38.3259 88.438 38.3637 88.5935 38.4003C88.7483 38.4362 88.8723 38.4974 88.9647 38.5832C89.0571 38.669 89.1031 38.7977 89.1031 38.9696C89.1031 39.1739 89.0025 39.3376 88.8013 39.4597C88.5998 39.5817 88.3374 39.6429 88.0138 39.6429C87.6508 39.6429 87.3553 39.5587 87.1276 39.3903C86.8999 39.2219 86.7759 39.0058 86.7564 38.7415Z"
                fill="#18354A"
              />
              <path
                d="M81.7361 38.7415H80.7061C80.7193 39.283 80.9357 39.7069 81.3548 40.0141C81.7739 40.3213 82.3233 40.4746 83.0033 40.4746C83.4061 40.4746 83.7694 40.4102 84.0927 40.2816C84.4162 40.1526 84.6704 39.9681 84.8553 39.7271C85.0404 39.4862 85.1325 39.207 85.1325 38.8901C85.1325 38.5337 85.0435 38.2514 84.8653 38.0436C84.6872 37.8354 84.4494 37.6837 84.1523 37.5882C83.8552 37.4923 83.4887 37.4213 83.0528 37.375C82.7296 37.3355 82.4949 37.3009 82.3501 37.2712C82.2048 37.2416 82.0843 37.1886 81.9884 37.1126C81.8928 37.0369 81.8449 36.923 81.8449 36.771C81.8449 36.5666 81.9408 36.4045 82.1322 36.2859C82.3233 36.167 82.5744 36.1078 82.8847 36.1078C83.1951 36.1078 83.4524 36.1819 83.6571 36.3304C83.8618 36.479 83.9772 36.6688 84.0037 36.8997H85.0435C85.0107 36.385 84.7944 35.9854 84.3948 35.7015C83.9955 35.4177 83.4758 35.2758 82.8352 35.2758C82.4457 35.2758 82.0975 35.3417 81.7903 35.4738C81.4835 35.606 81.2425 35.7924 81.0675 36.0333C80.8928 36.2743 80.8051 36.5499 80.8051 36.8603C80.8051 37.1902 80.8928 37.4526 81.0675 37.6475C81.2425 37.8424 81.4734 37.9843 81.7607 38.0732C82.048 38.1622 82.4126 38.2334 82.8551 38.2861C83.1784 38.3259 83.4177 38.3637 83.5732 38.4003C83.7281 38.4362 83.852 38.4974 83.9444 38.5832C84.0368 38.669 84.0829 38.7977 84.0829 38.9696C84.0829 39.1739 83.9823 39.3376 83.7811 39.4597C83.5795 39.5817 83.3171 39.6429 82.9935 39.6429C82.6305 39.6429 82.335 39.5587 82.1073 39.3903C81.8796 39.2219 81.7557 39.0058 81.7361 38.7415Z"
                fill="#18354A"
              />
              <path
                d="M75.393 36.5187C75.1852 36.9114 75.0811 37.3687 75.0811 37.89C75.0811 38.4053 75.1883 38.8573 75.4031 39.2468C75.6176 39.6363 75.9213 39.9381 76.3143 40.1529C76.7069 40.3673 77.1674 40.4746 77.6957 40.4746C78.3028 40.4746 78.8096 40.3096 79.2155 39.9797C79.6217 39.6492 79.8709 39.2269 79.9633 38.7122H78.8938C78.8209 38.9957 78.6727 39.2156 78.4482 39.3704C78.2236 39.5256 77.9464 39.6032 77.6162 39.6032C77.2005 39.6032 76.8671 39.4745 76.6161 39.2171C76.3654 38.9595 76.2266 38.6097 76.2001 38.1672V38.1079H80.0226C80.0424 37.9692 80.0522 37.8342 80.0522 37.702C80.0459 37.2135 79.9352 36.7877 79.7207 36.4247C79.506 36.0614 79.2123 35.7807 78.8392 35.5826C78.4665 35.3849 78.0356 35.2856 77.5471 35.2856C77.0649 35.2856 76.6375 35.3928 76.2648 35.6076C75.8917 35.822 75.6012 36.1257 75.393 36.5187ZM78.9632 37.3258H76.2398C76.2793 36.9691 76.4262 36.6837 76.6804 36.4692C76.9346 36.2544 77.2368 36.1472 77.5868 36.1472C77.9628 36.1472 78.2747 36.2513 78.5223 36.4591C78.7702 36.6669 78.9168 36.9558 78.9632 37.3258Z"
                fill="#18354A"
              />
              <path
                d="M73.7297 35.8403C73.35 35.4707 72.8599 35.2856 72.2591 35.2856C71.5596 35.2856 71.0181 35.5268 70.6352 36.0087L70.5163 35.3452H69.5853V40.4153H70.6551V37.8604C70.6551 37.3453 70.7752 36.941 71.0165 36.6474C71.2574 36.3534 71.5892 36.2068 72.0115 36.2068C72.4076 36.2068 72.7082 36.3323 72.9126 36.583C73.1173 36.8338 73.2198 37.2003 73.2198 37.6822V40.4153H74.299V37.6226C74.299 36.8041 74.1091 36.2099 73.7297 35.8403Z"
                fill="#18354A"
              />
              <path
                d="M67.4662 35.3452V40.4153H68.5357V35.3452H67.4662Z"
                fill="#18354A"
              />
              <path
                d="M68.4663 33.4983C68.3408 33.3762 68.1856 33.315 68.0008 33.315C67.816 33.315 67.6608 33.3762 67.5353 33.4983C67.4101 33.6203 67.3473 33.7739 67.3473 33.9587C67.3473 34.1435 67.4101 34.2971 67.5353 34.4192C67.6608 34.5412 67.816 34.6024 68.0008 34.6024C68.1856 34.6024 68.3408 34.5412 68.4663 34.4192C68.5915 34.2971 68.6542 34.1435 68.6542 33.9587C68.6542 33.7739 68.5915 33.6203 68.4663 33.4983Z"
                fill="#18354A"
              />
              <path
                d="M63.1981 38.7415H62.1683C62.1813 39.283 62.3976 39.7069 62.8168 40.0141C63.2362 40.3213 63.7856 40.4746 64.4656 40.4746C64.8683 40.4746 65.2313 40.4102 65.5549 40.2816C65.8785 40.1526 66.1327 39.9681 66.3172 39.7271C66.5023 39.4862 66.5948 39.207 66.5948 38.8901C66.5948 38.5337 66.5055 38.2514 66.3273 38.0436C66.1491 37.8354 65.9113 37.6837 65.6142 37.5882C65.3174 37.4923 64.951 37.4213 64.5151 37.375C64.1915 37.3355 63.9572 37.3009 63.8121 37.2712C63.6667 37.2416 63.5462 37.1886 63.4507 37.1126C63.3548 37.0369 63.3069 36.923 63.3069 36.771C63.3069 36.5666 63.4027 36.4045 63.5942 36.2859C63.7856 36.167 64.0364 36.1078 64.3467 36.1078C64.6573 36.1078 64.9147 36.1819 65.1191 36.3304C65.3238 36.479 65.4395 36.6688 65.4657 36.8997H66.5055C66.4727 36.385 66.2563 35.9854 65.8571 35.7015C65.4575 35.4177 64.9377 35.2758 64.2972 35.2758C63.9077 35.2758 63.5595 35.3417 63.2526 35.4738C62.9454 35.606 62.7045 35.7924 62.5298 36.0333C62.3547 36.2743 62.2674 36.5499 62.2674 36.8603C62.2674 37.1902 62.3547 37.4526 62.5298 37.6475C62.7045 37.8424 62.9357 37.9843 63.2227 38.0732C63.51 38.1622 63.8746 38.2334 64.317 38.2861C64.6406 38.3259 64.8797 38.3637 65.0352 38.4003C65.19 38.4362 65.314 38.4974 65.4064 38.5832C65.4988 38.669 65.5448 38.7977 65.5448 38.9696C65.5448 39.1739 65.4442 39.3376 65.243 39.4597C65.0415 39.5817 64.7791 39.6429 64.4558 39.6429C64.0925 39.6429 63.7973 39.5587 63.5693 39.3903C63.3419 39.2219 63.2179 39.0058 63.1981 38.7415Z"
                fill="#18354A"
              />
              <path
                d="M61.2966 35.3452H60.2274V37.8603C60.2274 38.3817 60.1117 38.7926 59.8808 39.0932C59.6497 39.3934 59.3295 39.5439 58.9202 39.5439C58.5307 39.5439 58.2367 39.4152 58.0387 39.1575C57.8406 38.9002 57.7416 38.5236 57.7416 38.0288V35.3452H56.6721V38.1376C56.6721 38.9563 56.8573 39.5502 57.2269 39.9201C57.5965 40.2898 58.0784 40.4746 58.6726 40.4746C59.333 40.4746 59.8543 40.2402 60.2372 39.7716L60.3561 40.4153H61.2966V35.3452Z"
                fill="#18354A"
              />
              <path
                d="M54.7316 35.5975C54.3683 35.3896 53.9557 35.2855 53.4937 35.2855C52.8005 35.2855 52.2524 35.5565 51.8499 36.0977V33.4834H50.7805V40.4153H51.7112L51.8401 39.6823C52.0117 39.9267 52.2363 40.1198 52.5132 40.2617C52.7907 40.4036 53.1171 40.4746 53.4937 40.4746C53.9557 40.4746 54.3683 40.3658 54.7316 40.1478C55.0946 39.9302 55.3784 39.6246 55.5831 39.2319C55.7878 38.839 55.89 38.3883 55.89 37.8802C55.89 37.3453 55.7878 36.8833 55.5831 36.4938C55.3784 36.1043 55.0946 35.8056 54.7316 35.5975ZM54.3897 39.1033C54.116 39.4168 53.7577 39.5735 53.3155 39.5735C52.873 39.5735 52.5163 39.4152 52.246 39.0982C51.9754 38.7813 51.8401 38.3719 51.8401 37.8701C51.8401 37.375 51.9754 36.9725 52.246 36.6622C52.5163 36.3519 52.873 36.1967 53.3155 36.1967C53.7577 36.1967 54.116 36.3534 54.3897 36.6669C54.6638 36.9807 54.8007 37.3851 54.8007 37.8802C54.8007 38.382 54.6638 38.7895 54.3897 39.1033Z"
                fill="#18354A"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_489">
                <rect
                  width="158.954"
                  height="41"
                  fill="white"
                  transform="translate(0.0230713)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <nav className="main-nav md:hidden lg:text-base lg:flex lg:mr-auto">
          <ul className="lg:flex lg:flex-wrap lg:items-center text-base">
            <li className="px-[10px]">
              <a
                href="/"
                className="font-normal text-[15px] px-[15px] py-2 text-white hover:opacity-80"
              >
                {t("Home")}
              </a>
            </li>
            <li className="px-[10px]">
              <a
                href="#about"
                className="font-normal text-[15px] px-[15px] py-2 text-white hover:opacity-80"
              >
                {t("About")}
              </a>
            </li>
            <li className="px-[10px]">
              <a
                href="#tours"
                className="font-normal text-[15px] px-[15px] py-2 text-white hover:opacity-80"
              >
                {t("Tours")}
              </a>
            </li>
            <li className="px-[10px]">
              <a
                href="#contact"
                className="font-normal text-[15px] px-[15px] py-2 text-white hover:opacity-80"
              >
                {t("Contact")}
              </a>
            </li>
          </ul>
        </nav>
        <ul className="main-list sm:hidden lg:flex lg:items-center lg:justify-between ">
          <li className="mr-5">
            <a
              className="text-white cursor-pointer hover:text-black"
              onClick={() => changeLang("eng")}
            >
              ENG
            </a>
          </li>
          <li className="mr-5">
            <a
              className="text-white cursor-pointer hover:text-black"
              onClick={() => changeLang("uz")}
            >
              UZ
            </a>
          </li>
          <li className="mr-5">
            <a
              className="text-white cursor-pointer hover:text-black"
              onClick={() => changeLang("ru")}
            >
              RU
            </a>
          </li>

          <li className="mr-5">
            <a href="https://t.me/zamonbiznestour" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_1503_421)">
                  <path
                    d="M16.8177 8.502L10.7318 13.4765L10.4454 13.7111C10.3825 13.761 10.3414 13.8333 10.3309 13.9129L10.2668 14.442L10.0909 15.9284C10.0925 15.9465 10.0869 15.9644 10.0752 15.9784C10.0636 15.9923 10.0469 16.0011 10.0288 16.0027C10.0107 16.0043 9.99275 15.9987 9.97882 15.9871C9.96488 15.9754 9.95613 15.9587 9.95451 15.9406L9.45951 14.4543L8.94814 12.9338C8.92633 12.8657 8.92912 12.7921 8.95603 12.7258C8.98295 12.6595 9.03227 12.6047 9.09542 12.5711L15.4281 8.94109L16.62 8.25928C16.7931 8.15837 16.9704 8.37655 16.8177 8.502Z"
                    fill="white"
                  ></path>
                  <path
                    d="M20.7273 0H3.27273C2.40475 0 1.57232 0.344804 0.95856 0.95856C0.344804 1.57232 0 2.40475 0 3.27273L0 20.7273C0 21.5953 0.344804 22.4277 0.95856 23.0414C1.57232 23.6552 2.40475 24 3.27273 24H20.7273C21.5953 24 22.4277 23.6552 23.0414 23.0414C23.6552 22.4277 24 21.5953 24 20.7273V3.27273C24 2.40475 23.6552 1.57232 23.0414 0.95856C22.4277 0.344804 21.5953 0 20.7273 0ZM19.485 6.94636L17.1423 17.2977C17.0318 17.7832 16.4155 18.0027 15.9832 17.7068L12.4459 15.3068L10.6445 17.01C10.5711 17.0789 10.4819 17.1289 10.3848 17.1555C10.2877 17.1822 10.1855 17.1848 10.0871 17.163C9.9888 17.1412 9.89725 17.0958 9.82044 17.0306C9.74363 16.9655 9.68387 16.8826 9.64636 16.7891L8.99591 14.88L8.34546 12.9709L4.85864 12.0164C4.76115 11.9951 4.67342 11.9422 4.60909 11.8659C4.54477 11.7896 4.50745 11.6942 4.50294 11.5945C4.49843 11.4948 4.52698 11.3964 4.58415 11.3147C4.64133 11.2329 4.72392 11.1723 4.81909 11.1423L18.2891 6.28909L18.5373 6.20045C19.0595 6.01773 19.5995 6.44045 19.485 6.94636Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1503_421">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li className="mr-5">
            <a href="https://instagram.com/zamontour" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_1503_426)">
                  <path
                    d="M12.0037 5.83789C8.6007 5.83789 5.8457 8.59589 5.8457 11.9959C5.8457 15.3989 8.6037 18.1539 12.0037 18.1539C15.4067 18.1539 18.1617 15.3959 18.1617 11.9959C18.1617 8.59289 15.4037 5.83789 12.0037 5.83789ZM12.0037 15.9929C9.7947 15.9929 8.0067 14.2039 8.0067 11.9959C8.0067 9.78789 9.7957 7.99889 12.0037 7.99889C14.2117 7.99889 16.0007 9.78789 16.0007 11.9959C16.0017 14.2039 14.2127 15.9929 12.0037 15.9929Z"
                    fill="white"
                  ></path>
                  <path
                    d="M16.948 0.0763632C14.74 -0.0266368 9.27098 -0.0216368 7.06098 0.0763632C5.11898 0.167363 3.40598 0.636363 2.02498 2.01736C-0.283017 4.32536 0.0119831 7.43536 0.0119831 11.9964C0.0119831 16.6644 -0.248017 19.7024 2.02498 21.9754C4.34198 24.2914 7.49698 23.9884 12.004 23.9884C16.628 23.9884 18.224 23.9914 19.859 23.3584C22.082 22.4954 23.76 20.5084 23.924 16.9394C24.028 14.7304 24.022 9.26236 23.924 7.05236C23.726 2.83936 21.465 0.284363 16.948 0.0763632ZM20.443 20.4484C18.93 21.9614 16.831 21.8264 11.975 21.8264C6.97498 21.8264 4.96998 21.9004 3.50698 20.4334C1.82198 18.7564 2.12698 16.0634 2.12698 11.9804C2.12698 6.45536 1.55998 2.47636 7.10498 2.19236C8.37898 2.14736 8.75398 2.13236 11.961 2.13236L12.006 2.16236C17.335 2.16236 21.516 1.60436 21.767 7.14836C21.824 8.41336 21.837 8.79336 21.837 11.9954C21.836 16.9374 21.93 18.9544 20.443 20.4484Z"
                    fill="white"
                  ></path>
                  <path
                    d="M18.406 7.03425C19.2008 7.03425 19.845 6.38999 19.845 5.59525C19.845 4.80051 19.2008 4.15625 18.406 4.15625C17.6113 4.15625 16.967 4.80051 16.967 5.59525C16.967 6.38999 17.6113 7.03425 18.406 7.03425Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1503_426">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
        </ul>
        {open ? (
          <IoClose
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[27px] text-white cursor-pointer hover:opacity-90"
          />
        ) : (
          <RiMenu3Fill
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[27px] text-white cursor-pointer hover:opacity-90"
          />
        )}{" "}
        {open ? <MobileNav /> : ""}
      </div>
    </header>
  );
};

export default Navbar;
