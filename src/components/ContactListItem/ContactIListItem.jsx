import {
  ContactNameItem,
  ContactNameText,
  ContactNumberText,
  ContactListButton,
} from './ContactListItem.styled';
import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactNameItem>
      <ContactNameText>{name}</ContactNameText>
      <ContactNumberText>{number}</ContactNumberText>
      <ContactListButton onClick={() => onDeleteContact(id)}>
        Delete
      </ContactListButton>
    </ContactNameItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
