import React from "react";
//import aboutImg from "../components/assets/images/about.jpg";
import teamWork from "../components/assets/images/teamWork.webp";
//import aboutImgBanner from "../components/assets/images/about-banner.jpg";
//import imgs from "../components/assets/images/join1.png";
import { FaBook, FaToolbox, FaTrophy } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";

export const About = () => {
  return (
    <>
      <section className="about py-16">
        <div className="container">
          <div className="heading text-center py-12">
            <h1 className="text-3xl font-semibold text-black">
              Pourquoi Utilisé Nos Service
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-5 md:grid-cols-2">
            <AboutCard
              color="bg-[#DD246E]"
              icon={<FaToolbox size={50} />}
              title="Articles Scolaires"
              desc="Plus de 200 fournitures scolaires sont conçues pour répondre à tous vos besoins"
            />
            <AboutCard
              color="bg-[#2D69F0]"
              icon={<FaBook size={50} />}
              title="des Cours en ligne pour touts les ages et tous les niveau"
              desc="Des outils pedagogique a votre disposition pour une meilleur prise en charge de votre enfant"
            />
            <AboutCard
              color="bg-[#8007E6]"
              icon={<FaTrophy size={50} />}
              title="Quizs et Concours pour les differents paliers scolaires"
              desc="Pour un suivi optimal du niveau de votre enfant, Adawati vous donne accées a des tests de niveau selon les moyens de votre enfant"
            />
            <AboutCard
              color="bg-[#0CAE74]"
              icon={<BsFillCreditCard2FrontFill size={50} />}
              title="Produits de divertissement et Accessoires"
              desc="Des lots de jouets, d'accessoires ainsi que de produits electronique seront bientot mise en vente sur notre platform, grace au payement par notre carte prepayer  ADAWATI ELECTRONIQUE "
            />
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  );
};
export const AboutCard = (props) => {
  return (
    <div
      className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}
    >
      <div className="icon">{props.icon}</div>
      <div className="text mt-5">
        <h4 className="text-lg font-semibold my-3">{props.title}</h4>
        <p className="text-sm">{props.desc}</p>
      </div>
    </div>
  );
};

export const AboutContent = () => {
  return (
    <section className="mb-16">
      <div className="container flex md:flex-col">
        <div className="left w-1/3 md:w-full mr-8 md:mr-0 relative">
          <img src={teamWork} alt="aboutImg" className=" rounded-xl" />
          {/*<img
            src={aboutImgBanner}
            alt="aboutImg"
            className="rounded-xl absolute -bottom-14 -left-24 h-56 md:left-80"
          />*/}
          {/* <div className="img-group ml-24 mt-3">
            <img src={imgs} alt="" />
            <span className="text-[14px]">
              Join over <label className="text-black text-sm">4,000+</label>{" "}
              students
            </span>
          </div>*/}
        </div>
        <div className="right w-2/3 md:w-full md:mt-16">
          <div className="heading w-4/5 md:w-full">
            <h1 className="text-3xl font-semibold text-black">
              Une équipe éxpérimenté et Motivé pour vous accompagnée
            </h1>
            <span className="text-sm mt-2 block leading-6">
              {" "}
              Notre équipe se compose de professionnels hautement qualifiés et
              passionnés, prêts à mettre leur expertise à votre service. Forts
              de nombreuses années d'expérience dans notre domaine, nous nous
              engageons à fournir des solutions sur mesure qui répondent
              parfaitement à vos besoins. Notre motivation à atteindre
              l'excellence se reflète dans chaque projet que nous entreprenons,
              assurant ainsi votre satisfaction totale. Avec nous à vos côtés,
              vous bénéficierez d'un accompagnement personnalisé et d'un
              partenariat de confiance, visant à réaliser vos objectifs avec
              succès.
            </span>
            <ul className="my-5">
              <li className="text-sm flex items-center gap-5">
                <AiOutlineCheck className="text-green-500" /> Compétences et
                Expertise
              </li>
              <li className="text-sm flex items-center gap-5 my-2">
                <AiOutlineCheck className="text-green-500" />
                Engagement et Motivation
              </li>
              <li className="text-sm flex items-center gap-5">
                <AiOutlineCheck className="text-green-500" />
                Communication et Collaboration
              </li>
            </ul>
            {/*<button className="px-5 py-2 border border-gray-300 rounded-md text-sm">
              Apply Now
            </button>*/}
          </div>
        </div>
      </div>
    </section>
  );
};
