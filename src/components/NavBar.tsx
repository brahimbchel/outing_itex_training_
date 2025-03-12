import { Link, useLocation } from 'react-router'

const NavBar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <div className="nav-left">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={location.pathname === "/products" ? "active" : ""}
            >
              Products
            </Link>
          </li>
        </div>
        <div className="nav-right">
          <li>
            <Link
              to="/auth/login"
              className={location.pathname === "/auth/login" ? "active" : ""}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/auth/register"
              className={location.pathname === "/auth/register" ? "active" : ""}
            >
              Register
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar