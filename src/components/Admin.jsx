const Admin = ({ user, onDelete, onAdd, enteredValue, setEnteredValue }) => {
  //Check value in input tag and store in setInput(identifier, value)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnteredValue((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      enteredValue.firstName &&
      enteredValue.lastName &&
      enteredValue.position
    ) {
      onAdd(enteredValue);
      setEnteredValue({ firstName: "", lastName: "", position: "" });
    }
  };

  return (
    <div>
      <div className="py-10">
        <h1 className="text-left mx-2 font-bold">Create user here</h1>
        <form
          className="flex flex-col flex-wrap md:flex-row items-center"
          onSubmit={handleSubmit}
        >
          <input
            className="border rounded-md m-2 pl-2"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={enteredValue.firstName}
          />
          <input
            className="border rounded-md m-2 pl-2"
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={enteredValue.lastName}
          />
          <input
            className="border rounded-md m-2 pl-2"
            type="text"
            name="position"
            placeholder="Position"
            onChange={handleChange}
            value={enteredValue.position}
          />
          <button
            type="submit"
            className="px-4 py-1 border rounded-md m-2 bg-green-600 text-white hover:bg-green-700"
          >
            Add
          </button>
        </form>
      </div>
      {user.length === 0 ? (
        <p className="text-2xl font-bold text-gray-400">No data in table...</p>
      ) : (
        <table className="w-full border-b border-t">
          <thead>
            <tr className="border-t border-b border-gray-300">
              <th className="text-sm md:text-xl">First name</th>
              <th className="text-sm md:text-xl">Last name</th>
              <th className="text-sm md:text-xl">Position</th>
              <th className="text-sm md:text-xl">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user.id}>
                <td className="border-b border-t py-1 text-left pl-4">
                  {user.firstName}
                </td>
                <td className="border-b border-t py-1 text-left pl-4">
                  {user.lastName}
                </td>
                <td className="border-b border-t py-1 text-left pl-4">
                  {user.position}
                </td>
                <td className="border-b border-t py-1">
                  <button
                    type="button"
                    onClick={() => onDelete(user.id)}
                    className="bg-red-500 text-white hover:bg-red-600 rounded-md align-middle"
                  >
                    <span className="hidden md:inline px-2">Delete</span>{" "}
                    <img
                      className="size-6 md:hidden"
                      src="../../public/x-48.png"
                      alt=""
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin;
