import React from "react";
import { Link } from "react-router-dom";
import InstagramLogo from "../../../assets/logo/instagram.png";
import InstagramIcon from "../../../assets/logo/icon.png";
import HomeLogo from "../../../assets/navlogo/home.png";
import SearchLogo from "../../../assets/navlogo/search.png";
import ExploreLogo from "../../../assets/navlogo/explore.png";
import ReelsLogo from "../../../assets/navlogo/reel.png";
import MessagesLogo from "../../../assets/navlogo/message.png";
import NotificationsLogo from "../../../assets/navlogo/like.png";
import CreateLogo from "../../../assets/navlogo/create.png";
import SabrinaIcon from "../../../assets/navlogo/sabrina.png";
import ThreadsLogo from "../../../assets/navlogo/threads.png";
import MoreLogo from "../../../assets/navlogo/more.png";


const LargeNav = () => {
  const sidebarItems = [
    {
      name: "Search",
      link: "/search",
      icon: SearchLogo,
    },
    {
      name: "Explore",
      link: "/explore",
      icon: ExploreLogo,
    },
    {
      name: "Reels",
      link: "/reels",
      icon: ReelsLogo,
    },
    {
      name: "Messages",
      link: "/messages",
      icon: MessagesLogo,
    },
    {
      name: "Notifications",
      link: "/notifications",
      icon: NotificationsLogo,
    },
    {
      name: "Create",
      link: "/create",
      icon: CreateLogo,
    },
  ];

  return (
    <>
      <div className="w-full h-full relative">
        {/*Aqui irá a barra lateral */}
        <Link to="/" className="mb-10 px-2 lg:block md:hidden sm:hidden hidden">
          <img src={InstagramLogo} alt="instagram logo" className="w-28 h-auto" />
        </Link>

        <Link to="/" className="mb-10 px-2 lg:hidden md:block sm:block block">
          <img src={InstagramIcon} alt="instagram icon" className="w-28 h-auto" />
        </Link>

        {/* Aqui começa a listagem, o map para o array de objetos serve para o looping dos itens*/}
        <div className="w-full h-auto flex items-start flex-col gap-y-2">
          <Link to="/" className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group">
            <img src={HomeLogo} alt="home icon" className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300" />
            <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden hidden">
              Home
            </p>
          </Link>

          {sidebarItems.map((item) => (
            <Link to={item.link} key={item.id} className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group">
              <img src={item.icon} alt="item icon" className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300" />
              <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
                {item.name}
              </p>
            </Link>
          ))}

          {/* Parte do Perfil */}


          <Link to="/profile" className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group">
            <img src={SabrinaIcon} alt="profile icon" className="w-6 h-6 rounded full object-cover group-hover:scale-105 ease-out duration-300" />
            <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
              Profile
            </p>
          </Link>
        </div>
        {/* Parte do Threads e opção de ver mais*/}
        <div className="w-full h-auto absolute bottom-0 left-0 px-0">
          <Link to="/" className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2">
            <img src={ThreadsLogo} alt="threads logo" className="w-6 h-6 rounded full object-cover group-hover:scale-105 ease-out duration-300" />
            <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
              Threads
            </p>
          </Link>

          <Link to="/" className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2">
            <img src={MoreLogo} alt="more icon" className="w-6 h-6 rounded full object-cover group-hover:scale-105 ease-out duration-300" />
            <p className="text-base font-medium text-white lg:block md:hidden sm:hidden hidden">
              More
            </p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default LargeNav;