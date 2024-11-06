import MainNavigation from "../components/MainNavigation.jsx";

const Owner = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <MainNavigation />
      <div className="pt-5 text-center">
        <h1 className="text-2xl font-semibold">Chatpong Deepet</h1>
        <img
          className="rounded-full mx-auto w-[150px] m-10"
          src="https://i.pinimg.com/236x/22/09/02/220902e0b406bbd28afccd44a3551b1e.jpg"
          alt="owner-profile-shrek-"
        />
        <p>Hello coding</p>
      </div>
    </div>
  );
};

export default Owner;
