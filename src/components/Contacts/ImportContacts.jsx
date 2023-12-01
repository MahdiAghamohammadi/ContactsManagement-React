import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import { Link } from "react-router-dom";

import { Spinner } from "../";
import { COMMENT, GREEN, PURPLE } from "../../helpers/colors";

const ImportContacts = () => {
    const {loading, importContacts} = useContext(ContactContext);
    return (
        <>
      {loading ? (
          <Spinner />
      ) : (
          <>
          <section className="p-3">
            <img
                src={require("../../assets/man-taking-note.png")}
                height="400px"
                style={{position: "absolute", zIndex: "-1", top: "130px", left: "100px", opacity: "50%"}}
                alt=""
            />
            <div className="container" dir="rtl">
              <div className="row">
                <div className="col">
                  <p
                      className="h4 fw-bold text-center"
                      style={{color: GREEN}}
                  >
                    Import Contacts
                  </p>
                </div>
              </div>
              <hr style={{backgroundColor: GREEN}} />
              <div className="row mt-5">
                <div className="col-md-4">
                  <form onSubmit={importContacts}>
                    <div className="mb-2">
                      <input
                          type="file"
                          name="file"
                          className="form-control"
                          required={true}
                      />
                    </div>
                    <div className="mx-2">
                      <input
                          type="submit"
                          className="btn"
                          style={{backgroundColor: PURPLE}}
                          value="Import Contacts"
                      />
                      <Link
                          to={"/contacts"}
                          className="btn mx-2"
                          style={{backgroundColor: COMMENT}}
                      >
                        Cancel
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
    );
};

export default ImportContacts;
