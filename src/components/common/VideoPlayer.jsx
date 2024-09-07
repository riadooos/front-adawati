// src/components/VideoPlayer.js
import React from "react";
import ReactPlayer from "react-player";
import MyVideo from "../assets/video/video-adawati.mp4";

const VideoPlayer = () => {
  return (
    <>
      <section className="about py-16">
        <div className="container">
          <div className="heading text-center py-12">
            <h1 className="text-3xl font-semibold text-black my-2">
              achetez sans vous deplacez
            </h1>
            <span className="text-sm mt-2 block">
              La Solution a vos probleme de la rentrée scolaire
            </span>
            <div className="video-player-wrapper">
              <ReactPlayer
                url={MyVideo} // Chemin relatif vers la vidéo dans le dossier public
                controls
                width="100%"
                height="100%"
                auto
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPlayer;
