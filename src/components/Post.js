import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { Avatar, Topics } from '../components/index';
import { Link } from 'react-router-dom';
export default function Post({ title }) {
  let [item, setposts] = useState(null);
  let postItem;
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      // 4. Setting *photos* to the image url that we received from the response above
      .then((data) => setposts(data));
  }, []);

  if (item) {
    postItem = (
      <>
        <Row>
          <Col>
            <h1>{item.title}</h1>
            <Row>
              <Col>
                <Avatar type="onlyimage" size="40" />
              </Col>
              <Col>
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
            </Row>
            <p>{item.body}</p>
          </Col>
          <Col>
            <p>
              <img src="https://picsum.photos/seed/picsum/200/300" />
            </p>
          </Col>
        </Row>
        <Row>
          <Topics />
        </Row>
      </>
    );
  } else {
    postItem = <h1>Loading</h1>;
  }
  return <div>{postItem}</div>;
}
