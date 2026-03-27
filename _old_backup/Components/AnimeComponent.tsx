import React, { useEffect, useRef, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { animedata } from "./JSON/animedata";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

const AnimeComponent: React.FC = () => {
  const [play, setPlay] = useState(true);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  const player = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (player.current) {
      player.current.play();
    }
  }, [player]);

  const managePlayer = (shouldPlay: boolean) => {
    if (player.current) {
      shouldPlay ? player.current.play() : player.current.pause();
    }
    setPlay(shouldPlay);
  };

  return (
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200} universal>
        <article
            className={`scrollbar pb-20 w-100 ${
                isTabletOrMobile ? "bg-appanimemob" : "bg-appanime"
            } text-left`}
        >
          <div className="flex flex-row rounded-xl overflow-hidden shadow-lg">
            <div className="animeplayer pr-3 pt-5">
              {play ? (
                  <Image
                      src="https://img.icons8.com/flat-round/64/000000/pause--v1.png"
                      width={40}
                      height={40}
                      className="cursor-pointer"
                      onClick={() => managePlayer(false)}
                      alt="Pause"
                  />
              ) : (
                  <Image
                      src="https://img.icons8.com/flat-round/64/000000/play--v1.png"
                      width={40}
                      height={40}
                      className="cursor-pointer"
                      onClick={() => managePlayer(true)}
                      alt="Play"
                  />
              )}
            </div>
            <section
                className={`w-full ${
                    isTabletOrMobile ? "m-4 p-3 mt-40" : "m-20 p-4"
                } bg-gray-700 backdrop-filter backdrop-blur-md bg-opacity-20 rounded-lg shadow-lg`}
            >
              <div className="pb-5">
                <h1 className="font-bold text-3xl md:text-3xl lg:text-5xl font-heading text-white">
                  Anime
                </h1>
                <audio autoPlay loop ref={player}>
                  <source src="/NARUTORING.mp3" type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
                <h2 className="text-lg mt-3 font-medium text-gray-100">
                  Watching Anime is also one of the things that I like to do in my spare time.
                </h2>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6">
                {animedata()?.map((anime, idx) => {
                  const title = anime.title || anime.name || `Anime-${idx}`;
                  const image = anime.img || anime.gif;

                  return (
                      <div
                          key={title}
                          className="w-full bg-red-900 backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center"
                      >
                        <div className="mb-8">
                          <Image
                              className="object-center object-cover rounded-full"
                              src={image}
                              alt={title}
                              width={144}
                              height={144}
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-xl text-white font-bold mb-2">{title}</p>
                          {isTabletOrMobile && (
                              <p className="text-base text-gray-100 font-normal">
                                {anime.subtitle}
                              </p>
                          )}
                        </div>
                      </div>
                  );
                })}

              </div>
            </section>
          </div>
        </article>
      </Scrollbars>
  );
};

export default AnimeComponent;
