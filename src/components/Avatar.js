import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Avatar({ user, size, ...data }) {
  // let userData = user;
  let onlyAvatar = true;
  let width = '40';
  let height = '40';
  // console.log(size);
  // if (size) {
  //   const width = '40px';
  //   const height = '40px';
  // } else {
  //   const width = '100px';
  //   const height = '100px';
  // }
  let [userData, setUser] = useState(user);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      // 4. Setting *photos* to the image url that we received from the response above
      .then((data) => setUser(data));
  }, []);
  // console.log(userData);
  let { type } = data;
  return (
    <>
      {type == 'onlyimage' ? (
        <Image
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          roundedCircle
          width={width}
          height={height}
        />
      ) : (
        <>
          <Container>
            <Row>
              <Col>
                <Image
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  roundedCircle
                />
              </Col>
              <Col>
                <div>{userData.name}</div>
                <div>{userData.company.catchPhrase}</div>
              </Col>
              <Col>
                <button type="button">Follow</button>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
}
