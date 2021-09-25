import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add_contact', ({ name, number }) => {
  return {
    payload: {
      
      id: uuidv4(),
      name: name,
      number: number,
    },
  };
});

const deleteContact = createAction('contacts/delete_contact');

const changeFilter = createAction('contacts/change_filter');


export default { addContact, deleteContact, changeFilter };