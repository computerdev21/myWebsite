import { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import { SideSecondPanel } from "./SeondPanel/SideSecondPanel";
import { SideMainPanel } from "./SideMainPanel/SideMainPanel";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Clock from "react-live-clock";

const Layout: React.FC = ({ children }: any) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSideMainMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };

  return (
      <>
        <div className="header w-full">
          <div className="logo pl-2">
            <Image
                src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
                alt="Visual Studio Code Styled Portofolio Icon"
                width={60}
                height={60}
            />
          </div>
          <ul className="header-menu">
            <li className="header-menu-link">
              <Link href="/">About</Link>
            </li>
            <li className="header-menu-link">
              <Link href="/Experience">Experience</Link>
            </li>
            <li className="header-menu-link">
              <Link href="/Skills">Skills</Link>
            </li>
            <li className="header-menu-link">
              <Link href="/Projects">Projects</Link>
            </li>
            <li className="header-menu-link">
              <Link href="/Email">Contact</Link>
            </li>
            <li className="header-menu-link">
              <Link href="/Hobbies">Hobbies</Link>
            </li>
          </ul>

          <div className="header-app-icons">
            <div className="flex flex-row items-center">
              <button
                  onClick={() => history.back()}
                  className="flex flex-col justify-center items-center p-1 m-1 rounded-full text-gray-400 transition-color hover:bg-gray-100 hover:bg-opacity-60 focus:outline-none focus:ring-2"
              >
                <svg
                    className="fill-current h-5 w-5"
                    viewBox="0 0 20 20"
                    width="20"
                    height="20"
                    style={{ fill: "white" }}
                >
                  <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                </svg>
              </button>
              <div
                  className="text-white rounded-full p-1 mr-2"
                  style={{ width: "0.75rem", height: "0.75rem", backgroundColor: "rgba(248, 113, 113, 1)" }}
              ></div>
              <div
                  className="text-white rounded-full p-1 mr-2"
                  style={{ width: "0.75rem", height: "0.75rem", backgroundColor: "rgba(251, 191, 36, 1)" }}
              ></div>
              <div
                  className="text-white rounded-full p-1 mr-5"
                  style={{ width: "0.75rem", height: "0.75rem", backgroundColor: "rgba(52, 211, 153, 1)" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="scrollbar w-full">
          <nav className={`${openSideMenu ? styles.navside : styles.navsidecollapse}`}>
            <SideMainPanel
                toggleSideMainMenu={toggleSideMainMenu}
                mainActiveSideButton={openSideMenu}
            />
            {openSideMenu && (
                <SideSecondPanel closeSideMenu={() => setOpenSideMenu(false)} />
            )}
          </nav>
          <main
              className={`${openSideMenu ? styles.mainside : styles.mainsidecollapse} scrollbar`}
          >
            {children}
          </main>
        </div>

        <div className="bottom-header pb-6 relative z-50 bg-blue-400">
          <ul className="right pt-1 text-sm">
            <li>Made in</li>
            <li>NEXT.JS</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
            <li>React</li>
          </ul>
          <ul className="left text-sm">
            {mounted && (
                <li>
                  <Clock format={"dddd, MMMM Mo, YYYY, h:mm:ss A"} ticking={true} />
                </li>
            )}
            <li>UTF-8</li>
            <li>
              <i className="fa fa-radiation-alt"></i> Port: 443
            </li>
          </ul>
        </div>
      </>
  );
};

export default Layout;
