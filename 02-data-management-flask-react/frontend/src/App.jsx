import { useEffect, useState } from 'react'
import './App.css'
import ContactList from './ContactList'

function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:5000/contacts');
      const data = await response.json();
      console.log("API Response:", data); // Debugging
      if (data && Array.isArray(data.contacts)) {
        setContacts(data.contacts);
      } else {
        setContacts([]); // Fallback if data.contacts is not an array
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setContacts([]); // Prevents undefined error
    }
  };
  

  return (
    <>
      <ContactList contacts={contacts} />
    </>
  )
}

export default App
