import SearchContact from "./Contacts/SearchContact";
import { useLocation } from "react-router-dom";
import { PURPLE, BACKGROUND } from "../helpers/colors";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav
        className="navbar navbar-dark navbar-expand-sm shadow-lg"
        style={{ backgroundColor: BACKGROUND }}
      >
        <div className="container">
          <div className="row w-100">
            <div className="col">
              <div className="navbar-brand">
                <i className="fa fa-id-badge mx-2" style={{ color: PURPLE }} />
                Contacts Management Application
                <span style={{ color: PURPLE }}></span>
              </div>
            </div>
            {location.pathname === "/contacts" ? (
              <div className="col">
                <SearchContact />
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
