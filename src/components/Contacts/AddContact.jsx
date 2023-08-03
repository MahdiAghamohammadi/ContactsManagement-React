import { Link } from "react-router-dom";

import { Spinner } from "../";
import { COMMENT, GREEN, PURPLE } from "../../helpers/colors";

const AddContact = ({
  loading,
  contact,
  groups,
  setContactInfo,
  createContactForm,
}) => {
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
              style={{
                position: "absolute",
                zIndex: "-1",
                top: "130px",
                left: "100px",
                opacity: "50%",
              }}
              alt=""
            />
            <div className="container" dir="rtl">
              <div className="row">
                <div className="col">
                  <p
                    className="h4 fw-bold text-center"
                    style={{ color: GREEN }}
                  >
                    Create New Contact
                  </p>
                </div>
              </div>
              <hr style={{ backgroundColor: GREEN }} />
              <div className="row mt-5">
                <div className="col-md-4">
                  <form onSubmit={createContactForm}>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="fullname"
                        className="form-control"
                        placeholder="FullName"
                        required={true}
                        value={contact.fullname}
                        onChange={setContactInfo}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="photo"
                        className="form-control"
                        placeholder="Image"
                        required={true}
                        value={contact.photo}
                        onChange={setContactInfo}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="number"
                        name="mobile"
                        className="form-control"
                        placeholder="Mobile"
                        required={true}
                        value={contact.mobile}
                        onChange={setContactInfo}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required={true}
                        value={contact.email}
                        onChange={setContactInfo}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="job"
                        className="form-control"
                        placeholder="Job"
                        required={true}
                        value={contact.job}
                        onChange={setContactInfo}
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        name="group"
                        className="form-control"
                        required={true}
                        value={contact.group}
                        onChange={setContactInfo}
                      >
                        <option value="">Select Group</option>
                        {groups.length > 0 &&
                          groups.map((group) => (
                            <option value={group.id} key={group.id}>
                              {group.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="mx-2">
                      <input
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: PURPLE }}
                        value="Create Contact"
                      />
                      <Link
                        to={"/contacts"}
                        className="btn mx-2"
                        style={{ backgroundColor: COMMENT }}
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

export default AddContact;
