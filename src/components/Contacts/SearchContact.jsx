import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import { PURPLE, COMMENT } from "../../helpers/colors";
const SearchContact = () => {
  const { contactQuery, contactSearch } = useContext(ContactContext);
  return (
    <>
      <div className="input-group mx-2 w-75" dir="ltr">
        <span
          className="input-group-text"
          id="basic-addon1"
          style={{ backgroundColor: PURPLE, color: COMMENT }}
        >
          <i className="fa fa-search"></i>
        </span>
        <input
          type="text"
          dir="ltr"
          value={contactQuery.text}
          onChange={contactSearch}
          className="form-control"
          placeholder="search contact"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </div>
    </>
  );
};

export default SearchContact;
