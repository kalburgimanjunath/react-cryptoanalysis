import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
export default function Signup() {
  const SignupSchema = Yup.object().shape({
    displayname: Yup.string()
      .min(2, 'Too Short')
      .max(20, 'Too long')
      .required('Required'),
    firstname: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    lastname: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(2, 'Too short')
      .max(20, 'Too long')
      .required('Required'),
  });
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          displayname: '',
          firstname: '',
          lastname: '',
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = 'Required';
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = 'Invalid email address';
        //   }
        //   return errors;
        // }}
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
            <Field type="text" name="displayname" placeholder="displayname" />
            <ErrorMessage
              name="displayname"
              component="label"
              className="error"
            />
            <Field type="text" name="firstname" placeholder="firstname" />
            <ErrorMessage
              name="firstname"
              component="label"
              className="error"
            />
            <Field type="text" name="lastname" placeholder="lastname" />
            <ErrorMessage name="lastname" component="label" className="error" />

            <Field type="email" name="email" placeholder="email" />
            <ErrorMessage name="email" component="label" className="error" />
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="label" className="error" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
