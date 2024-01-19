import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo } from "../assets";
const Footer = () => {
  return (
    <section
      className={`${styles.paddingX} w-full items-center bg-transparent py-5 top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-16 h-8 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            | Gaya Haroun |{" "}
          </p>
          <span className={`text-[14px] text-center text-gray-500 pl-5 `}>
            © 2023. All Rights Reserved
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
