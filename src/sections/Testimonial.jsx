function Testimonial() {
  return (
    <section className="bg-black flex flex-col py-36 px-10 md:px-24">
      <blockquote className="text-white text-4xl md:text-6xl">
        “You have power over your mind,not outside events. Realize this, and you
        <span className="text-green italic"> will find strength.</span>”
      </blockquote>
      <br />
      <br />
      <p className="text-right text-white hover:text-green duration-300 font-bold text-3xl">
        Marcus Aurelius
      </p>
    </section>
  );
}

export default Testimonial;
