import ContactItem from "./ContactItem"

function ContactsList({ contacts, deleteHandler }) {
  return (
    <div>
      <h3>Contacts List</h3>
      {contacts.length ? (
        contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            data={contact}
            deleteHandler={deleteHandler}
          />
        ))
      ) : (
        <p>No contacts yet</p>
      )}
    </div>
  )
}

export default ContactsList
