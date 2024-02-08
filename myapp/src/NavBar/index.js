import "./index.css";
const NavBar = () => (
  <div>
    <nav>
      <h1 className="nav-logo">
        Medi<span className="care">Care+</span>
      </h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>News</li>
        <button>Contact</button>
      </ul>
    </nav>
  </div>
);
export default NavBar;
