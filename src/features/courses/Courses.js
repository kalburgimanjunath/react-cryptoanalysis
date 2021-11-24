import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Courses() {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const submitCourse = () => {
    // console.log('hi');
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: { Name: name, link: link },
      }),
    };
    fetch(
      'https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Courses?&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w',
      requestOptions
    ).then((response) => response.json());
    // .then((data) => console.log(data));
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1>Add new course</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <form method="post">
            <label>Course Title</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Course Link</label>
            <input
              type="text"
              name="link"
              onChange={(e) => setLink(e.target.value)}
            />
            <br />
            <button type="button" onClick={submitCourse}>
              Add
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
