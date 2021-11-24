import React, { useState } from 'react';
import AddStory from './AddStory';
import { useSelector, useDispatch } from 'react-redux';

import { add, deletion } from './ContentSlice';
import TextEditor from './TextEditor';
export default function Content() {
  const stories = useSelector((state) => state.stories);
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isAddStory, setAddStory] = useState(true);
  const onDelete = () => {
    dispatch(deletion);
  };
  const listStory = stories.map((item) => (
    <div key={item.id}>
      <div>{item.id}</div>
      <a href={item.id}>
        <div>{item.title}</div>
      </a>
      <a href={`./delete/${item.title}`}>Edit</a>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
      <div>{item.subheading}</div>
      <div>{item.content}</div>
    </div>
  ));
  const onClick = () => {
    // console.log('clicked');
    setAddStory(true);
  };
  const onClickCancel = () => {
    // console.log('clicked');
    setAddStory(false);
  };
  return (
    <div>
      {isAddStory ? (
        <>
          <AddStory close={isAddStory} />
          <button onClick={onClickCancel}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={onClick}>Add a Story</button>
          {listStory}
        </>
      )}

      {/* Story list with edit and delete,archive list*/}
    </div>
  );
}
