const works = [
  {
    id: 1,
    title: "Piracy For Everything",
    description: "A website that provides pirated content for free.",
    subtitle: "Directory Website",
    img: "src/assets/PiracyForEverything.png",
    link: "https://piracyforeverything.github.io/p4e/",
    flex: "start",
  },
  {
    id: 2,
    title: "Typerrr",
    description: "A web app that helps you improve your typing speed.",
    subtitle: "Web App",
    img: "src/assets/Typerrr.png",
    link: "https://iamsanthosh2203.github.io/typerrr/",
    flex: "start",
  },
  {
    id: 3,
    title: "Swift Calc",
    description: "A website that provides pirated content for free.",
    subtitle: "Simple Calculator",
    img: "src/assets/CalculatorApp.png",
    link: "https://iamsanthosh2203.github.io/calculator-app/",
    flex: "end",
  },
  {
    id: 4,
    title: "Enchant Scrolls",
    description: "A website that provides pirated content for free.",
    subtitle: "Parallax Website",
    img: "src/assets/ShareItLater.png",
    link: "https://iamsanthosh2203.github.io/parallax-website-midlead/",
    flex: "end",
  },
  {
    id: 5,
    title: "Piglet Dash",
    description: "A website that provides pirated content for free.",
    subtitle: "Game",
    img: "src/assets/piggame.png",
    link: "https://iamsanthosh2203.github.io/pig-game/",
    flex: "start",
  },
  {
    id: 6,
    title: "Guess Quest",
    description: "A website that provides pirated content for free.",
    subtitle: "Game",
    img: "src/assets/GuessMyNumber!.png",
    link: "https://iamsanthosh2203.github.io/guessing-game-project/",
    flex: "start",
  },
  {
    id: 7,
    title: "AI Funny Generator",
    description: "A website that provides pirated content for free.",
    subtitle: "AI Web App",
    img: "src/assets/PoeticQuoteGenerator.png",
    link: "https://iamsanthosh2203.github.io/final-quote-generator/",
    flex: "end",
  },
  {
    id: 8,
    title: "Share Money",
    description: "A website that provides pirated content for free.",
    subtitle: "Web App",
    img: "src/assets/ShareMoney.png",
    link: "https://iamsanthosh2203.github.io/share-money/",
    flex: "end",
  },
];

function Works() {
  return (
    <section className="bg-[#101010] text-white px-8 md:px-24 py-8">
      <p className="my-9 text-2xl">My Works</p>
      {/* 1 */}
      <div className="grid md:grid-cols-2 md:grid-rows-4 grid-cols-1 grid-rows-1 gap-12">
        {works.map((work) => (
          <div
            onClick={() => window.open(work.link)}
            key={work.id}
            style={{ cursor: "pointer" }}
            className={`${
              work.flex === "end" ? "ml-0 md:ml-32" : ""
            } flex flex-col w-full md:w-[70%] h-96 bg-gray-500 grayscale hover:grayscale-0 transition-all duration-500`}
          >
            <div
              style={{
                height: "300px",
                backgroundImage: `url(${work.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <h3 className="ml-3 text-2xl mt-4">{work.title}</h3>
            <p className="ml-3 text-xl text-nav">{work.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;
