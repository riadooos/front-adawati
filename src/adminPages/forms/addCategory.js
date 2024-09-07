import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCategoryAction } from "../../../redux/slice/category/categorySlice";
import LayoutAdmin from "../../common/LayoutAdmin";

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ourCategory, setOurCategory] = useState({
    categoryName: "",
    imgCategory: null,
  });
  //---Destructuring---
  const { categoryName } = ourCategory;
  //---onchange handler----
  const onChange = (e) => {
    setOurCategory({ ...ourCategory, [e.target.name]: e.target.value });
  };
  //! Handle image change
  const handleImageChange = (e) => {
    setOurCategory({ ...ourCategory, imgCategory: e.target.files[0] });
  };

  const { success, loading, error } = useSelector((state) => state?.categories);
  //---onsubmit handler----
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(ourCategory);
    dispatch(createCategoryAction(ourCategory));
  };
  useEffect(() => {
    setTimeout(() => {
      if (success) {
        navigate("/categories");
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
              Add New Category
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
                  value={categoryName}
                  onChange={onChange}
                  name="categoryName"
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  id="categoryName"
                  type="text"
                  placeholder="Category"
                />
              </label>

              <label className="mb-4 flex flex-col w-full">
                <span className="mb-1 text-coolGray-800 font-medium">
                  Image - category
                </span>
                <input
                  className="py-3 px-3 leading-5 w-full text-coolGray-400 font-normal border border-coolGray-200 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg shadow-sm"
                  type="file"
                  name="imgCategory"
                  onChange={handleImageChange}
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
                  Create Category
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

export default AddCategory;
