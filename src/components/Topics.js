import React from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
export default function Topics() {
  const topics = [
    'topic1',
    'topic2',
    'topic3',
    'topic4',
    'topic5',
    'topic6',
    'topic7',
  ];
  let match = useRouteMatch();
  return (
    <div>
      <div>
        {topics.map((item) => {
          return (
            <Link to={`/tags/:${item}`}>
              <Badge as="span" pill bg="primary" text="light">
                {item.toUpperCase()}
              </Badge>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
