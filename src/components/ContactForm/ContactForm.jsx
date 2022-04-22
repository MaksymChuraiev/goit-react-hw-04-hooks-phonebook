import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormTitle,
  Form,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <>
      <FormTitle>Phonebook</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            name="number"
            type="tel"
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="off"
          />
        </FormLabel>

        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// import { Component } from 'react';
// import { Formik, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import PropTypes from 'prop-types';
// import {
//   FormTitle,
//   FormThumb,
//   FormLabel,
//   FormInput,
//   FormButton,
//   FormErrorMessage,
// } from './ContactForm.styled';

// const initialValues = {
//   name: '',
//   number: '',
// };

// const validationSchema = Yup.object({
//   name: Yup.string()
//     .required()
//     .matches(
//       "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
//       'Name may contain only letters, apostrophe, dash and spaces.'
//     ),
//   number: Yup.string().required(),
// });

// const renderErrorMessage = message => (
//   <FormErrorMessage>{message}</FormErrorMessage>
// );

// export const ContactForm = ({ onSubmit }) => {
//   const handleSubmit = (values, { resetForm }) => {
//     onSubmit(values);

//     resetForm();
//   };

//   return (
//     <>
//       <FormTitle>Phonebook</FormTitle>
//       <Formik
//         validationSchema={validationSchema}
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//       >
//         <FormThumb>
//           <FormLabel>
//             Name
//             <FormInput name="name" type="text" />
//             <ErrorMessage name="name" render={renderErrorMessage} />
//           </FormLabel>
//           <FormLabel>
//   Number
//   <FormInput name="number" type="tel" />
//   <ErrorMessage name="number" render={renderErrorMessage} />
// </FormLabel>
//           <FormButton type="submit">Add contact</FormButton>
//         </FormThumb>
//       </Formik>
//     </>
//   );
// };

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export class ContactForm extends Component {
//   state = {
//     name: '',
//   };

//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);
//     this.setState({ name: '' });
//   };

//   render() {
//     return (
// <>
//   <FormTitle>Phonebook</FormTitle>
//   <Form onSubmit={this.handleSubmit}>
//     <FormNameLabel>
//       Name
//       <FormNameInput
//         type="text"
//         name="name"
//         value={this.state.name}
//         onChange={this.handleInputChange}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//     </FormNameLabel>
//     <FormNameButton type="submit">Add contact</FormNameButton>
//   </Form>
// </>
//     );
//   }
// }
