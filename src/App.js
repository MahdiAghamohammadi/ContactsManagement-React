import { useState } from "react";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contact/Concats";
import "./App.css";

const App = () => {
  const [contacts, setcontacts] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <Contacts contacts={contacts} />
    </div>
  );
};

export default App;
