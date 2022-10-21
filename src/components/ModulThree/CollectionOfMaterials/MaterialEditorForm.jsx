import { Formik, Form, Field } from 'formik';

const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    await onSubmit(values);
    setSubmitting(false);
    resetForm();
  };
  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label style={{ marginBottom: 10 }}>
            Назва
            <Field name="title" type="text" />
          </label>
          <label style={{ marginBottom: 10 }}>
            Посилання
            <Field name="link" type="url" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Додати новий матеріал
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default MaterialEditorForm;
