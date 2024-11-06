const User = ({ user }) => {
  return (
    <div className="pt-10">
      <table className="w-full ">
        <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Positoin</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
