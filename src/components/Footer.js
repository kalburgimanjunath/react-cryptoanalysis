import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  const links = [
    'Help',

    'Status',

    'Writers',

    'Blog',

    'Careers',

    'Privacy',

    'Terms',

    'About',
  ];
  return (
    <div>
      {links.map((item) => {
        return <Link to={`/${item}`}>{item}</Link>;
      })}
    </div>
  );
}
