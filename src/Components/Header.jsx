import React from "react";
import { Link } from "react-router-dom";
import iconPage from "../imgs/my-icon-diary-.png";
import menuIcon from "../imgs/menuIcon.png";

function Header() {
  return (
    <>
      <header className="w-full h-16 bg-white">
        <section className="w-full h-auto p-2 flex justify-between items-center border-b-2 border-ligh-gray">
          <div className="w-full mr-2 flex justify-between items-center tl:w-64">
            <div className="bg-principal-blue p-2 rounded-lg mr-2">
              <img
                src={menuIcon}
                alt="NavBar-Icon"
                className="w-8 h-8 cursor-pointer"
              />
            </div>
            <Link to={"/"}>
              <img src={iconPage} alt="icon" className="w-52 cursor-pointer" />
            </Link>
          </div>
          <div className="hidden tl:flex justify-between items-center w-64 mr-12">
            <span className="font-bold text-lg text-white bg-principal-blue p-3 w-24 text-center rounded-lg cursor-pointer">
              Log in
            </span>
            <span className="font-bold text-lg text-principal-blue p-3 text-center rounded-lg border-2 border-principal-blue cursor-pointer">
              Create Account
            </span>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
