import React, { useState, useEffect } from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:3000/get-contact', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        });

        if (response.ok) {
          const fetchedContacts = await response.json();
          setContacts(fetchedContacts);
        } else {
          console.log('Error fetching contacts data');
        }
      } catch (error) {
        console.log('There is an error getting the contact from the backend', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.contactList}>
        {contacts.map((fetchedContacts) => (
          <div style={styles.contact} key={fetchedContacts.id}>
            <img style={styles.contactImage} src={`https://via.placeholder.com/50`} alt={fetchedContacts.name} />
            <div style={styles.contactInfo}>
              <h2>{fetchedContacts.contact_name}</h2>
              <p>{fetchedContacts.contact_status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#25D366', // WhatsApp green
    color: '#ffffff',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },

  contactList: {
    backgroundColor: '#128C7E', // WhatsApp dark green
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },

  contact: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #075E54', // WhatsApp light green
  },

  contactImage: {
    borderRadius: '50%',
    marginRight: '10px',
  },

  contactInfo: {
    flexGrow: 1,
  },

  h2: {
    margin: 0,
    fontSize: '1.5em',
  },

  p: {
    margin: 0,
    fontSize: '1em',
    color: '#8F8F8F',
  },
};

export default ContactList;
