import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import {
  Navbar,
  Contacts,
  AddContact,
  ViewContact,
  EditContact,
} from "./components";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        // fetch data
        const { data: contactsData } = await axios.get(
          "http://localhost:9000/contacts"
        );
        const { data: groupsData } = await axios.get(
          "http://localhost:9000/groups"
        );
        // set data
        setContacts(contactsData);
        setGroups(groupsData);

        setLoading(false);
      } catch (e) {
        console.log(e.message);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={<Contacts contacts={contacts} loading={loading} />}
        >
          <Route path="add" element={<AddContact />} />
          <Route path=":contactId" element={<ViewContact />} />
          <Route path="edit/:contactId" element={<EditContact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
