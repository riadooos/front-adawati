import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBoxesAction } from "../../../redux/slice/box/boxSlice";
import LayoutAdmin from "../../common/LayoutAdmin";

const Table = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBoxesAction());
  }, [dispatch]);
  const { boxes } = useSelector((state) => state?.boxes.boxes);

  return (
    <LayoutAdmin>
      <div className="container mx-3 py-8">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="w-1/3 py-2 px-4">Ecole</th>
                <th className="w-1/3 py-2 px-4">Box</th>
                <th className="w-1/3 py-2 px-4">Articles</th>
              </tr>
            </thead>
            <tbody>
              {boxes &&
                boxes.map((box, index) => (
                  <tr
                    key={index}
                    className="text-center border-t border-gray-200"
                  >
                    <td className="py-2 px-4">{box.designationBox}</td>
                    <td className="py-2 px-4">{box.schoolId}</td>
                    <td className="py-2 px-4">
                      {box.articles.map((article, i) => (
                        <p key={i}>{article}</p>
                      ))}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default Table;
