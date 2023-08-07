import { createContext } from "react";

export const ContactContext = createContext({
  loading: false,
  setLoading: () => {},
  contact: {},
  setContact: () => {},
  contacts: [],
  filteredContacts: [],
  contactQuery: {},
  groups: [],
  onContactChange: () => {},
  createContact: () => {},
  updateContact: () => {},
  deleteContact: () => {},
  contactSearch: () => {},
});
