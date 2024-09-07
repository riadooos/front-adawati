import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMarquesAction } from "../../../redux/slice/marque/marqueSlice";
import LayoutAdmin from "../../common/LayoutAdmin";

const ShowMarques = () => {
  const dispatch = useDispatch();
  const { loading, error, marques } = useSelector(
    (state) => state?.marques.marques
  );
  useEffect(() => {
    dispatch(getAllMarquesAction());
  }, []);
  return (
    <LayoutAdmin>
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-4">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marques &&
            marques.map((marque, index) => (
              <div className="bg-white p-4 shadow rounded-lg" key={index}>
                <img src={marque.imgMarque} alt={marque.marqueName} />
                <h2 className="text-xl font-semibold">{marque.marqueName}</h2>
              </div>
            ))}
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default ShowMarques;

/**/
