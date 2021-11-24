import React, { useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { add } from './ContentSlice';
import TextEditor from './TextEditor';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AddStory({ close }) {
  const [needToClose, setClose] = useState({ close });
  const text = useState('sample text');
  const dispatch = useDispatch();
  const FormValidatorScheme = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short')
      .max(500, 'Too long')
      .required('Required'),
    content: Yup.string().min(2, 'Too Short').max(500, 'Too long'),
  });

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Add New Story</h1>
            <Formik
              initialValues={{
                email: '',
                subheading: '',
                title: '',
                content: '',
              }}
              validationSchema={FormValidatorScheme}
              onSubmit={(values) => {
                // same shape as initial values
                // console.log(values);
                dispatch(add(values));
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field name="title" placeholder="title" />
                  {/* If this field has been touched, and it contains an error, display it
                   */}
                  {touched.title && errors.title && <div>{errors.title}</div>}
                  <br />
                  <Field name="subheading" placeholder="subheading" />
                  {/* If this field has been touched, and it contains an error, display
           it */}
                  {touched.subheading && errors.subheading && (
                    <div>{errors.subheading}</div>
                  )}
                  <br />
                  {/* <Field
              type="textarea"
              name="content"
              rows="4"
              cols="40"
              placeholder="content"
            /> */}

                  <TextEditor
                    className="error"
                    name="content"
                    placeholder="content"
                  />
                  {/* If this field has been touched, and it contains an error, display
           it */}
                  {touched.content && errors.content && (
                    <div>{errors.content}</div>
                  )}
                  <br />
                  <button type="submit">Add</button>
                </Form>
              )}
            </Formik>
          </Col>
          <Col>
            <div>
              <TextEditor
                className="error"
                name="content"
                placeholder="content"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
