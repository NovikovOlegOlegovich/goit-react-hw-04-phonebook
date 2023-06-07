import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  PhonebookForm,
  NameInput,
  Label,
  FormButton,
} from './ContactForm.styled';

export default class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleInputNameChange = event => {
    const { value, name } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    const nameId = nanoid();
    this.props.formSubmitHendler({
      id: nameId,
      name: this.state.name,
      number: this.state.number,
    });
    this.reset();
  };

  render() {
    return (
      <PhonebookForm onSubmit={this.handleSubmit}>
        <Label>
          Name
          <NameInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputNameChange}
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
            value={this.state.number}
            onChange={this.handleInputNameChange}
          />
        </Label>

        <FormButton type="submit">Add contact</FormButton>
      </PhonebookForm>
    );
  }
}

ContactForm.propTypes = {
  formSubmitHendler: PropTypes.func.isRequired,
};
