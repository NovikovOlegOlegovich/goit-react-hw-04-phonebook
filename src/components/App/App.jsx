import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { Wrapper } from './App.styled';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Title from '../Title';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (!parsedContacts) {
      return [];
    }
    return parsedContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  const checkUnicName = currentName => {
    return contacts.find(contact => contact.name === currentName);
  };

  const formSubmitHendler = data => {
    const { name } = data;
    if (checkUnicName(name)) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, data]);
  };

  const filterHendler = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm formSubmitHendler={formSubmitHendler} />

      <Title>Contacts</Title>
      <Filter filter={filter} filterHendler={filterHendler} />
      <ContactList
        contacts={visibleContacts}
        ondDeleteContact={deleteContact}
      />
    </Wrapper>
  );
};

export default App;
