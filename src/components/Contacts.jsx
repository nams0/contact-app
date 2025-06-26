import React, { useState } from "react"

import ContactsList from "./ContactsList"

function Contacts() {
  const [contacts, setContacts] = useState([])
  const [alert, setAlert] = useState("")
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  })
  const formHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setContact((contact) => ({ ...contact, [name]: value }))
  }
  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter valid data")
      return
    }
    setAlert("")
    setContacts((contacts) => [...contacts, contact])
    setContact({ name: "", lastName: "", email: "", phone: "" }) //empty inputs
  }
  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contact.name}
          onChange={formHandler}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={contact.lastName}
          onChange={formHandler}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={formHandler}
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={contact.phone}
          onChange={formHandler}
        />
        <button onClick={addHandler}>Add Contatc</button>
      </div>
      {alert && <p>{alert}</p>}
      <ContactsList contacts={contacts} />
    </div>
  )
}

export default Contacts
