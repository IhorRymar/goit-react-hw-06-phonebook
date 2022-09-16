import { useSelector, useDispatch } from 'react-redux';

// import {
//   addContact,
//   removeContact,
// } from 'components/redux/contacts/contacts-slice';
// import { getFilteredContacts } from 'components/redux/contacts/contacts-selectors';
import { setFilter } from 'components/redux/filter/filter-slice';
import { getFilter } from 'components/redux/filter/filter-selectors';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Container from './Container';

import css from '../Phonebook/ContactsStyle.module.css';

const MyContacts = () => {
  // const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  // const onAddContact = payload => {
  //   const findContact = contacts.find(contact =>
  //     contact.name.toLowerCase().includes(payload.name.toLowerCase())
  //   );
  //   findContact
  //     ? alert(`${payload.name} is already in contact`)
  //     : dispatch(addContact(payload));
  // };

  // const onRemoveContact = payload => {
  //   dispatch(removeContact(payload));
  // };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div>
      <Container className={css.title} title="Phonebook">
        <ContactForm
        // onSubmit={onAddContact}
        />
      </Container>
      <Container className={css.title} title="Contacts">
        <input
          className={css.input}
          name="filter"
          type="text"
          placeholder="Find contact..."
          value={filter}
          onChange={onSetFilter}
        ></input>
        <ContactList
        // contacts={contacts} removeContact={onRemoveContact}
        />
      </Container>
    </div>
  );
};

export default MyContacts;
