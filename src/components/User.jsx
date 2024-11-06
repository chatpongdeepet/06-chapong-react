const User = ({ user }) => {
  return (
    <div className="pt-10">
      <table className="w-full ">
        <thead>
          <tr className="border-t border-b border-gray-300 ">
            <th className="text-md md:text-xl">First name</th>
            <th className="text-md md:text-xl">Last name</th>
            <th className="text-md md:text-xl">Position</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id} className="border-t border-b ">
              <td className="border-b border-t py-1 text-left pl-4">
                {user.firstName}
              </td>
              <td className="border-b border-t py-1 text-left pl-4">
                {user.lastName}
              </td>
              <td className="border-b border-t py-1 text-left pl-4">
                {user.position}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
