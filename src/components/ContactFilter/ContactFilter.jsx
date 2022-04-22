import React from 'react';
import PropTypes from 'prop-types';
import { ContactFilterLabel, ContactFilterInput } from './ContactFilter.styled';

export const ContactFilter = ({ value, onChange }) => {
  return (
    <ContactFilterLabel>
      Find contacts by name
      <ContactFilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </ContactFilterLabel>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
