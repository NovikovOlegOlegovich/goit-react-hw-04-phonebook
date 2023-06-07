import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  PhonebookForm,
  NameInput,
  Label,
  FormButton,
} from './ContactForm.styled';

const ContactForm = ({ formSubmitHendler }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const nameId = nanoid();
    formSubmitHendler({
      id: nameId,
      name,
      number,
    });
    reset();
  };

  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <Label>
        Name
        <NameInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={({ target }) => {
            setName(target.value);
          }}
        />
      </Label>
      <Label>
        Number
        <NameInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={({ target }) => {
            setNumber(target.value);
          }}
        />
      </Label>

      <FormButton type="submit">Add contact</FormButton>
    </PhonebookForm>
  );
};

ContactForm.propTypes = {
  formSubmitHendler: PropTypes.func.isRequired,
};

export default ContactForm;
