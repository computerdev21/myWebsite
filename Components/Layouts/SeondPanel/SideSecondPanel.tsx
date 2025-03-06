import React, { useEffect, useState } from "react";
import { DownIcon, RightIcon } from "../../SVG/IconsSVG";
import SidePanelSubLink from "./SidePanelSubLink";
import { useRouter } from "next/router";
import { projectsdata } from "../../JSON/projectsdata";

// Helper function to slugify project names
const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");

interface IProps {
  closeSideMenu: () => void;
}

export const SideSecondPanel: React.FC<IProps> = ({ closeSideMenu }) => {
  const [aboutClose, setAboutClose] = useState(false);
  const [projectsClose, setProjectsClose] = useState(false);
  const [contactClose, setContactClose] = useState(false);
  const [miscClose, setMiscClose] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCurrentSubLink, setActiveCurrentSubLink] = useState("");

  const router = useRouter();
  const projects = projectsdata();

  // Utility function for navigation and closing menu on mobile
  const navigate = (path: string) => {
    router.push(path);
    if (isMobile) closeSideMenu();
  };

  // Check active link and screen size on route change
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 943);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const currentSubLink = router.pathname.split("/").pop();
    setActiveCurrentSubLink(currentSubLink || "index.html");

    return () => window.removeEventListener("resize", handleResize);
  }, [router.pathname]);

  const renderLink = (
      path: string,
      name: string,
      iconClass: string
  ) => (
      <li
          onClick={() => navigate(path)}
          className={`smallSide ${activeCurrentSubLink === name ? "active" : ""}`}
      >
        <SidePanelSubLink name={name} link={path} icon={<span className={iconClass}></span>} />
      </li>
  );

  return (
      <div className="menu-option overflow-hidden">
        <h5 className="myweight">EXPLORER</h5>
        <div className="mb-5 pb-5 z-1 scrollbar" style={{ height: "84%", overflowY: "scroll" }}>

          {/* About Section */}
          <div className="menu-drop">
            <div className="box-click" onClick={() => setAboutClose(!aboutClose)}>
              <div className="flex pl-1 cursor-pointer">
                <div className="myweight flex-min topPadd">
                  {!aboutClose ? <DownIcon /> : <RightIcon />}
                </div>
                <span className="myweight flex-auto">About</span>
              </div>
            </div>
            {!aboutClose && (
                <div className="show-pre">
                  <ul>
                    {renderLink("/", "index.html", "icons8-html-5")}
                    {renderLink("/Experience", "experience.css", "icons8-css3")}
                    {renderLink("/Skills", "skills.js", "icons8-javascript")}
                    {renderLink("/Projects", "projects.ts", "icons8-typescript")}
                  </ul>
                </div>
            )}
          </div>

          {/* Projects Section */}
          <div className="menu-drop pt-1">
            <div className="box-click" onClick={() => setProjectsClose(!projectsClose)}>
              <div className="flex pl-1 cursor-pointer">
                <div className="myweight flex-min topPadd">
                  {!projectsClose ? <DownIcon /> : <RightIcon />}
                </div>
                <span className="myweight flex-auto">Side Projects</span>
              </div>
            </div>
            {!projectsClose && (
                <div className="show-pre">
                  <ul>
                    {projects.map((project: any) => {
                      const slug = slugify(project.name);
                      return renderLink(`/Projects/${slug}`, slug, "icons8-react");
                    })}
                  </ul>
                </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="menu-drop pt-1">
            <div className="box-click" onClick={() => setContactClose(!contactClose)}>
              <div className="flex pl-1 cursor-pointer">
                <div className="myweight flex-min topPadd">
                  {!contactClose ? <DownIcon /> : <RightIcon />}
                </div>
                <span className="myweight flex-auto">Contact</span>
              </div>
            </div>
            {!contactClose && (
                <div className="show-pre">
                  <ul>
                    {renderLink("/Email", "Email", "icons8-gmail")}
                  </ul>
                </div>
            )}
          </div>

          {/* Misc Section */}
          <div className="menu-drop pt-1 pb-12">
            <div className="box-click" onClick={() => setMiscClose(!miscClose)}>
              <div className="flex pl-1 cursor-pointer">
                <div className="myweight flex-min topPadd">
                  {!miscClose ? <DownIcon /> : <RightIcon />}
                </div>
                <span className="myweight flex-auto">Misc</span>
              </div>
            </div>
            {!miscClose && (
                <div className="show-pre">
                  <ul>
                    {renderLink("/Hobbies", "Hobbies", "icons8-cplusplus")}
                    {renderLink("/Blogs", "Blogs", "icons8-typescript")}
                    {renderLink("/Gaming", "Gaming", "icons8-c-sharp")}
                    {renderLink("/Anime", "Anime", "icons8-react")}
                    {renderLink("/Learning", "Learning", "icons8-angularjs")}
                    {renderLink("/Startup", "Startup", "icons8-nodejs")}
                  </ul>
                </div>
            )}
          </div>

        </div>

        {!isMobile && (
            <ul className="bottom-links pl-2">
              <li className="border-b border-solid border-gray-500">
                <span className="text-gray-400">All Rights Reserved.</span>
              </li>
              <li>
                <span className="text-gray-400">Ⓒ Copyright 2023.</span>
              </li>
            </ul>
        )}
      </div>
  );
};

export default SideSecondPanel;
