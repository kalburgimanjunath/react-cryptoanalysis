import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form className="form">
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="label" className="error" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="label" className="error" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <a href="./signup">Signup</a>
          </Form>
        )}
      </Formik>
    </div>
  );
}
