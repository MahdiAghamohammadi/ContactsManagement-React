import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import { Link } from "react-router-dom";
import { CURRENTLINE, ORANGE, PINK } from "../../helpers/colors";
import Spinner from "../Spinner";
import Contact from "./Contact";
const Contacts = () => {
  const { filteredContacts, loading, deleteContact } =
    useContext(ContactContext);
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 float-start d-flex align-items-center gap-2">
                <Link
                  to={"/contacts/add"}
                  className="btn mt-3"
                  style={{ backgroundColor: PINK }}
                >
                  <i className="fa fa-plus-circle mx-2"></i>
                  Create a new contact
                </Link>

                <Link
                  to={"/contacts/import"}
                  className="btn mt-3"
                  style={{ backgroundColor: PINK }}
                >
                  <i className="fa fa-plus-circle mx-2"></i>
                  Import Contacts
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contacts List */}
      {loading ? (
        <Spinner />
      ) : (
        <section className="container">
          <div className="row">
            {/* Contact */}
            {filteredContacts.length > 0 ? (
              filteredContacts.map((c) => (
                <Contact
                  key={c.id}
                  contact={c}
                  deleteContact={() => deleteContact(c.id, c.fullname)}
                />
              ))
            ) : (
              <div
                className="text-center py-5"
                style={{ backgroundColor: CURRENTLINE }}
              >
                <p className="h3" style={{ color: ORANGE }}>
                  No Contacts Found...!
                </p>
                <img
                  src={require("../../assets/no-found.gif")}
                  alt="Not Found"
                  className="w-25"
                />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Contacts;
