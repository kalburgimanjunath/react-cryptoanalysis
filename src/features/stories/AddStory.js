import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
export default function AddStory() {
  const submitCourse = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          Title: title,
          Subheading: subheading,
          content: content,
          Status: 'Published',
          Tags: 'money',
        },
      }),
    };
    console.log(requestOptions.body);
    fetch(
      'https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories?&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w',
      requestOptions
    ).then((response) => response.json());
    // .then((data) => console.log(data));
  };

  const AddStorySchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short')
      .max(20, 'Too long')
      .required('Required'),
    subheading: Yup.string()
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
    <>
      <form method="post">
        <label>Title</label>
        <input
          type="text"
          name="name"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Image</label>
        <input
          type="file"
          name="image"
          placeholder="image"
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <label>Sub heading</label>
        <input
          type="text"
          name="subheading"
          placeholder="Sub heading"
          onChange={(e) => setSubheading(e.target.value)}
        />
        <br />
        <label>Content</label>
        <input
          type="text"
          name="content"
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        {/* <MyInput /> */}
        <button type="button" onClick={submitCourse}>
          Add <i className="fa-solid fa-plus"></i>
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </button>
      </form>
    </>
  );
}
