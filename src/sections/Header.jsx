import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for routing
import avatarsk from "../assets/avatarsk.jpg";
import "./Header.css";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("/"); // Default to the home page
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  useEffect(() => {
    if (isScrollDisabled) {
      // Save the current scroll position
      const scrollY = window.scrollY;

      // Apply the CSS class to disable scrolling
      document.body.classList.add("scroll-disabled");

      // Set the scroll position to the saved value to maintain position
      window.scrollTo(0, scrollY);

      // Enable scrolling when the component unmounts
      return () => {
        document.body.classList.remove("scroll-disabled");
      };
    }
  }, [isScrollDisabled]);

  function handleScroll() {
    setNavbarOpen(true);
    setIsScrollDisabled(true);
  }
  function handleScrollOn() {
    setNavbarOpen(false);
    setIsScrollDisabled(false);
  }

  // Update currentPage whenever the route changes
  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  // Define a function to determine whether a link should be underlined
  const shouldUnderline = (path) => {
    return currentPage === path ? "underline" : "";
  };

  return (
    <header className="flex justify-between items-center relative bg-primary p-6 text-white w-full">
      <div className="w-12 h-12">
        <Link to="/">
          <img src={avatarsk} alt="" />
        </Link>
      </div>

      <nav className="hidden md:flex items-center text-nav gap-6 text-lg">
        <Link
          to="/my-portfolio/"
          className={`hover:text-white duration-100 ${shouldUnderline("/")}`}
        >
          Home
        </Link>
        <Link
          to="/my-portfolio/about"
          className={`hover:text-white duration-100 ${shouldUnderline(
            "/my-portfolio/about"
          )}`}
        >
          About
        </Link>
        <Link
          to="/my-portfolio/works"
          className={`hover:text-white duration-100 ${shouldUnderline(
            "/my-portfolio/works"
          )}`}
        >
          Works
        </Link>

        <Link
          to="http://wa.me/6374886129"
          className="mx-4 border px-6 py-1 text-white border-[#B8EC4C] hover:bg-[#B8EC4C] hover:text-black duration-500"
        >
          Hire Me
        </Link>
      </nav>

      <div
        onClick={() => handleScroll()}
        className="md:hidden flex flex-col gap-1 hamburger"
      >
        <span className="w-5 h-1 bg-white line_1"></span>
        <span className="w-5 h-1 bg-white line_2"></span>
        <span className="w-5 h-1 bg-white line_3"></span>
      </div>

      {/* On Mobile Devices Only */}
      {navbarOpen ? (
        <div className="top-0 w-[50%] h-screen absolute right-0 bg-green z-20 px-10 py-14">
          <button
            onClick={() => handleScrollOn()}
            className="flex justify-center my-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="30px"
              height="30px"
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
            </svg>
          </button>
          <nav className="flex flex-col gap-7">
            <Link
              to="/my-portfolio/"
              className={`hover:text-white duration-100 ${shouldUnderline(
                "/"
              )}`}
            >
              Home
            </Link>
            <Link
              to="/my-portfolio/about"
              className={`hover:text-white duration-100 ${shouldUnderline(
                "/my-portfolio/about"
              )}`}
            >
              About
            </Link>
            <Link
              to="/my-portfolio/works"
              className={`hover:text-white duration-100 ${shouldUnderline(
                "/my-portfolio/works"
              )}`}
            >
              Works
            </Link>

            <Link to="http://wa.me/6374886129">Hire Me</Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
