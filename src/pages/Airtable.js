import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Avatar } from './components/Avatar';
import { Counter } from '../features/counter/Counter';
import UserPhoto from '../core/UserPhoto';
import Courses from '../features/courses/Courses';

export default function Airtable() {
  const [users, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/app1uk6s6TI6oRTxZ/Users?&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((data) => setUser(data.records))
      .catch((error) => console.log(error));

    fetch(
      'https://api.airtable.com/v0/app1uk6s6TI6oRTxZ/Posts?&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((data) => setPosts(data.records))
      .catch((error) => console.log(error));
  });
  // console.log(posts);

  const ListItem = ({ item }) => {
    return (
      <li>
        <div>{item.Name}</div>
        <div>{item.Address}</div>
        <div>{item.Status}</div>
        <div>
          <button type="button">Follow</button>
        </div>
      </li>
    );
  };
  const ListPosts = ({ item }) => {
    return (
      <li>
        <div>{item.Title}</div>
        <div>{item.Category}</div>
        <div>{item.Content}</div>
      </li>
    );
  };
  return (
    <div>
      Airtable
      <Courses />
      <h1>Users</h1>
      {users &&
        users.map((item) => {
          return (
            <div>
              <ListItem item={item.fields} key={item.id} />
              <UserPhoto user={item.fields} />
              <Counter />
            </div>
          );
        })}
      <h1>Posts</h1>
      {posts &&
        posts.map((item) => {
          // console.log(item);
          return (
            <div>
              <ListPosts item={item.fields} key={item.id} />
              <Counter />
            </div>
          );
        })}
    </div>
  );
}
