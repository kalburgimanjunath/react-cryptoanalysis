import React, { useState, useEffect } from 'react';
import './style.css';
import {
  Header,
  Topics,
  Avatar,
  Carousel,
  ProjectTabs,
  Posts,
  Footer,
} from './components/index';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import store from './app/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as data from './data/data.js';
import Home from './pages/Home';
import InnerPage from './pages/InnerPage';
import Airtable from './pages/Airtable';
import TodoApp from './pages/TodoApp';
import AllCourses from './pages/AllCourses';
import AllStories from './pages/AllStories';
import AllIdeas from './pages/AllIdeas';
import { User } from './features/users/User';
import Login from './features/Login/Login';
import Signup from './features/Signup/Signup';
import Content from './features/Content/Content';
import Movies from './features/Movie/Movie';
import Crypto from './features/Crypto/Crypto';
import MPCLogin from './features/mpc/Login';
export default function App() {
  let [users, setusers] = useState(null);
  // const {topics} = data;
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      // 4. Setting *photos* to the image url that we received from the response above
      .then((data) => setusers(data));
  }, []);

  const topics = [
    'topic1',
    'topic2',
    'topic3',
    'topic4',
    'topic5',
    'topic6',
    'topic7',
  ];
  const AvatarCategory =
    users &&
    users.map((item) => {
      return <Avatar user={item} type="onlyimage" />;
    });
  // let match = useRouteMatch();
  // let { topicId } = useParams();
  // console.log(topicId);
  return (
    <div className="container">
      <Header title="All in One" />
      <Router>
        <Switch>
          <Route path="/tags">
            <InnerPage topics={topics} users={users} />
          </Route>
          <Route path="/airtable" exact>
            <Provider store={store}>
              <Airtable />
            </Provider>
          </Route>
          <Route path="/todoapp" exact>
            <Provider store={store}>
              <User />
            </Provider>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/courses">
            <AllCourses />
          </Route>
          <Route path="/stories">
            <AllStories />
          </Route>
          <Route path="/Ideas">
            <AllIdeas />
          </Route>
          <Route path="/crypto">
            <Crypto />
          </Route>
          <Route path="/content">
            <Provider store={store}>
              <Content />
            </Provider>
          </Route>
          <Route path="/movie">
            <Provider store={store}>
              <Movies />
            </Provider>
          </Route>
          <Route path="/mpc">
            <Provider store={store}>
              <MPCLogin />
            </Provider>
          </Route>
          <Route path="/" exact>
            <Home topics={topics} users={users} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
