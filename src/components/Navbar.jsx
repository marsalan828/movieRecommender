import { Link } from "react-router-dom";
function Navbar() {
    return (
      <nav className="navbar">
        <div>
          <h2 className="home-link"><Link to="/">Movie App</Link></h2>
        </div>
        <div className="goto-links">
          <h3>
            <Link to="/">Home</Link>
          </h3>
          <h3>
            <Link to="/favourites">Favorities</Link>
          </h3>
        </div>
      </nav>
    );
}

export default Navbar;