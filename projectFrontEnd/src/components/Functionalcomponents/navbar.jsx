import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/navbar.css";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);

  return (
    <header>
      <nav>
        <Link className="li" to="/">
          Home
        </Link>
        <Link className="li" to="/about">
          About
        </Link>
        <Link className="li" to="/gallery">
          Gallery
        </Link>
        <Link className="li" to="/contact">
          Contact
        </Link>
        <Link className="li" to="/HoC">
          Contact
        </Link>
        <div
          className="dd"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <span className="dropbtn">Hooks</span>
          {dropdownVisible && (
            <div className="list">
              <Link className="dc" to="/usestate">
                Use State
              </Link>
              <Link className="dc" to="/useeffect">
                Use Effect
              </Link>
              <Link className="dc" to="/useeffapi">
                Use Effect API
              </Link>
              <Link className="dc" to="/useref">
                Use Ref
              </Link>
              <Link className="dc" to="/usememo">
                Use Memo
              </Link>
              <Link className="dc" to="/usecallback">
                Use CallBack
              </Link>
              <Link className="dc" to="/usememoize">
                Use Memoize(Custom Hook)
              </Link>
            </div>
          )}
        </div>
        <div
          className="dd"
          onMouseEnter={() => setDropdownVisible2(true)}
          onMouseLeave={() => setDropdownVisible2(false)}
        >
          <span className="dropbtn">Memo DD</span>
          {dropdownVisible2 && (
            <div className="list">
              <Link className="dc" to="/memo">
                Memo
              </Link>
              <Link className="dc" to="/lazyloadingandsuspense">
                Lazy Loading
              </Link>
            </div>
          )}
          </div>
  
        <Link className="li" to="/login">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
