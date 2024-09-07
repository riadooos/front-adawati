import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux"
import { useCart } from "react-use-cart";

export const ArticleCart = ({ article }) => {
  //const dispatch = useDispatch()
  /*const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }))
  }*/
  const { _id, imgArticle, nameArticle, refArticle, price } = article;
  const { addItem } = useCart();
  const handleAddToCart = () => {
    addItem({ id: _id, imgArticle, nameArticle, refArticle, price });
    console.log({ _id, imgArticle, nameArticle, refArticle, price });
  };
  return (
    <>
      <div className="box boxItems" id="product">
        <div>
          <Link>
            <img
              src={imgArticle}
              alt="cover"
              className="w-full h-full bg-cover mr-5"
            />
          </Link>
        </div>
        <div className="details m-4">
          <h4>{nameArticle}</h4>
          <p>{refArticle}</p>
          <p>د.ج {price}</p>

          <button onClick={handleAddToCart}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  );
};
