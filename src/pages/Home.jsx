import Admin from "../components/Admin.jsx";
import User from "../components/User.jsx";
import MainNavigation from "../components/MainNavigation.jsx";
import { useState } from "react";

const Home = () => {
  const [showPage, setShowPage] = useState("");

  const [users, setUsers] = useState([
    {
      firstName: "Chatpong",
      lastName: "Deepet",
      position: "Designer",
    },
  ]);

  const [enteredValues, setEnteredValues] = useState({
    firstName: "",
    lastName: "",
    position: "",
  });

  const handleAdd = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, { id: Date.now(), ...newUser }]);
  };

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <MainNavigation showPage={setShowPage} />
      <div className="text-center m-6">
        <h1 className="text-2xl font-bold m-2">Generation Thailand</h1>
        <h1>
          React -
          {showPage === ""
            ? " Assessment"
            : showPage === "user"
              ? " User Sector"
              : " Admin Sector"}
        </h1>
        <div className="max-w-lg mx-auto flex justify-between p-4 border-b-2">
          <button
            className={`border px-3 py-1 rounded-lg bg-gray-300 hover:bg-blue-700 hover:text-white ${
              showPage === "user" ? "bg-blue-700 text-white" : "text-gray-600"
            }`}
            onClick={() => setShowPage("user")}
          >
            User <span className="hidden md:inline">Home</span> Sector
          </button>
          <button
            className={`border px-3 py-1 rounded-lg bg-gray-300 hover:bg-blue-700 hover:text-white ${
              showPage === "admin" ? "bg-blue-700 text-white" : "text-gray-600"
            }`}
            onClick={() => setShowPage("admin")}
          >
            Admin <span className="hidden md:inline">Home</span> Sector
          </button>
        </div>
        {showPage === "user" && <User user={users} />}
        {showPage === "admin" && (
          <Admin
            user={users}
            onAdd={handleAdd}
            onDelete={handleDelete}
            enteredValue={enteredValues}
            setEnteredValue={setEnteredValues}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
