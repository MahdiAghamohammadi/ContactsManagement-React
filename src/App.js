import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
  const [loading, setLoading] = useState(false);
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
