import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
export default function Posts({ title }) {
  let [posts, setposts] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      // 4. Setting *photos* to the image url that we received from the response above
      .then((data) => setposts(data));
  }, []);
  return (
    <div>
      <h1>{title}</h1>
      {posts &&
        posts.map((item) => {
          return (
            <Row>
              <Col>
                <Avatar type="onlyimage" size="40" />
                <h1>
                  <Link to="">{item.title}</Link>
                </h1>
                <p>{item.body}</p>
                <p>
                  <Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                      Default Dropdown
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </p>
              </Col>
              <Col>
                <p>
                  <img src="https://picsum.photos/seed/picsum/200/300" />
                </p>
              </Col>
            </Row>
          );
        })}
    </div>
  );
}
