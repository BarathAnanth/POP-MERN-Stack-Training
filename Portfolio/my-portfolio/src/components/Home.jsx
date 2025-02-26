const Home = ({ setActiveSection }) => {
  const handleGetInTouch = () => {
    setActiveSection("contact");
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <center>
      <section id="home" className="home-section">
        <div className="section">
          <div className="home-content">
            <div className="home-text">
              <h1 className="home-title">
                Hi, I'm <span style={{ color: "#64FFDA" }}>Barath Ananth</span>
              </h1>
              <p className="home-subtitle">Computer Science Undergrad</p>
              <button onClick={handleGetInTouch} className="get-in-touch">
                Get in Touch
              </button>
            </div>
            <img src="/profile.jpg" alt="Profile" className="profile-image" />
          </div>
        </div>
      </section>
    </center>
  );
};

export default Home;
