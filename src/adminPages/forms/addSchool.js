import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import Select from "react-dropdown-select";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useNavigate } from "react-router-dom";
import { createSchoolAction } from "../../../redux/slice/schools/schoolSlice";
import LayoutAdmin from "../../common/LayoutAdmin";

//animated components for react-select
const animatedComponents = makeAnimated();

const AddSchool = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // types school
  const types = ["Creche", "Primaire", "CEM", "Lycee", "Autre"];
  const [typeOption, setTypeOption] = useState([]);
  const handleTypeChange = (types) => {
    setTypeOption(types);
  };
  //converted types
  const typeOptionsCoverted = types?.map((type) => {
    return {
      value: type,
      label: type,
    };
  });
  // fin gestion des types d'ecoles

  // gestion des phones
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  //const [phoneNumbers, setPhoneNumbers] = useState([{ number: "" }]);

  const handleInputChange = (index, event) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index] = event.target.value;
    setPhoneNumbers(newPhoneNumbers);
  };
  /*const handleInputChange = (index, event) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index].number = event.target.value;
    setPhoneNumbers(newPhoneNumbers);
  };*/

  const handleAddPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, ""]);
  };

  const handleRemovePhoneNumber = (index) => {
    const newPhoneNumbers = phoneNumbers.filter((_, i) => i !== index);
    setPhoneNumbers(newPhoneNumbers);
  };
  // fin gestion des phones
  const [ourSchool, setOurSchool] = useState({
    schoolName: "",
    password: "",
    nombreEleves: "",
    wilaya: "",
    commune: "",
    address: "",
    email: "",
    webSite: "",
    geolocalisation: "",
    schoolLogo: null,
    codeParent: "",
  });

  const {
    schoolName,
    password,
    nombreEleves,
    wilaya,
    commune,
    address,
    email,
    webSite,
    geolocalisation,
    codeParent,
  } = ourSchool;

  //---onchange handler----
  const onChange = (e) => {
    setOurSchool({ ...ourSchool, [e.target.name]: e.target.value });
  };

  /* //! Handle image change
  const handleImageChange = (e) => {
    setOurSchool({ ...ourSchool, schoolLogo: e.target.files[0] });
  };*/

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...ourSchool,
      typesSchool: typeOption?.map((type) => type?.label),
      phones: phoneNumbers,
    });
    dispatch(
      createSchoolAction({
        ...ourSchool,
        typesSchool: typeOption?.map((type) => type?.label),
        phones: phoneNumbers,
      })
    );
  };
  const { loading, error, isAdded } = useSelector((state) => state?.schools);
  console.log(isAdded);
  useEffect(() => {
    setTimeout(() => {
      if (isAdded) {
        navigate("/schools");
        //reload the page
        window.location.reload();
      }
    }, 20000);
  }, [isAdded]);
  return (
    <LayoutAdmin>
      <section className="py-16 xl:pb-48 bg-white overflow-hidden max-w-md mx-auto mt-10">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-md mx-auto">
            <h2 className="mb-4 text-4xl md:text-5xl text-center font-bold font-heading tracking-px-n leading-tight">
              Add New School
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
                  name="schoolName"
                  value={schoolName}
                  type="text"
                  onChange={onChange}
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="nom école"
                />
              </label>
              <label className="block mb-5">
                <input
                  name="password"
                  value={password}
                  type="text"
                  onChange={onChange}
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="password"
                />
              </label>
              <label className="block mb-5">
                <input
                  name="nombreEleves"
                  value={nombreEleves}
                  type="number"
                  onChange={onChange}
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="nombre d'Eleves"
                />
              </label>
              <label className="block mb-5">
                <input
                  name="wilaya"
                  value={wilaya}
                  type="text"
                  onChange={onChange}
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="wilaya"
                />
              </label>
              <label className="block mb-5">
                <input
                  name="commune"
                  value={commune}
                  type="text"
                  onChange={onChange}
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="commune"
                />
              </label>
              <label className="block mb-5">
                <input
                  name="address"
                  value={address}
                  type="text"
                  onChange={onChange}
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="address"
                />
              </label>
              <label className="block mb-5">
                <input
                  name="email"
                  value={email}
                  type="text"
                  onChange={onChange}
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="email"
                />
              </label>
              <label className="block mb-5">
                <input
                  name="webSite"
                  value={webSite}
                  type="text"
                  onChange={onChange}
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="webSite"
                />
              </label>
              <label className="block mb-5">
                <input
                  name="geolocalisation"
                  value={geolocalisation}
                  type="text"
                  onChange={onChange}
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="geolocalisation"
                />
              </label>
              <label className="block mb-5">
                <input
                  name="codeParent"
                  value={codeParent}
                  type="text"
                  onChange={onChange}
                  className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  placeholder="codeParent"
                />
              </label>
              <h2 className="text-2xl font-bold mb-4">Phone Numbers</h2>
              {phoneNumbers.map((phoneNumber, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number {index + 1}
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      //value={phoneNumber.number}
                      value={phoneNumber}
                      onChange={(event) => handleInputChange(index, event)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {phoneNumbers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemovePhoneNumber(index)}
                        className="ml-2 px-3 py-2 bg-red-500 text-white rounded-md"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddPhoneNumber}
                className="mb-4 px-3 py-2 bg-blue-500 text-white rounded-md"
              >
                Add Phone Number
              </button>
              {/* type option */}
              <div className="block mb-5">
                <label className="block text-sm font-medium text-gray-700">
                  Select Type Ecole
                </label>
                <Select
                  components={animatedComponents}
                  isMulti
                  name="typesSchool"
                  options={typeOptionsCoverted}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  isClearable={true}
                  isLoading={false}
                  isSearchable={true}
                  closeMenuOnSelect={false}
                  onChange={(item) => handleTypeChange(item)}
                />
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
                  Create school
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

export default AddSchool;
