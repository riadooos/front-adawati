import React from "react";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { GiEvilBook, GiWorld } from "react-icons/gi";
import ImgSoutien from "../components/assets/images/Soutien-Scolaire-2.jpg";
import ImgSoutien2 from "../components/assets/images/Cours-à-domicile.jpg";

export const Instructor = () => {
  return (
    <>
      <section className="instructor mb-16">
        <div className="container">
          <div className="heading py-12 text-center w-2/3 m-auto md:w-full">
            <h1 className="text-3xl font-semibold text-black">
              Notre Platform est Collaborative
            </h1>
            <span className="text-[14px] mt-2 block">
              Les plateformes collaboratives sont des outils numériques
              essentiels pour faciliter le travail en équipe à distance en temps
              réel. une variété de fonctionnalités, telles que le partage de
              documents, de tutoriels ou de cours spécialisé peuvent aidé à
              l'aquisition d'un maximum de savoir pour l'éléve ou l'étudient.
            </span>
          </div>
          <div className="content grid grid-cols-2 gap-5 md:grid-cols-1">
            <div className="images rounded-lg relative overflow-hidden h-72 w-ful before:bg-backbg before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10">
              <img
                src={ImgSoutien}
                alt={ImgSoutien}
                className="rounded-t-lg object-cover w-full h-72"
              />
              <div className="categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center">
                <h2 className="text-3xl text-white font-semibold">
                  Proposez vos cours et Tutos
                </h2>
                <button className="text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white">
                  Rejoignez notre équipe
                </button>
              </div>
            </div>
            <div className="images rounded-lg relative overflow-hidden h-72 w-ful before:bg-backbg before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10">
              <img
                src={ImgSoutien2}
                alt={ImgSoutien2}
                className="rounded-t-lg object-cover w-full h-72 relative"
              />
              <div className="categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center">
                <h2 className="text-3xl text-white font-semibold">
                  Touchez l'excellence grace aux cours de soutiens
                </h2>
                <button className="text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white">
                  Commencer les cours
                </button>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="heading py-12 text-center w-2/3 m-auto md:w-full">
              <h1 className="text-3xl font-semibold text-black">
                Nos sommes presents a tous moment a vos cotés
              </h1>
              <span className="text-[14px] mt-2 block">
                Vous n'êtes pas obligé de lutter seul, vous avez notre aide et
                soutien.
              </span>
            </div>
            <div className="content grid grid-cols-4 gap-5 md:grid-cols-2">
              <InstructorCard
                color="text-red-500"
                icon={<FaUsers size={40} />}
                title="630"
                desc="Utilisateurs"
              />
              <InstructorCard
                color="text-purple-500"
                icon={<FaGraduationCap size={40} />}
                title="40"
                desc="Ecoles Parteners"
              />

              <InstructorCard
                color="text-orange-500"
                icon={<GiEvilBook size={40} />}
                title="118"
                desc="Tutoriels proposés"
              />
              <InstructorCard
                color="text-indigo-500"
                icon={<GiWorld size={40} />}
                title="5"
                desc="Wilayas Couvertes"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export const InstructorCard = (props) => {
  return (
    <div className={`box p-5 py-5 rounded-md`}>
      <div className={`${props.color}`}>{props.icon}</div>
      <div className="text mt-2">
        <h4 className="text-lg font-semibold text-black">{props.title}</h4>
        <p className="text-[15px]">{props.desc}</p>
      </div>
    </div>
  );
};
