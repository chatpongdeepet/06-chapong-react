import { Link, useLocation } from "react-router-dom";

const MainNavigation = ({ showPage }) => {
  let location = useLocation();
  let pageName = location.pathname.split("/").filter(Boolean).pop(); // Get the last segment of the URL

  console.log(pageName);

  return (
    <nav className="flex justify-between border-b pb-3">
      <Link to="/" className="text-2xl" onClick={() => showPage("")}>
        React Assessment
      </Link>
      <div className="w-[200px] flex justify-between">
        <Link
          to="/"
          className={`${!pageName ? "underline" : ""} text-2xl  hover:underline bg-blue-500`}
        >
          Home
        </Link>
        <Link
          to="/owner"
          className={`${pageName === "owner" ? "underline" : ""} text-2xl hover:underline`}
        >
          Owner
        </Link>
      </div>
    </nav>
  );
};

export default MainNavigation;
