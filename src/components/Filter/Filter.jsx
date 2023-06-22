import { Formik, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { contactsState } from 'store/selectors';
import { filterContact } from 'store/sliceReducer';
import { StyledForm } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const {items} = useSelector(contactsState);

  return (
    <Formik
      initialValues={{ vidibleContacts: '' }}
      onSubmit={(values) => { }}
    >
      {({ values, setFieldValue }) => (
        <StyledForm>
          <label htmlFor="findcontact">Find contacts by name</label>
          <Field
            id="findcontact"
            name="vidibleContacts"
            type="text"
            onChange={({ target }) => {
              const filteredContacts = items.filter(item =>
                item.name.toLowerCase().includes(target.value.toLowerCase()));
              dispatch(filterContact(filteredContacts));
              setFieldValue('vidibleContacts', target.value);
            }}
            value={values.vidibleContacts}
          />
        </StyledForm>
      )}
    </Formik>
  );
};

export default Filter;

  // useEffect(() => {
  //   if (!inputValue) {
  //     dispatch(filterContact(''));
  //   } else {
  //     const filteredContacts = contacts.items.filter(item =>
  //       item.name.toLowerCase().includes(inputValue.toLowerCase())
  //     );
  //     dispatch(filterContact(filteredContacts));
  //   }
  // }, [contacts, dispatch, inputValue]);

  // function handleInputChange({ target }) {
  //   setInputValue(target.value);
  // }
