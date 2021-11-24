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
  Posts
} from '../components/index';


export default function Home({topics,users}) {
  return <Container>
  <Row>
    <Col>
      <h1>Your Topics</h1>
      <Topics />
      <Container>
        <Row>
        <Col><Carousel data={topics} component={}/></Col>
        </Row>
        <Row>
        {users && users.map((item) => {
          return <Col as="span" xs lg="2"><Avatar user={item} type="onlyimage"/></Col>
        })}
        </Row>
        <Row>
          <ProjectTabs/>
        </Row>
      </Container>        
    </Col>
    <Col>
      <h3>Recommended Topics</h3>
      <Topics/>
      <h3>Who to follow</h3>
      {users &&
        users.map((item) => {
          return <Avatar user={item} type="details"/>;
        })}
      <h3>Recently saved</h3>
      <Posts/>
    </Col>
  </Row>      
</Container>
}
