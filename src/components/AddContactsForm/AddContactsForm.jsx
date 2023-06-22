import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  StyledSection,
  StyledForm,
  StyledButton,
  StyledErrorContainer,
} from './AddContactsForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'store/operations';
import { currentDate } from 'utils/currentDate';

function AddContactsForm() {
  const dispatch = useDispatch();

  return (
    <StyledSection>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(addContact({ ...values, createdAt: currentDate() }));
          resetForm();
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Не більше 15 символів')
            .trim()
            .required('Потрібно заповнити поле'),
          number: Yup.string()
            .matches(/^\d+$/, 'Должны быть только цифры')
            .max(10, 'Не більше 10 символів')
            .required('Потрібно заповнити поле'),
        })}
      >
        <StyledForm>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Jane" type="text" />
          <ErrorMessage name="name" component={StyledErrorContainer} />

          <label htmlFor="number">Phone</label>
          <Field
            id="number"
            name="number"
            placeholder="1112223334"
            type="tel"
          />
          <ErrorMessage name="number" component={StyledErrorContainer} />
          <StyledButton type="submit">add</StyledButton>
        </StyledForm>
      </Formik>
    </StyledSection>
  );
}

export default AddContactsForm;
