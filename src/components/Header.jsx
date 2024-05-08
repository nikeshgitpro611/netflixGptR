import React from "react";

const Header = () => {
  const Logo =
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-50">
      <div className="w-44 cursor-pointer">
        <img src={Logo} alt="nexFlix" className="header_logo" />
      </div>
    </div>
  );
};

export default Header;
