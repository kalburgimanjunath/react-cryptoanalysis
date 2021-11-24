import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import AddStory from './AddStory';

// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
export default function Stories() {
  const [title, setTitle] = useState('');
  const [subheading, setSubheading] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };
  const uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  };

  const MyInput = () => {
    return (
      <div className="">
        <Editor
          name="editor"
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
          mention={{
            separator: ' ',
            trigger: '@',
            suggestions: [
              { text: 'APPLE', value: 'apple', url: 'apple' },
              { text: 'BANANA', value: 'banana', url: 'banana' },
              { text: 'CHERRY', value: 'cherry', url: 'cherry' },
              { text: 'DURIAN', value: 'durian', url: 'durian' },
              { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
              { text: 'FIG', value: 'fig', url: 'fig' },
              { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
              { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
            ],
          }}
          hashtag={{}}
        />
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </div>
    );
  };

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

  const updateCourse = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          Title: title,
          Subheading: subheading,
          content: content,
          Status: 'Published',
        },
      }),
    };
    fetch(
      'https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories?&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w',
      requestOptions
    ).then((response) => response.json());
    // .then((data) => console.log(data));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Add new Story</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddStory />
          {/* <form method="post">
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
            <MyInput />
            <button type="button" onClick={submitCourse}>
              Add <i className="fa-solid fa-plus"></i>
              <FontAwesomeIcon icon={faPlus} size="lg" />
            </button>
          </form> */}
        </Col>
      </Row>
    </Container>
  );
}
