import PropTypes from 'prop-types';
import {
  ContList,
  ContactItem,
  ContactDeskription,
  ContactButton,
} from './ContactList.styled';

export default function ContactList({ contacts, ondDeleteContact }) {
  return (
    <ContList>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <ContactDeskription>
            {contact.name} : {contact.number}
          </ContactDeskription>
          <ContactButton onClick={() => ondDeleteContact(contact.id)}>
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ContList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  ondDeleteContact: PropTypes.func.isRequired,
};
