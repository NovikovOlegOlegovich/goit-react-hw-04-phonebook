import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { Wrapper } from './App.styled';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Title from '../Title';

export default class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  checkUnicName = currentName => {
    const { contacts } = this.state;
    return contacts.find(contact => contact.name === currentName);
  };

  formSubmitHendler = data => {
    const { name } = data;
    if (this.checkUnicName(name)) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }
    this.setState(prevSet => ({
      contacts: [...prevSet.contacts, data],
    }));
  };

  filterHendler = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { contacts } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm formSubmitHendler={this.formSubmitHendler} />

        <Title>Contacts</Title>
        <Filter filter={this.state.filter} filterHendler={this.filterHendler} />
        <ContactList
          contacts={visibleContacts}
          ondDeleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
