import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import ImportContacts from "./components/Contacts/ImportContacts";

import { ContactContext } from "./context/contactContext.js";
import {
    Navbar, Contacts, AddContact, ViewContact, EditContact
} from "./components";
import { convertVCFToJson } from "./helpers/vcf-to-json";

import {
    createContact, getAllContacts, getAllGroups, deleteContact
} from "./services/contactService";

import { confirmAlert } from "react-confirm-alert";
import "./App.css";
import {
    COMMENT, CURRENTLINE, FOREGROUND, PURPLE, YELLOW
} from "./helpers/colors";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [groups, setGroups] = useState([]);
    const [contact, setContact] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                // fetch data
                const {data: contactsData} = await getAllContacts();
                const {data: groupsData} = await getAllGroups();
                // set data
                setContacts(contactsData);
                setFilteredContacts(contactsData);
                setGroups(groupsData);

                setLoading(false);
            } catch (e) {
                console.log(e.message);
                setLoading(false);
            }
        })();
    }, []);

    const createContactForm = async (e) => {
        e.preventDefault();
        try {
            setLoading((prevLoading) => !prevLoading);
            const {status, data} = await createContact(contact);
            if (status === 201) {
                const allContacts = [...contacts, data];
                setContacts(allContacts);
                setFilteredContacts(allContacts);
                setContact({});
                setLoading((prevLoading) => !prevLoading);
                navigate("/contacts");
            }
        } catch (error) {
            console.log(error.message);
            setLoading((prevLoading) => !prevLoading);
        }
    };

    const importContactsForm = async (e) => {
        e.preventDefault();

        try {
            setLoading((prevLoading) => !prevLoading);
            const file = e.target.file.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const vcf = e.target.result;
                    const output = convertVCFToJson(vcf);

                    output.forEach(async contact => {
                        // sleep
                        await (new Promise(resolve => setTimeout(resolve, 2000)));

                        const {status, data} = await createContact(contact);
                        console.log(data);

                        if (status === 201) {
                            const allContacts = [...contacts, data];
                            setContacts(allContacts);
                            setFilteredContacts(allContacts);
                            setContact({});
                            setLoading((prevLoading) => !prevLoading);
                            navigate("/contacts");
                        }
                    });
                };
                reader.readAsText(file);
            }

        } catch (error) {
            console.log(error.message);
            setLoading((prevLoading) => !prevLoading);
        }
    };

    const onContactChange = (e) => {
        setContact({
            ...contact, [e.target.name]: e.target.value
        });
    };

    const confirmDelete = (contactId, contactFullName) => {
        confirmAlert({
            customUI: ({onClose}) => {
                return (<div
                    style={{
                        backgroundColor: CURRENTLINE, border: `1px solid ${PURPLE}`, borderRadius: "1em"
                    }}
                    className="p-4"
                >
            <h1 style={{color: YELLOW}}>Delete Contact</h1>
            <p style={{color: FOREGROUND}}>
              Are you sure to delete contact {contactFullName}?
            </p>
            <button
                onClick={() => {
                    removeContact(contactId);
                    onClose();
                }}
                className="btn mx-2"
                style={{backgroundColor: PURPLE}}
            >
              I'm Sure.
            </button>

            <button
                onClick={onClose}
                className="btn"
                style={{backgroundColor: COMMENT}}
            >
              Cancel
            </button>
          </div>);
            }
        });
    };

    const removeContact = async (contactId) => {
        // Copy
        const allContacts = [...contacts];
        try {
            const updatedContacts = allContacts.filter((c) => c.id !== contactId);
            setContacts(updatedContacts);
            setFilteredContacts(updatedContacts);

            // Sending delete Req to server
            const {status} = await deleteContact(contactId);
            if (status !== 200) {
                setContacts(allContacts);
                setFilteredContacts(allContacts);
            }
        } catch (e) {
            console.log(e.message);
            setContacts(allContacts);
            setFilteredContacts(allContacts);
        }
    };

    let filterTimeout;
    const contactSearch = (query) => {
        clearTimeout(filterTimeout);

        if (!query) return setFilteredContacts([...contacts]);

        filterTimeout = setTimeout(() => {
            setFilteredContacts(contacts.filter((contact) => {
                return contact.fullname.toLowerCase().includes(query.toLowerCase());
            }));
        }, 1000);
    };

    return (<ContactContext.Provider
        value={{
            loading,
            setLoading,
            contact,
            setContact,
            contacts,
            setContacts,
            filteredContacts,
            setFilteredContacts,
            groups,
            onContactChange,
            createContact : createContactForm,
            importContacts: importContactsForm,
            deleteContact : confirmDelete,
            contactSearch
        }}
    >
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/contacts" />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/import" element={<ImportContacts />} />
          <Route path="/contacts/add" element={<AddContact />} />
          <Route path="/contacts/:contactId" element={<ViewContact />} />
          <Route path="/contacts/edit/:contactId" element={<EditContact />} />
        </Routes>
      </div>
    </ContactContext.Provider>);
};

export default App;
