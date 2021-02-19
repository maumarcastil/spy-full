import React, { useState, useEffect, useRef } from "react";

import { logout } from "firebase/client";

const HeaderDashboard = ({ setUser }) => {
  const bgmenu = useRef();
  const menu = useRef();
  const [toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      bgmenu.current.className = "bgmenu";
      menu.current.className = "menu-show";
      return;
    } else {
      bgmenu.current.className = "";
      menu.current.className = "menu-hidden";
    }
  }, [toggle]);

  return (
    <>
      <div className="menu-hidden" ref={menu}>
        <div className="flex flex-col h-100 espaciado">
          <div className="flex flex-row-reverse">
            <div className="icon-menu" onClick={onClickToggle}>
              <i className="fas fa-chevron-left"></i>
            </div>
          </div>
          <div className="h-100">
            <div className="espaciado">opcion 1</div>
            <div className="espaciado">opcion 2</div>
            <div className="espaciado">opcion 3</div>
          </div>
        </div>
      </div>

      <header>
        <div className=" flex justify-between items-center px-2 py-1">
          <div className="icon-navbar" onClick={onClickToggle}>
            {toggle ? (
              <i className="fas fa-chevron-left"></i>
            ) : (
              <i className="fas fa-chevron-right"></i>
            )}
          </div>

          <div>
            <img src="/logo.png" alt="" width="50" />
          </div>

          <div>
            <button className="button" onClick={() => logout(setUser)}>
              Logout <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </div>
      </header>

      <div className="bgmenu" ref={bgmenu}></div>

      <style jsx global>{`
        header {
          display: table;
          height: 50px;
          background-color: #68d9b5;
          width: 100%;
          --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }

        button {
          background-color: #fff;
          cursor: pointer;
          border-radius: 1rem;
          color: #68d9b5;
          align-items: center;
          padding: 0.5rem 1rem 0.5rem 1rem;
        }

        .bg-header {
          background-color: #010312;
        }

        .espaciado {
          padding: 10px;
        }

        .icon-navbar {
          font-size: 26px;
          cursor: pointer;
          color: white;
        }

        .icon-menu {
          font-size: 26px;
          cursor: pointer;
          color: white;
        }

        .bgmenu {
          position: fixed;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.2);
          z-index: 997;
        }

        .menu-hidden {
          color: #000;
          background-color: #68d9b5;
          width: 20%;
          position: fixed !important;
          top: 0;
          left: 0;
          height: calc(100vh);
          z-index: 999;
          transition: all 0.3s ease !important;
          transform: translateX(-100%);
        }

        .menu-show {
          color: #000;
          background-color: #68d9b5;
          width: 50%;
          position: fixed !important;
          top: 0;
          left: 0;
          height: calc(100vh);
          z-index: 999;
          transition: all 0.3s ease !important;
          transform: translateX(0%);
        }

        @media (min-width: 640px) {
          .icon-navbar {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .menu-show {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderDashboard;
