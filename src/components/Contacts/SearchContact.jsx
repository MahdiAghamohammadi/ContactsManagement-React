import { PURPLE, COMMENT } from "../../helpers/colors";
const SearchContact = ({ query, search }) => {
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
          value={query.text}
          onChange={search}
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
