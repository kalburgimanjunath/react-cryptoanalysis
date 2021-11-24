import React, { useState, useEffect } from 'react';
import Courses from '../features/courses/Courses';
export default function AllCourses() {
  const [courses, setCourses] = useState('');
  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Courses?&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((data) => setCourses(data.records))
      .catch((error) => console.log(error));
  });
  // console.log(courses);
  const CourseDetail = ({ item }) => {
    return <div>{item.Name}</div>;
  };
  return (
    <div>
      <h1>AllCourses</h1>
      <Courses />
      {courses &&
        courses.map((item) => {
          return (
            <div>
              <CourseDetail item={item.fields} />
            </div>
          );
        })}
    </div>
  );
}
