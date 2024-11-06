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
          className={`relative text-2xl after:content-[''] after:block after:bg-blue-700 after:h-1 ${!pageName ? "after:w-full" : "after:w-0 hover:after:w-full"} after:transition-all after:duration-500 after:origin-left`}
        >
          Home
        </Link>
        <Link
          to="/owner"
          className={`relative text-2xl after:content-[''] after:block after:bg-blue-700 after:h-1 ${pageName === "owner" ? "after:w-full" : "after:w-0 hover:after:w-full"} after:transition-all after:duration-500 after:origin-left`}
        >
          Owner
        </Link>
      </div>
    </nav>
  );
};

export default MainNavigation;
