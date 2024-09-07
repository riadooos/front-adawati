import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createArticleAction } from "../../../redux/slice/articles/articleSlice";
import { getAllMarquesAction } from "../../../redux/slice/marque/marqueSlice";
import { getAllCategoriesAction } from "../../../redux/slice/category/categorySlice";
import LayoutAdmin from "../../common/LayoutAdmin";

const AddArticle = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllMarquesAction());
  }, [dispatch]);

  const navigate = useNavigate();
  const [ourArticle, setOurArticle] = useState({
    nameArticle: "",
    refArticle: "",
    categoryId: "",
    marqueId: "",
    imgArticle: null,
  });
  //---Destructuring---
  const { nameArticle, refArticle, marqueId, categoryId } = ourArticle;
  //---onchange handler----
  const onChange = (e) => {
    setOurArticle({ ...ourArticle, [e.target.name]: e.target.value });
  };
  //! Handle image change
  const handleImageChange = (e) => {
    setOurArticle({ ...ourArticle, imgArticle: e.target.files[0] });
  };
  //---onsubmit handler----

  const { marques } = useSelector((state) => state?.marques.marques);
  const { categories } = useSelector((state) => state?.categories.categories);

  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(ourArticle);
    dispatch(createArticleAction(ourArticle));
  };

  const { success, loading, error } = useSelector((state) => state?.articles);
  useEffect(() => {
    setTimeout(() => {
      if (success) {
        navigate("/articles");
        //reload the page
        window.location.reload();
      }
    }, 3000);
  }, [success]);

  return (
    <LayoutAdmin>
      <section className="py-16 xl:pb-48 bg-white overflow-hidden max-w-md mx-auto mt-10">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-md mx-auto">
            <h2 className="mb-4 text-4xl md:text-5xl text-center font-bold font-heading tracking-px-n leading-tight">
              Add New Article
            </h2>
            <p className="mb-12 font-medium text-lg text-gray-600 leading-normal">
              Create an account(Project) to start tracking your transactions
            </p>
            {/* error */}
            {error && (
              <p className="mb-3 font-medium text-lg text-red-600 leading-normal">
                {error}
              </p>
            )}
            <form onSubmit={onSubmit}>
              <label className="block mb-5">
                <input
                  name="nameArticle"
                  value={nameArticle}
                  type="text"
                  onChange={onChange}
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="designation article"
                />
              </label>

              <label className="block mb-5">
                <input
                  name="refArticle"
                  value={refArticle}
                  type="text"
                  onChange={onChange}
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="reference article"
                />
              </label>
              <label className="block mb-5">
                <select
                  name="marqueId"
                  value={marqueId}
                  onChange={onChange}
                  className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                >
                  <option>-- Select Marque --</option>
                  {marques?.map((marque) => (
                    <option key={marque?._id} value={marque?._id}>
                      {marque?.marqueName}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block mb-5">
                <select
                  name="categoryId"
                  value={categoryId}
                  onChange={onChange}
                  className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                >
                  <option>-- Select Category --</option>
                  {categories?.map((category) => (
                    <option key={category?._id} value={category?._id}>
                      {category?.categoryName}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mb-4 flex flex-col w-full">
                <span className="mb-1 text-coolGray-800 font-medium">
                  Image-Article
                </span>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="py-3 px-3 leading-5 w-full text-coolGray-400 font-normal border border-coolGray-200 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg shadow-sm"
                />
              </label>
              {loading ? (
                <button
                  disabled
                  className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-gray-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                >
                  loading...
                </button>
              ) : (
                <button
                  type="submit"
                  className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                >
                  Create Article
                </button>
              )}
              {/* <p className="font-medium">
            <span>Already have an account?</span>
            <a className="text-indigo-600 hover:text-indigo-700" href="#">
              Back To Account
            </a>
          </p> */}
            </form>
          </div>
        </div>
      </section>
    </LayoutAdmin>
  );
};

export default AddArticle;
