import { navLinks } from '../data/data';

const Navbar = ({ activeSection, setActiveSection }) => {
  const handleScroll = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">Barath Ananth's Portfolio</div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className={`nav-link ${activeSection === link.id ? 'active-nav' : ''}`}
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;