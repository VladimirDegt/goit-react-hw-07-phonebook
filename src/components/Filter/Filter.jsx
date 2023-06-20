import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { contactsState } from 'store/selectors';
// import { filterContact } from "store/filterReducer";
import { filterContact } from 'store/sliceReducer';

const inputFindId = nanoid();

function Filter() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(contactsState);

  useEffect(() => {
    if (!inputValue) {
      dispatch(filterContact(''));
    } else {
      const filteredContacts = contacts.items.filter(item =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      dispatch(filterContact(filteredContacts));
    }
  }, [contacts, dispatch, inputValue]);

  function handleInputChange({ target }) {
    setInputValue(target.value);
  }

  return (
    <>
      <label htmlFor={inputFindId}>Find contacts by name</label>
      <input
        id={inputFindId}
        type="text"
        name="vidibleContacts"
        required
        onChange={handleInputChange}
        value={inputValue}
      />
    </>
  );
}

export default Filter;
