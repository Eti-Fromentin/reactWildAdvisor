import "./css/homepage.css";

const Homepage = () => {
  return (
    <main>
      <a href="a-propos.html" className="Logo-link">
        <img src="assets/Wild-advisor-logo.png" alt="Logo" className="Logo" />
      </a>

      <div className="Container">
        <section id="surPlace" className="photo">
          <a href="place.html">
            <h1>SUR PLACE</h1>
          </a>
        </section>

        <section id="surLePouce" className="photo">
          <a href="pouce.html">
            <h1>SUR LE POUCE</h1>{" "}
          </a>
        </section>

        <section id="jaiSoif" className="photo">
          <a href="soif.html">
            <h1>J'AI SOIF !</h1>
          </a>
        </section>

        <section id="surprendsMoi" className="photo">
          <a href="surprise.html">
            <h1>SURPRENDS MOI !</h1>
          </a>
        </section>
      </div>
    </main>
  );
};

export default Homepage;
