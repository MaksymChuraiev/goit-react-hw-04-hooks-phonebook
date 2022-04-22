import { ContactNameList } from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem/ContactIListItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ContactNameList>
        {contacts().map(({ name, number, id }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ContactNameList>
    </>
  );
};

ContactList.propTypes = {
  getContactsList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
