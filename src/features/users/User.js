import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './UserSlice';

export function User() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(add('manjunath'))}
        >
          Add User
        </button>
        <span>{user}</span>
        {/* <button
          aria-label="Decrement value"
          onClick={() => dispatch(delete())}
        >
          Dislike
        </button> */}
      </div>
    </div>
  );
}
