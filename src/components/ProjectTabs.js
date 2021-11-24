import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Post from './Posts';

export default function Tabs({ newComponent, type }) {
  const [key, setKey] = useState('trending');
  const tabs = [
    { name: 'trending', title: 'Trending' },
    { name: 'latest', title: 'Latest' },
    { name: 'best', title: 'Best' },
  ];
  const tabsHead = tabs.map((item) => {
    return (
      <Tab eventKey={item.name} title={item.title}>
        <Post title={item.title} />
      </Tab>
    );
  });
  return (
    <>
      {type == 'inner' ? (
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          {/* <Tab eventKey="trending" title="Trending ">
            <Post title="Trending" />
          </Tab>
          <Tab eventKey="latest" title="Latest">
            <Post title="Latest" />
          </Tab>
          <Tab eventKey="best" title="Best">
            <Post title="Best" />
          </Tab> */}
          {tabsHead}
        </Tabs>
      ) : (
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          {/* <Tab eventKey="trending" title="Trending ">
            
            <Post title="Trending" />
          </Tab>
          <Tab eventKey="latest" title="Latest">
            
            <Post title="Latest" />
          </Tab>
          <Tab eventKey="best" title="Best">
            
            <Post title="Best" />
          </Tab> */}
          {tabsHead}
        </Tabs>
      )}
    </>
  );
}
