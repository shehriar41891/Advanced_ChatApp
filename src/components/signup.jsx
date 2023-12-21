import React, { useState } from 'react';

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    profilePicture: '',
    phone_number: ''
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // If the input is a file input, extract the file type
    const newValue = type === 'file' ? e.target.files[0] : value;

    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [name]: newValue }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    //making fetch request to the backend
    try{
      const response = await fetch('http://localhost:3000/submitform',{
        method : 'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(userInfo)
      })

      if(!response.ok){
        console.log('Something is wrong while sending the data to backend')
      }

      console.log('The response from the backend is ',response)
    }catch(err){
       console.log('There is an error in sending the data to backend',err) 
    }

    setUserInfo({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      profilePicture: '',
      phone_number: ''
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to our Chat Application</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          First Name:
          <input
            type="text"
            name="firstname"
            value={userInfo.firstname}
            onChange={handleChange}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={userInfo.lastname}
            onChange={handleChange}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Profile Picture:
          <input
            type="file"
            name="profilePicture"
            onChange={handleChange}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Phone Number:
          <input
            type="text"
            name="phone_number"
            value={userInfo.phone_number}
            onChange={handleChange}
            style={styles.input}
          />
        </label>

        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '50px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(to right, #b3ffb3, #99ff99)', // Gradient background
    animation: 'float 2s infinite alternate' // Animation
  },
  title: {
    color: 'green', // Green title
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  label: {
    margin: '10px 0',
    color: 'green' // Green label text
  },
  input: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    width: '100%',
    boxSizing: 'border-box'
  },
  button: {
    backgroundColor: 'green', // Green button
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none'
  },
  // Animation keyframes
  '@keyframes float': {
    from: {
      transform: 'translateY(0)'
    },
    to: {
      transform: 'translateY(-10px)'
    }
  }
};

export default Signup;
