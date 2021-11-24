import React, { useState, useEffect } from 'react';
import Ideas from '../features/Ideas/Ideas';
export default function AllCourses() {
  const [courses, setCourses] = useState('');
  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Ideas?&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((data) => setCourses(data.records))
      .catch((error) => console.log(error));
  });
  // console.log(courses);
  const IdeasDetail = ({ item }) => {
    return <div>{item.Problem}</div>;
  };
  return (
    <div>
      <h1>All Ideas</h1>
      <Ideas />
      {courses &&
        courses.map((item) => {
          return (
            <div>
              <IdeasDetail item={item.fields} />
            </div>
          );
        })}
    </div>
  );
}
