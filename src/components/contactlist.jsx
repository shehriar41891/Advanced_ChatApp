// ContactList.js

import React from 'react';

const ContactList = () => {
  const contacts = [
    { id: 1, name: 'John Doe', status: 'Online' },
    { id: 2, name: 'Jane Smith', status: 'Away' },
    { id: 3, name: 'Bob Johnson', status: 'Offline' },
    // Add more contacts as needed
  ];

  return (
    <div style={styles.body}>
      <div style={styles.contactList}>
        {contacts.map(contact => (
          <div style={styles.contact} key={contact.id}>
            <img style={styles.contactImage} src={`https://via.placeholder.com/50`} alt={contact.name} />
            <div style={styles.contactInfo}>
              <h2>{contact.name}</h2>
              <p>{contact.status}</p>
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
