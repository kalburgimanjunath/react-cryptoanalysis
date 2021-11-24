import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  Header,
  Topics,
  Avatar,
  Carousel,
  ProjectTabs,
  Posts,
  Post,
} from '../components/index';

export default function InnerPage({ topics, users }) {
  return (
    <>
      <Post title="text" />
      <Row>
        <Col>
          <ProjectTabs type="inner" />
        </Col>
        <Col>
          <Col>
            <h3>RELATED TOPICS</h3>
            <Topics />
            <h3>TOP WRITERS</h3>
            {users &&
              users.map((item) => {
                return <Avatar user={item} type="details" />;
              })}
          </Col>
        </Col>
      </Row>
    </>
  );
}
