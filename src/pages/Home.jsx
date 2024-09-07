import React from "react";
import { About } from "./About";
import { Instructor } from "./Instructor";
import VideoPlayer from "../components/common/VideoPlayer";
import Box from "../components/assets/images/box.png";

export const Home = () => {
  return (
    <>
      <HomeContent />
      <VideoPlayer />
      <About />
      <Instructor />
    </>
  );
};
export const HomeContent = () => {
  return (
    <>
      <section className="bg-secondary py-2 h-[92vh] md:h-full">
        <div className="container">
          <div className="flex items-center justify-center md:flex-col">
            <div className="left w-1/2 text-black md:w-full">
              <h1 className="text-4xl leading-tight text-black font-semibold">
                Préparez-vous pour la rentrée 2024 <br />
              </h1>
              <h3 className="text-lg mt-3">
                Plus de 200 articles scolaires de haute qualité! pour satisfaire
                tout vos besoins.
              </h3>
              <span className="text-[14px]">
                de grandes marques au meilleur prix
              </span>
            </div>
            <div className="right w-1/2 md:w-full relative">
              <div className="images relative">
                <div className="img h-[65vh] w-full">
                  <img
                    src={Box}
                    alt="box"
                    className="h-full w-full object-contain z-20 relative"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
