// Experience.tsx
import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/legacy/image";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";

const MyWork: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  const timelineElements = [
    {
      company: "NEVO Network",
      location: "Toronto, ON",
      role: "Full Stack Blockchain Developer",
      date: "June 2024 – Present",
      image: "/nevo.png",
      points: [
        "Led the development of a decentralized exchange on Binance Smart Chain with secure smart contracts and account abstraction.",
        "Managed scalable AWS infrastructure using Kubernetes, Docker, and automation tools.",
        "Built secure REST APIs and optimized database performance for scalability.",
      ],
      techStack:
          "Solidity, JavaScript, Node.js, React, Kubernetes, AWS, Docker, ABI, REST APIs",
    },
    {
      company: "FEOOH",
      location: "Mississauga, ON",
      role: "Full Stack Developer",
      date: "August 2023 – April 2024",
      image: "/feooh.png",
      points: [
        "Developed ad dashboard using Laravel, Vue.js, Inertia.js.",
        "Integrated 3DS PAAY for secure card authentication and Konnektive CRM APIs.",
        "Omnisend integration for transactional emails and SMS workflows.",
      ],
      techStack: "Laravel, Vue.js, Inertia.js, Java, Omnisend, 3DS, Konnektive",
    },
    {
      company: "PACTREON",
      location: "Delhi, IN",
      role: "Full Stack Developer",
      date: "September 2021 – June 2023",
      image: "/pactreon.png",
      points: [
        "Built workflow dashboards using Laravel and Vue.js.",
        "Implemented 3DS token support and CRM API integrations.",
        "Streamlined email/SMS flows using Omnisend and API tracking.",
      ],
      techStack: "Laravel, Vue.js, Inertia.js, Omnisend, CRM APIs",
    },
    {
      company: "Merc Rides",
      location: "Remote",
      role: "Android Developer",
      date: "2021",
      image: "/merc.png",
      points: [
        "Built Android app for test ride bookings at global marine events.",
        "Integrated Spring Boot, WebSockets, Firebase, Twilio, SendGrid.",
        "Implemented heuristic logic with Knapsack algorithm for scheduling.",
      ],
      techStack:
          "Android Native, Spring Boot, Firebase, Twilio, SendGrid, PostgreSQL, Heroku",
    },
    {
      company: "Ultras The Game",
      location: "Remote",
      role: "Gaming QA Engineer",
      date: "2020 – 2021",
      image: "/ultras.png",
      points: [
        "Tested football-based game built with Golang & Nakama.",
        "Wrote test plans, tracked bugs, analyzed bottlenecks across devices.",
        "Worked closely with devs to ensure quality gameplay on Android/iOS.",
      ],
      techStack: "Golang, Nakama, QA Testing, Game Performance Analysis",
    },
    {
      company: "The Startup Scholars",
      location: "Delhi, IN",
      role: "Web Development Intern",
      date: "May 2020 – Jan 2021",
      image: "/startup.png",
      points: [
        "Built responsive UI with React/Vue, deployed via Docker.",
        "Created RESTful APIs with external system integration (e.g., Netsuite).",
        "Maintained CI/CD pipelines, wrote technical docs and optimized performance.",
      ],
      techStack: "React, Vue.js, Docker, REST APIs, Netsuite, CI/CD",
    },
    {
      company: "Retcons Technology Pvt Ltd",
      location: "Delhi, IN",
      role: "Frontend Development Intern",
      date: "May 2019 – Nov 2019",
      image: "/retcons.png",
      points: [
        "Built HTML/JavaScript email templates for campaigns.",
        "Used AWS & Azure for app deployment and scalability.",
        "Participated in code reviews, documentation, and best practices.",
      ],
      techStack: "HTML, JavaScript, AWS, Azure, Email Templates",
    },
  ];


  return (
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200} universal={true}>
        <div>
          <Head>
            <title>Professional Experience</title>
            <meta name="description" content="Professional Experience" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Professional Experience" />
            <link rel="canonical" href="https://crowsandcode.xyz" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://crowsandcode.xyz" />
            <meta property="og:site_name" content="Dev Chetal" />
            <meta property="og:image" content="/mainthumbnail.PNG" />
            <meta property="og:image:width" content="1040" />
            <meta property="og:image:height" content="600" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>

          <div className={`pt-5 ${!isTabletOrMobile ? "p-3 pl-5 pb-60" : "pb-60"} text-center`}>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block lg:text-5xl font-bold leading-tight text-white">Work</span>
              <span className="block pt-3 text-indigo-500 text-2xl">Industry Experience</span>
            </h2>
            <div className="pt-3 w-full timeline">
              <VerticalTimeline>
                {timelineElements.map((item, idx) => (
                    <VerticalTimelineElement
                        key={idx}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                          background: "linear-gradient(to right, #4A00E0, #8E2DE2)",
                          color: "#fff",
                        }}
                        contentArrowStyle={{ borderRight: "7px solid #4A00E0" }}
                        date={item.date}
                        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                        icon={
                          <Image
                              src={item.image}
                              width="500"
                              height="500"
                              className="rounded-full"
                              alt={item.company}
                          />
                        }
                    >
                      <h3 className="vertical-timeline-element-title font-bold">{item.role}</h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        {item.company}, {item.location}
                      </h4>
                      <div className="text-left pt-2 space-y-1">
                        {item.points.map((pt, index) => (
                            <p key={index}>• {pt}</p>
                        ))}
                        <p className="pt-2 text-sm italic">• Tech Stack: {item.techStack}</p>
                      </div>
                    </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </Scrollbars>
  );
};

export default MyWork;
