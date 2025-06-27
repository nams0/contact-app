import React, { useState } from "react"

import ContactsList from "./ContactsList"
import inputs from "../constants/inputs"

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
        {inputs.map((item, index) => (
          <input
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            value={contact[item.name]}
            onChange={formHandler}
            key={index}
          />
        ))}

        <button onClick={addHandler}>Add Contatc</button>
      </div>
      {alert && <p>{alert}</p>}
      <ContactsList contacts={contacts} />
    </div>
  )
}

export default Contacts
