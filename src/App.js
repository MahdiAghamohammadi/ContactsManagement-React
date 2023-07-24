import { useState } from "react";
import { Navbar, Contacts } from "./components";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Contacts contacts={contacts} loading={loading} />
    </div>
  );
};

export default App;
