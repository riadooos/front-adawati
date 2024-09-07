import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticlesAction } from "../../../redux/slice/articles/articleSlice";
import LayoutAdmin from "../../common/LayoutAdmin";

const Articles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllArticlesAction());
  }, []);

  const { articles } = useSelector((state) => state.articles.articles);

  return (
    <LayoutAdmin>
      <div className="container py-8 mx-3">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="w-1/3 py-2 px-4">image</th>
                <th className="w-1/3 py-2 px-4">article</th>
                <th className="w-1/3 py-2 px-4">reference</th>
                <th className="w-1/3 py-2 px-4">category</th>
                <th className="w-1/3 py-2 px-4">marque</th>
              </tr>
            </thead>
            <tbody>
              {articles?.map((article) => (
                <tr
                  key={article?._id}
                  className="text-center border-t border-gray-200"
                >
                  <td className="py-2 px-4">
                    <img src={article?.imgArticle} alt={article?.nameArticle} />
                  </td>
                  <td className="py-2 px-4">{article?.nameArticle}</td>
                  <td className="py-2 px-4">{article?.refArticle}</td>
                  <td className="py-2 px-4">{article?.categoryId}</td>
                  <td className="py-2 px-4">{article?.marqueId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default Articles;
