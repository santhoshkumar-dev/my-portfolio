function Footer() {
  return (
    <>
      <footer className="bg-[#101010] text-nav py-28 flex flex-col md:flex-row justify-between px-6 md:px-12">
        <h4 className="text-center md:text-left text-white text-6xl font-bold">
          Santhosh
          <br />
          Kumar
          <br />
          <a
            href="mailto:iamsanthosh2203@gmail.com"
            className="text-lg text-green"
          >
            iamsanthosh2203@gmail.com
          </a>
        </h4>

        <div className="flex items-center md:items-start justify-around w-full md:w-[50%]">
          <div className="flex flex-col gap-4">
            <h5 className="text-xl my-5 hover:text-green duration-300">
              Explore
            </h5>
            <a className="hover:text-green duration-300" href="/works">
              Works
            </a>
            <a className="hover:text-green duration-300" href="/blog">
              Blog
            </a>
            <a className="hover:text-green duration-300" href="/contact">
              Contact
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-xl my-5 hover:text-green duration-300">
              Portfolio
            </h5>
            <a className="hover:text-green duration-300" href="/works">
              Github
            </a>
            <a className="hover:text-green duration-300" href="/blog">
              Behance
            </a>
            <a className="hover:text-green duration-300" href="/contact">
              Uplabs
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-xl my-5 hover:text-green duration-300">
              Social
            </h5>
            <a
              className="hover:text-green duration-300"
              href="http://wa.me/6374886129"
            >
              WhatsApp
            </a>
            <a
              className="hover:text-green duration-300"
              href="https://instagram.com/i_am.santhosh"
            >
              Instagram
            </a>
            <a
              className="hover:text-green duration-300"
              href="https://www.linkedin.com/in/iamsanthosh2203/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
      <p className="text-center bg-[#101010] pb-3 text-green">
        &copy; Santhosh Kumar 2023
      </p>
    </>
  );
}

export default Footer;
