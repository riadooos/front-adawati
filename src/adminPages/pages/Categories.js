import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../../../redux/slice/category/categorySlice";
import { Link } from "react-router-dom";
import LayoutAdmin from "../../common/LayoutAdmin";

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, []);
  const { categories } = useSelector((state) => state?.categories?.categories);

  return (
    <LayoutAdmin>
      {categories?.map((category) => (
        <div className="max-w-md mx-auto mt-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex flex-col">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={category?.imgCategory}
                alt="Modern building architecture"
              />
            </div>
            <div className="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {category?.categoryName}
              </div>
              <Link
                to="#"
                class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Incredible accommodation for your team
              </Link>
              <p className="mt-2 text-slate-500">
                Looking to take your team away on a retreat to enjoy awesome
                food and take in some sunshine? We have a list of places to do
                just that.
              </p>
            </div>
          </div>
        </div>
      ))}
    </LayoutAdmin>
  );
};

export default Categories;
