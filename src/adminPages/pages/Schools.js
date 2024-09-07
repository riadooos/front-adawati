import React from "react";
import LayoutAdmin from "../../common/LayoutAdmin";

const Table = () => {
  const data = [
    { name: "John Doe", age: 28, email: "john@example.com" },
    { name: "Jane Smith", age: 34, email: "jane@example.com" },
    { name: "Sam Green", age: 45, email: "sam@example.com" },
  ];

  return (
    <LayoutAdmin>
    <div className="container mx-3 py-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="w-1/3 py-2 px-4">Name</th>
              <th className="w-1/3 py-2 px-4">Age</th>
              <th className="w-1/3 py-2 px-4">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, index) => (
              <tr key={index} className="text-center border-t border-gray-200">
                <td className="py-2 px-4">{person.name}</td>
                <td className="py-2 px-4">{person.age}</td>
                <td className="py-2 px-4">{person.email}</td>
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
