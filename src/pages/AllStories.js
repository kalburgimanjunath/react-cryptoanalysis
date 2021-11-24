import React, { useState, useEffect } from 'react';
import Stories from '../features/stories/Stories';
import StoryList from '../features/stories/StoryList';

import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
export default function AllStories() {
  const [stories, setStories] = useState('');
  const [story, setStory] = useState('');
  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories?&view=Grid%20view&&api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((data) => setStories(data.records))
      .catch((error) => console.log(error));
  });
  // console.log(Stories);
  // const deleteItem = (item) => {
  //   // console.log('clicked' + item);
  //   const url = `https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories/${item}?api_key=keyeNXyxxuuYJY19w`;
  //   console.log(url);

  //   const requestOptions = {
  //     method: 'DELETE',
  //   };
  //   fetch(
  //     `https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories/${item}?api_key=keyeNXyxxuuYJY19w`,
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .catch((error) => console.log(error));
  // };

  // const updateItem = (item) => {
  //   console.log('clicked' + item);
  //   const url = `https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories/${item}?api_key=keyeNXyxxuuYJY19w`;
  //   console.log(url);

  //   const requestOptions = {
  //     method: 'PUT',
  //   };
  //   fetch(
  //     `https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories/${item}?api_key=keyeNXyxxuuYJY19w`,
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setStory(data.records))
  //     .catch((error) => console.log(error));
  // };

  // console.log(story);
  return (
    <div>
      <h1>All Stories</h1>
      <Stories story={story} />
      <StoryList stories={stories} />
    </div>
  );
}
