import { NextPage } from "next";
import Link from "next/link";
import { Scrollbars } from "react-custom-scrollbars";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";
import Image from "next/image";

const hobbies = [
  {
    name: "Blogging",
    href: "/Blogs",
    img: "https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-blogging-free-time-wanicon-lineal-color-wanicon.png",
  },
  {
    name: "Gaming",
    href: "/Gaming",
    img: "https://img.icons8.com/ios/50/000000/controller.png",
  },
  {
    name: "Animes",
    href: "/Anime",
    img: "https://img.icons8.com/ios/50/000000/naruto.png",
  },
  {
    name: "Learning",
    href: "/Learning",
    img: "https://img.icons8.com/ios/50/000000/learning.png",
  },
  {
    name: "StartUp",
    href: "/Startup",
    img: "https://img.icons8.com/ios/50/000000/rocket--v1.png",
  },
];

const Hobbies: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });
  return (
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200} universal>
        <Head>
          <title>Hobbies</title>
          <meta name="description" content="What I like to do the most in my spare time." />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://www.rajsavaliya.com" />
          <meta property="og:title" content="Hobbies" />
          <meta property="og:url" content="https://www.rajsavaliya.com" />
          <meta property="og:image" content="/mainthumbnail.PNG" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <div className={isTabletOrMobile ? "p-3" : ""}>
          <main className="backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
            <div className="p-6 lg:p-12">
              <h1 className="text-3xl lg:text-5xl pb-2 text-indigo-500 font-bold leading-tight">
                Hobbies
              </h1>
              <div className="text-gray-400 dark:text-gray-400 mb-5">
                List of stuff I like to do in my spare time.
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {hobbies.map((hobby) => (
                    <Link key={hobby.name} href={hobby.href} passHref>
                      <div className="cursor-pointer block p-1 rounded-md transition-colors hover:bg-gray-50 hover:bg-opacity-30">
                        <div className="bg-white rounded-md mb-2 flex justify-center items-center">
                          <Image
                              className="rounded-md p-3"
                              src={hobby.img}
                              alt={`${hobby.name} icon`}
                              width={80}
                              height={80}
                          />
                        </div>
                        <h2 className="text-white text-center font-semibold">
                          {hobby.name}
                        </h2>
                      </div>
                    </Link>
                ))}
              </div>
            </div>
          </main>
        </div>
      </Scrollbars>
  );
};

export default Hobbies;
