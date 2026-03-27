import { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import { SideSecondPanel } from "./SeondPanel/SideSecondPanel";
import { SideMainPanel } from "./SideMainPanel/SideMainPanel";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Clock from "react-live-clock";
import { useMediaQuery } from "react-responsive";

const Layout: React.FC = ({ children }: any) => {
  const [openSideMenu, setOpenSideMenu] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const router = useRouter();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile nav when route changes
  useEffect(() => {
    if (isMobile) {
      setShowMobileNav(false);
    }
  }, [router.pathname, isMobile]);

  const toggleSideMainMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const closeMobileNav = () => {
    setShowMobileNav(false);
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
          {!isMobile && (
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
          )}

          {isMobile && (
            <button
              onClick={toggleMobileNav}
              className="mobile-menu-button text-white p-2 hover:bg-gray-700 rounded"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}

          <div className="header-app-icons">
            <div className="flex flex-row items-center">
              {!isMobile && (
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
              )}
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

        {/* Mobile Navigation Overlay */}
        {isMobile && showMobileNav && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={closeMobileNav}>
            <div className="fixed left-0 top-0 h-full w-80 bg-gray-900 shadow-lg" onClick={(e) => e.stopPropagation()}>
              <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-white text-xl font-bold">Navigation</h2>
                  <button onClick={closeMobileNav} className="text-white hover:text-gray-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <nav className="space-y-2">
                  <Link href="/" onClick={closeMobileNav}>
                    <div className="flex items-center p-3 text-white hover:bg-gray-700 rounded-lg transition-colors">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      About
                    </div>
                  </Link>
                  
                  <Link href="/Experience" onClick={closeMobileNav}>
                    <div className="flex items-center p-3 text-white hover:bg-gray-700 rounded-lg transition-colors">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                      Experience
                    </div>
                  </Link>
                  
                  <Link href="/Skills" onClick={closeMobileNav}>
                    <div className="flex items-center p-3 text-white hover:bg-gray-700 rounded-lg transition-colors">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Skills
                    </div>
                  </Link>
                  
                  <Link href="/Projects" onClick={closeMobileNav}>
                    <div className="flex items-center p-3 text-white hover:bg-gray-700 rounded-lg transition-colors">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Projects
                    </div>
                  </Link>
                  
                  <Link href="/Email" onClick={closeMobileNav}>
                    <div className="flex items-center p-3 text-white hover:bg-gray-700 rounded-lg transition-colors">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact
                    </div>
                  </Link>
                  
                  <Link href="/Hobbies" onClick={closeMobileNav}>
                    <div className="flex items-center p-3 text-white hover:bg-gray-700 rounded-lg transition-colors">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Hobbies
                    </div>
                  </Link>
                  
                  <Link href="/Gaming" onClick={closeMobileNav}>
                    <div className="flex items-center p-3 text-white hover:bg-gray-700 rounded-lg transition-colors">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Gaming
                    </div>
                  </Link>
                  
                  <Link href="/Anime" onClick={closeMobileNav}>
                    <div className="flex items-center p-3 text-white hover:bg-gray-700 rounded-lg transition-colors">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Anime
                    </div>
                  </Link>
                  
                  <Link href="/Learning" onClick={closeMobileNav}>
                    <div className="flex items-center p-3 text-white hover:bg-gray-700 rounded-lg transition-colors">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Learning
                    </div>
                  </Link>
                  
                  <Link href="/Startup" onClick={closeMobileNav}>
                    <div className="flex items-center p-3 text-white hover:bg-gray-700 rounded-lg transition-colors">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Startup
                    </div>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        )}

        <div className="scrollbar w-full">
          {!isMobile && (
            <nav className={`${openSideMenu ? styles.navside : styles.navsidecollapse}`}>
              <SideMainPanel
                  toggleSideMainMenu={toggleSideMainMenu}
                  mainActiveSideButton={openSideMenu}
              />
              {openSideMenu && (
                  <SideSecondPanel closeSideMenu={() => setOpenSideMenu(false)} />
              )}
            </nav>
          )}
          <main
              className={`${!isMobile ? (openSideMenu ? styles.mainside : styles.mainsidecollapse) : 'w-full h-full overflow-auto'} scrollbar`}
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
