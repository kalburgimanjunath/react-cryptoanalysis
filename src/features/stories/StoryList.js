import React from 'react';
import Table from 'react-bootstrap/Table';
export default function StoryList({ stories }) {
  const StoriesDetail = ({ item }) => {
    return (
      <>
        <td>{item.Title}</td>
        <td>{item.Subheading}</td>
        <td>{item.content}</td>
        <td>{item.Tags}</td>
      </>
    );
  };
  const deleteItem = (item) => {
    // console.log('clicked' + item);
    const url = `https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories/${item}?api_key=keyeNXyxxuuYJY19w`;
    console.log(url);

    const requestOptions = {
      method: 'DELETE',
    };
    fetch(
      `https://api.airtable.com/v0/app3vNDJKkwYgu4Al/Stories/${item}?api_key=keyeNXyxxuuYJY19w`,
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Subheading</th>
            <th>Content</th>
            <th>Tags</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        {stories &&
          stories.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <StoriesDetail item={item.fields} />
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => deleteItem(item.id)}
                    item={item.id}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => updateItem(item.id)}
                    item={item.id}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
      </Table>
    </>
  );
}
