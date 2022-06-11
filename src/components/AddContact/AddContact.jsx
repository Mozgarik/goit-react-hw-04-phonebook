import React, {useState} from 'react';
import s from './Form.module.css'


function AddContact({ onSubmit }) {
const [name, setName] = useState("")
const [number, setNumber] = useState("")

  

const handleChange = e => {
if(e.currentTarget.name === "name") setName(e.currentTarget.value)
if(e.currentTarget.name === "number") setNumber(e.currentTarget.value)
};

 const handleSumbit = e => {
    e.preventDefault();

    onSubmit({
      name: name,
      number: number
    });
    setName("")
    setNumber("")
   
  };

  return (
    <div>
      <form onSubmit={handleSumbit} >
        <label>
          <br />
          <input
          placeholder='Name'
            className={s.contactInput}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label>
          <br />
          <input
          placeholder='Number'
          className={s.contactInput}
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <button type="sumbit" className={s.button}>Add Contact</button>
      </form>
    </div>
  );
  };

    

export default AddContact;
