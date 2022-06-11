import React, { useState } from "react"
import AddContact from "components/AddContact/AddContact"
import { nanoid } from "nanoid"
import { ContactList } from "components/AddContact/ContactList"
import { Filter } from "components/Filter/Filter"
import s from './components/AddContact/Form.module.css'
import useLocalStorage from "components/AddContact/hooks/useLocalStorage"

 function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
  ])
  const [filter, setFilter] = useState('')


const formSubmitHandler = data => {
    const item = {id: nanoid(), name: data.name, number: data.number}  
    const isUnique = contacts.some(el => el.name === data.name)
    if(!isUnique){
      setContacts(prevContacts => {
      return [...prevContacts, item]
      })
    } else alert('error')
  }

  const onHandleChangeFilter = e => {
    setFilter(e.currentTarget.value)
  }

  const onRenderContacts = () => {
    const lowerFilter = filter.toLowerCase()
    return contacts.filter(el => el.name.toLowerCase().includes(lowerFilter))
  }
 
  const onDeleteContacts = id => {
    setContacts(prevContacts => {
    return prevContacts.filter(el => el.id !== id)
    })
  }
  
    return (
     <div className={s.formContact}>
       <h1>Phonebook</h1>
   <AddContact 
   onSubmit = {formSubmitHandler}
   />
   <h2>Contacts</h2>
   <Filter
   onFilter = {onHandleChangeFilter}
   value = {filter}
   />
  <ContactList
  contacts = {onRenderContacts()}
  onDelete = {onDeleteContacts}
  />
  
     </div>
    )
  }
 
export default App