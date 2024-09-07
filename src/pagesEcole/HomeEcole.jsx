import React, { useEffect } from "react";
import LayoutEcole from "./commonEcole/LayoutEcole";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticlesAction } from "../redux/slice/articleSlice";
import { ArticleCart } from "./Articles/ArticleCart";
import "./Articles/article.css";

const HomeEcole = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArticlesAction());
  }, [dispatch]);
  const { articles } = useSelector((state) => state?.articles?.articles);
  function addPriceToArticles(articles, price) {
    return articles?.map((article) => {
      return {
        ...article, // Copie des propriétés existantes de l'objet produit
        price: price, // Ajout de la propriété `price`
      };
    });
  }
  const newArticles = addPriceToArticles(articles, 20);
  console.log(newArticles);
  return (
    <LayoutEcole>
      <div className="grid lg:grid-cols-12 gap-4 m-4 ">
        <div className="min-h-[150px] bg-[#FB9D42]  lg:col-span-4 rounded-lg">
          <div className="flex justify-between text-2xl text-white m-4">
            <h2>Enseignement Primaire</h2>
            <h2>التعليم الإبتدائي</h2>
          </div>
        </div>
        <div className="min-h-[150px] bg-[#8997F1]  lg:col-span-4 rounded-lg">
          {" "}
          <div className="flex justify-between text-2xl text-white m-4">
            <h2>Enseignement Primaire</h2>
            <h2> التعليم المتوسط</h2>
          </div>
        </div>
        <div className="min-h-[150px] bg-[#6CBC6B]  lg:col-span-4 rounded-lg">
          <div className="flex justify-between text-xl text-white m-4">
            <h2>Enseignement Primaire</h2>
            <h2> التعليم الثانوي</h2>
          </div>
        </div>
      </div>
      <section className="product w-full">
        <div className="grid lg:grid-cols-3 gap-12">
          {newArticles?.map((article) => (
            <ArticleCart key={article._id} article={article} />
          ))}
        </div>
      </section>
      {/*<div>{JSON.stringify(articles)}</div>*/}
    </LayoutEcole>
  );
};

export default HomeEcole;
