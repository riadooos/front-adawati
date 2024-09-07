import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllSchoolsAction } from "../../../redux/slice/schools/schoolSlice";
import { getAllCategoriesAction } from "../../../redux/slice/category/categorySlice";
import LayoutAdmin from "../../common/LayoutAdmin";

const AddBox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ourBox, setOurBox] = useState({
    designationBox: "",
  });
  //---Destructuring---
  const { designationBox } = ourBox;
  //---onchange handler----
  const onChange = (e) => {
    setOurBox({ ...ourBox, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getAllSchoolsAction());
  }, [dispatch]);

  const { schools } = useSelector((state) => state?.schools?.schools);

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // les articles en checkbox
  const [selectedOptionsCheckBox, setSelectedOptionsCheckBox] = useState([]);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, [dispatch]);

  const { categories } = useSelector((state) => state?.categories.categories);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedOptionsCheckBox((prevSelectedOptions) =>
      prevSelectedOptions.includes(value)
        ? prevSelectedOptions.filter((option) => option !== value)
        : [...prevSelectedOptions, value]
    );
  };

  //---onsubmit handler----
  const onSubmit = (e) => {
    e.preventDefault();

    console.log("categories :", categories);
    console.log({
      ...ourBox,
      schoolId: selectedOption,
      articles: selectedOptionsCheckBox,
    });
    /*dispatch({
      ...ourBox,
      schoolId: selectedOption,
      articles: selectedOptionsCheckBox,
    });*/
  };
  const { isAdded, loading, error } = useSelector((state) => state?.boxes);
  useEffect(() => {
    setTimeout(() => {
      if (isAdded) {
        navigate("/boxes");
        //reload the page
        window.location.reload();
      }
    }, 3000);
  }, [isAdded]);
  return (
    <LayoutAdmin>
    <section className="py-16 xl:pb-48 bg-white overflow-hidden max-w-md mx-auto mt-10">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-md mx-auto">
          <h2 className="mb-4 text-4xl md:text-5xl text-center font-bold font-heading tracking-px-n leading-tight">
            Add New Box
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
                value={designationBox}
                onChange={onChange}
                name="designationBox"
                className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                type="text"
                placeholder="Nom du box"
              />
            </label>

            <div className="w-full max-w-xs">
              <label
                htmlFor="options"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Select an option:
              </label>
              <select
                id="options"
                value={selectedOption}
                onChange={handleChange}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {schools?.map((school, index) => (
                  <option key={index} value={school?._id}>
                    {school?.schoolName}
                  </option>
                ))}
              </select>
              {/*selectedOption && (
                <p className="mt-2 text-gray-700">
                  You selected: {selectedOption}
                </p>
              )*/}
            </div>

            {/* check box*/}

            <div className="w-full max-w-xs">
              <h2 className="block text-gray-700 text-lg font-bold mb-4">
                Select Options:
              </h2>

              {categories?.map((category, i) => (
                <>
                  <h3 key={i}>{category.categoryName}</h3>

                  {category?.articles?.map((article, index) => (
                    <div key={index} className="mb-2 inline-flex">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          value={article._id}
                          checked={selectedOptionsCheckBox.includes(
                            article._id
                          )}
                          onChange={handleCheckboxChange}
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700">
                          {article?.nameArticle}
                        </span>
                      </label>
                    </div>
                  ))}
                </>
              ))}

              {/*<div className="mt-4">
                <h3 className="text-gray-700">Selected Options:</h3>
                {selectedOptionsCheckBox.length > 0 ? (
                  <ul className="list-disc list-inside">
                    {selectedOptionsCheckBox.map((option) => (
                      <li key={option}>{option}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No options selected.</p>
                )}
              </div>*/}
            </div>

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
                Create Box
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

export default AddBox;
