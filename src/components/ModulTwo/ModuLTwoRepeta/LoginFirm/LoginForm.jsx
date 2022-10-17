import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

const Input = styled(Field)`
  color: #463b3b;
`;

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

const initualValues = {
  login: '',
  password: '',
};

export const LoginForm = () => {
  const onSubmit = (values, actions) => {
    console.log(values, actions);
    const { resetForm } = actions;
    resetForm();
  };
  return (
    <Formik initialValues={initualValues} onSubmit={onSubmit} validationSchema={schema}>
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          Password
          <Input type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

// =============================================================
// приклад без бібліотеки
// export const LoginForm = () => {
//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(e);
//     const { login, password } = e.target.elements;
//     console.log(login.value, password.value);
//   };
//   return (
//     <form autoComplete="off" onSubmit={handleSubmit}>
//       <label htmlFor="login">
//         Login
//         <input type="text" name="login" />
//       </label>
//       <label htmlFor="password">
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
