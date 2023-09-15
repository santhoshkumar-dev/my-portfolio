import "./AboutPage.css";

function AboutPage() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[93vh] bg-black flex flex-col items-center pt-11  md:pt-40 text-white justify-center">
      <div className="flex md:flex-row flex-col justify-between w-[70%] md:h-[30%]">
        <h1 className="text-6xl md:text-9xl">Santhosh</h1>
        <div
          className="hidden md:block w-40 h-32 rotate-animation"
          style={{
            backgroundImage: `url('src/assets/green-glitter-emoji-stroke-by-Vexels.png')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <div className="flex justify-center w-auto md:w-[70%] h-auto md:h-[50%]">
        <h1 className="text-5xl md:text-9xl text-nav">Kumar</h1>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="flex flex-col py-24 px-11 md:px-24 bg-[#1A1A1A] items-center relative justify-center text-nav">
      <h2 className="text-2xl md:text-4xl">
        My fascination with web development began as a hobby, tinkering with
        basic{" "}
        <span className="text-white hover:text-green duration-300">
          HTML and CSS to create my first websites.&nbsp;
        </span>
        Soon, I discovered{" "}
        <span className="text-white hover:text-green duration-300 italic">
          React,
        </span>{" "}
        and it was love at first component. I was captivated by its power to
        build dynamic, interactive, and responsive user interfaces. This marked
        the beginning of{" "}
        <span className="text-white hover:text-green duration-300">
          my self-taught journey into the world of React.
        </span>
      </h2>

      <div className="w-full md:w-[70%] mt-6 md:mt-0 h-auto md:h-[500px] self-center md:absolute md:-bottom-[26em] bottom-24">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/EFkyxzJtiv4"
          title="Batman x Hukum | Jailer | Benaffleck | Rajnikanth | Do vibez"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-black pt-14 md:pt-[30em] pb-20 px-11 md:px-28 flex flex-col md:flex-row justify-around text-white">
      <div>
        <p className="text-bold text-4xl">Skills</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="border-animation">
          <h3 className="text-bold text-green text-3xl">React</h3>
          <p>Intermediate</p>
        </div>
        <div className="border-animation">
          <h3 className="text-bold text-green text-3xl">Javascript</h3>
          <p>Intermediate</p>
        </div>
        <div className="border-animation">
          <h3 className="text-bold text-green text-3xl">Tailwind CSS</h3>
          <p>Advanced</p>
        </div>
        <div className="border-animation">
          <h3 className="text-bold text-green text-3xl">HTML/CSS</h3>
          <p>Advanced</p>
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <section className="px-11 md:px-28 py-11 bg-[#1A1A1A] text-white">
      <h3 className="text-4xl">Resume</h3>
      <iframe
        className="w-full h-[50vh] mt-4"
        src="https://tomato-dulci-52.tiiny.site/"
      ></iframe>
    </section>
  );
}

export default AboutPage;
