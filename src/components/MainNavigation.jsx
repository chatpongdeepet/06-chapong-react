import { Link, useLocation } from "react-router-dom";

const MainNavigation = ({ showPage }) => {
  let location = useLocation();
  let pageName = location.pathname.split("/").filter(Boolean).pop(); // Get the last segment of the URL

  console.log(pageName);

  return (
    <nav className="max-w-xs p-3 md:max-w-xl flex justify-between  border-b h-[64px] m-auto align-baseline">
      <Link
        to="/"
        className="text-xl md:text-2xl font-semibold"
        onClick={() => showPage("")}
      >
        React <span className="hidden md:inline">Assessment</span>
      </Link>
      <div className="w-[150px] md:w-[200px] flex justify-between">
        <Link
          to="/"
          className={`relative text-xl md:text-2xl after:content-[''] after:block after:bg-blue-700 after:h-1 ${!pageName ? "after:w-full" : "after:w-0 hover:after:w-full"} after:transition-all after:duration-500 after:origin-left`}
        >
          Home
        </Link>
        <Link
          to="/owner"
          className={`relative text-xl md:text-2xl after:content-[''] after:block after:bg-blue-700 after:h-1 ${pageName === "owner" ? "after:w-full" : "after:w-0 hover:after:w-full"} after:transition-all after:duration-500 after:origin-left`}
        >
          Owner
        </Link>
      </div>
    </nav>
  );
};

export default MainNavigation;
