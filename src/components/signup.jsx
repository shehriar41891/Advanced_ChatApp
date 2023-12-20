import React, {useState} from 'react'

const Signup = ()  =>{
    const [userInfo,setUserInfo] = useState({
        firstname : '',
        lastname : '',
        email : '',
        password : '',
        profilePicture : '',
        phone_number : ''
    })

    const handleChange = (e) =>{
        const {name , value} = e.target
        setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [name]: value }));
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        console.log('The user informations are ',userInfo)

        setUserInfo({
            firstname : '',
            lastname : '',
            email : '',
            password : '',
            profilePicture : '',
            phone_number : ''
        })
    }

    return (
        <div>
      <h1>Welcome to our Chat Application</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );

}

export default Signup